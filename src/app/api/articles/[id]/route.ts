import { NextRequest, NextResponse } from 'next/server';
import { getArticleById, deleteArticle } from '@/lib/database';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const articleId = parseInt(params.id);

    if (isNaN(articleId)) {
      return NextResponse.json({ error: 'ID bài viết không hợp lệ' }, { status: 400 });
    }

    const article = getArticleById(articleId);

    if (!article) {
      return NextResponse.json({ error: 'Không tìm thấy bài viết' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      article,
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Có lỗi xảy ra khi lấy bài viết' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const articleId = parseInt(params.id);

    if (isNaN(articleId)) {
      return NextResponse.json({ error: 'ID bài viết không hợp lệ' }, { status: 400 });
    }

    const success = deleteArticle(articleId);

    if (!success) {
      return NextResponse.json({ error: 'Không tìm thấy bài viết để xóa' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Đã xóa bài viết thành công',
    });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Có lỗi xảy ra khi xóa bài viết' }, { status: 500 });
  }
}
