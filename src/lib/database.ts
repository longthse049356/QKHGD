import fs from 'fs';
import path from 'path';
import { put, del, list } from '@vercel/blob';

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
const DB_BLOB_PREFIX = 'articles/index';

const isVercel = !!process.env.VERCEL;
const useBlobStorage = isVercel || !!process.env.BLOB_READ_WRITE_TOKEN;

// Đảm bảo thư mục tồn tại (local only)
const ensureDirectories = () => {
  if (!fs.existsSync(THUMBNAIL_DIR)) {
    fs.mkdirSync(THUMBNAIL_DIR, { recursive: true });
  }
  if (!fs.existsSync(HTML_DIR)) {
    fs.mkdirSync(HTML_DIR, { recursive: true });
  }
};

// Local FS helpers
const readDatabaseLocal = (): Database => {
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

const writeDatabaseLocal = (data: Database): void => {
  try {
    ensureDirectories();
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error('Không thể ghi database');
  }
};

// Blob helpers
const readDatabaseFromBlob = async (): Promise<Database> => {
  const { blobs } = await list({ prefix: DB_BLOB_PREFIX });
  const typedBlobs = blobs as Array<{ pathname: string; url: string; uploadedAt?: string | Date }>;

  // Pick the latest DB by uploadedAt or lexicographically by pathname
  const latest = typedBlobs
    .filter((b) => b.pathname.startsWith(DB_BLOB_PREFIX))
    .sort((a, b) => {
      const aTime = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
      const bTime = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
      if (aTime !== 0 || bTime !== 0) return bTime - aTime;
      return a.pathname.localeCompare(b.pathname) * -1;
    })[0];

  if (latest) {
    const res = await fetch(latest.url);
    if (res.ok) {
      return (await res.json()) as Database;
    }
  }

  // Fallback: seed an empty DB directly into blob
  const initialDB: Database = {
    articles: [],
    lastId: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await writeDatabaseToBlob(initialDB);
  return initialDB;
};

const writeDatabaseToBlob = async (data: Database): Promise<void> => {
  const timestamp = Date.now();
  const pathname = `${DB_BLOB_PREFIX}-${timestamp}.json`;
  await put(pathname, JSON.stringify(data, null, 2), {
    access: 'public',
    contentType: 'application/json',
  });
};

// Public API
export const readDatabase = async (): Promise<Database> => {
  if (useBlobStorage) {
    try {
      return await readDatabaseFromBlob();
    } catch (e) {
      // If blob not configured correctly, avoid crashing
      return readDatabaseLocal();
    }
  }
  return readDatabaseLocal();
};

export const writeDatabase = async (data: Database): Promise<void> => {
  if (useBlobStorage) {
    try {
      await writeDatabaseToBlob(data);
      return;
    } catch (e) {
      // If blob write fails in prod, surface a clear error
      throw new Error('Không thể ghi database');
    }
  }
  writeDatabaseLocal(data);
};

// Thêm bài viết mới
export const addArticle = async (
  articleData: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>,
): Promise<Article> => {
  const db = await readDatabase();
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

  await writeDatabase(db);
  return newArticle;
};

// Lấy tất cả bài viết
export const getAllArticles = async (): Promise<Article[]> => {
  const db = await readDatabase();
  return db.articles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
};

// Lấy bài viết theo ID
export const getArticleById = async (id: number): Promise<Article | null> => {
  const db = await readDatabase();
  return db.articles.find((article) => article.id === id) || null;
};

// Xóa bài viết
export const deleteArticle = async (id: number): Promise<boolean> => {
  const db = await readDatabase();
  const articleIndex = db.articles.findIndex((article) => article.id === id);

  if (articleIndex === -1) {
    return false;
  }

  const article = db.articles[articleIndex];

  // Xóa file ảnh và content
  try {
    if (useBlobStorage) {
      // Only attempt to delete blobs if we stored URLs
      if (article.thumbnail?.startsWith('http')) {
        await del(article.thumbnail).catch(() => {});
      }
      if (article.content?.startsWith('http')) {
        await del(article.content).catch(() => {});
      }
    } else {
      // Local filesystem cleanup
      const thumbLocal = path.join(process.cwd(), 'public', article.thumbnail);
      const contentLocal = path.join(process.cwd(), 'public', article.content);
      if (fs.existsSync(thumbLocal)) {
        fs.unlinkSync(thumbLocal);
      }
      if (fs.existsSync(contentLocal)) {
        fs.unlinkSync(contentLocal);
      }
    }
  } catch (error) {
    console.error('Error deleting files:', error);
  }

  db.articles.splice(articleIndex, 1);
  db.updatedAt = new Date().toISOString();

  await writeDatabase(db);
  return true;
};

// Cập nhật bài viết
export const updateArticle = async (
  id: number,
  updates: Partial<Omit<Article, 'id' | 'createdAt'>>,
): Promise<Article | null> => {
  const db = await readDatabase();
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
  await writeDatabase(db);

  return db.articles[articleIndex];
};

// Lưu file upload
export const saveUploadedFile = async (
  file: UploadedFile,
  type: 'thumbnail' | 'content',
): Promise<string> => {
  const timestamp = Date.now();
  const originalName = file.originalname;
  const extension = path.extname(originalName);
  const baseName = path.basename(originalName, extension);
  const fileName = `${timestamp}_${baseName}${extension}`;

  if (useBlobStorage) {
    const folder = type === 'thumbnail' ? 'thumbnails' : 'html';
    const pathname = `${folder}/${fileName}`;
    const blob = await put(pathname, file.buffer, {
      access: 'public',
      contentType: file.mimetype,
      addRandomSuffix: false,
    });
    // Return absolute public URL for rendering directly
    return blob.url;
  }

  // Local filesystem write
  ensureDirectories();
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
    const uint8Array = new Uint8Array(file.buffer);
    fs.writeFileSync(targetPath, uint8Array);
    return relativePath;
  } catch (error) {
    throw new Error('Không thể lưu file');
  }
};
