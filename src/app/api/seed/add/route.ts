import { NextResponse } from 'next/server';
import { addArticle, getArticleById } from '@/lib/database';

export async function GET() {
  try {
    const created = await addArticle({
      title: 'Bài viết mẫu bổ sung',
      thumbnail: 'images/image1.png',
      content: 'html/1757209647243_mucthuongkhuyenhoc2 2.html',
    });

    const article = await getArticleById(created.id);
    return NextResponse.json({ ok: true, article });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Failed to add sample' }, { status: 500 });
  }
}
