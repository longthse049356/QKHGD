import fs from 'fs';
import path from 'path';

export interface Article {
  id: number;
  title: string;
  thumbnail: string;
  content: string; // Thay đổi từ document sang content
  createdAt: string;
  updatedAt: string;
}

export interface Database {
  articles: Article[];
  lastId: number;
  createdAt: string;
  updatedAt: string;
}

export interface UploadedFile {
  originalname: string;
  buffer: Buffer;
  mimetype: string;
  size: number;
}

const DB_PATH = path.join(process.cwd(), 'database', 'articles.json');
const THUMBNAIL_DIR = path.join(process.cwd(), 'public', 'thumbnails');
const HTML_DIR = path.join(process.cwd(), 'public', 'html');

// Đảm bảo thư mục tồn tại
const ensureDirectories = () => {
  if (!fs.existsSync(THUMBNAIL_DIR)) {
    fs.mkdirSync(THUMBNAIL_DIR, { recursive: true });
  }
  if (!fs.existsSync(HTML_DIR)) {
    fs.mkdirSync(HTML_DIR, { recursive: true });
  }
};

// Đọc database
export const readDatabase = (): Database => {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const initialDB: Database = {
        articles: [],
        lastId: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      fs.writeFileSync(DB_PATH, JSON.stringify(initialDB, null, 2));
      return initialDB;
    }

    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {
      articles: [],
      lastId: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
};

// Ghi database
export const writeDatabase = (data: Database): void => {
  try {
    ensureDirectories();
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error('Không thể ghi database');
  }
};

// Thêm bài viết mới
export const addArticle = (
  articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>,
): Article => {
  const db = readDatabase();
  const newId = db.lastId + 1;

  const newArticle: Article = {
    ...articleData,
    id: newId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  db.articles.push(newArticle);
  db.lastId = newId;
  db.updatedAt = new Date().toISOString();

  writeDatabase(db);
  return newArticle;
};

// Lấy tất cả bài viết
export const getAllArticles = (): Article[] => {
  const db = readDatabase();
  return db.articles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

// Lấy bài viết theo ID
export const getArticleById = (id: number): Article | null => {
  const db = readDatabase();
  return db.articles.find((article) => article.id === id) || null;
};

// Xóa bài viết
export const deleteArticle = (id: number): boolean => {
  const db = readDatabase();
  const articleIndex = db.articles.findIndex((article) => article.id === id);

  if (articleIndex === -1) {
    return false;
  }

  const article = db.articles[articleIndex];

  // Xóa file ảnh và content
  try {
    if (fs.existsSync(path.join(process.cwd(), 'public', article.thumbnail))) {
      fs.unlinkSync(path.join(process.cwd(), 'public', article.thumbnail));
    }
    if (fs.existsSync(path.join(process.cwd(), 'public', article.content))) {
      fs.unlinkSync(path.join(process.cwd(), 'public', article.content));
    }
  } catch (error) {
    console.error('Error deleting files:', error);
  }

  db.articles.splice(articleIndex, 1);
  db.updatedAt = new Date().toISOString();

  writeDatabase(db);
  return true;
};

// Cập nhật bài viết
export const updateArticle = (
  id: number,
  updates: Partial<Omit<Article, 'id' | 'createdAt'>>,
): Article | null => {
  const db = readDatabase();
  const articleIndex = db.articles.findIndex((article) => article.id === id);

  if (articleIndex === -1) {
    return null;
  }

  db.articles[articleIndex] = {
    ...db.articles[articleIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  db.updatedAt = new Date().toISOString();
  writeDatabase(db);

  return db.articles[articleIndex];
};

// Lưu file upload
export const saveUploadedFile = (file: UploadedFile, type: 'thumbnail' | 'content'): string => {
  ensureDirectories();

  const timestamp = Date.now();
  const originalName = file.originalname;
  const extension = path.extname(originalName);
  const fileName = `${timestamp}_${path.basename(originalName, extension)}${extension}`;

  let targetDir: string;
  let relativePath: string;

  if (type === 'thumbnail') {
    targetDir = THUMBNAIL_DIR;
    relativePath = `thumbnails/${fileName}`;
  } else {
    targetDir = HTML_DIR;
    relativePath = `html/${fileName}`;
  }

  const targetPath = path.join(targetDir, fileName);

  try {
    // Chuyển đổi Buffer sang Uint8Array để tương thích với fs.writeFileSync
    const uint8Array = new Uint8Array(file.buffer);
    fs.writeFileSync(targetPath, uint8Array);
    return relativePath;
  } catch (error) {
    throw new Error('Không thể lưu file');
  }
};
