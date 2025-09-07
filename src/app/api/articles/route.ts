import { NextRequest, NextResponse } from 'next/server';
import { addArticle, saveUploadedFile, getAllArticles } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const title = formData.get('title') as string;
    const thumbnailFile = formData.get('thumbnail') as File;
    const contentFile = formData.get('content') as File;

    // Validation
    if (!title || !thumbnailFile || !contentFile) {
      return NextResponse.json({ error: 'Thiếu thông tin bắt buộc' }, { status: 400 });
    }

    if (title.length < 10) {
      return NextResponse.json({ error: 'Tiêu đề phải có ít nhất 10 ký tự' }, { status: 400 });
    }

    // Kiểm tra file size (5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (thumbnailFile.size > maxSize || contentFile.size > maxSize) {
      return NextResponse.json({ error: 'File phải nhỏ hơn 5MB' }, { status: 400 });
    }

    // Kiểm tra file type
    if (!thumbnailFile.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Thumbnail phải là file ảnh' }, { status: 400 });
    }

    if (contentFile.type !== 'text/html') {
      return NextResponse.json({ error: 'Content phải là file HTML' }, { status: 400 });
    }

    // Chuyển đổi File sang Buffer
    const thumbnailBuffer = Buffer.from(await thumbnailFile.arrayBuffer());
    const contentBuffer = Buffer.from(await contentFile.arrayBuffer());

    // Lưu files
    const thumbnailPath = await saveUploadedFile(
      {
        originalname: thumbnailFile.name,
        buffer: thumbnailBuffer,
        mimetype: thumbnailFile.type,
        size: thumbnailFile.size,
      },
      'thumbnail',
    );

    const contentPath = await saveUploadedFile(
      {
        originalname: contentFile.name,
        buffer: contentBuffer,
        mimetype: contentFile.type,
        size: contentFile.size,
      },
      'content',
    );

    // Lưu vào database
    const newArticle = await addArticle({
      title,
      thumbnail: thumbnailPath,
      content: contentPath,
    });

    return NextResponse.json({
      success: true,
      message: 'Bài viết đã được tạo thành công',
      article: newArticle,
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Có lỗi xảy ra khi tạo bài viết' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const articles = await getAllArticles();

    return NextResponse.json({
      success: true,
      articles,
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi lấy danh sách bài viết' },
      { status: 500 },
    );
  }
}
