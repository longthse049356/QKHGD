import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { addArticle } from '@/lib/database';

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ ok: false, error: 'MONGODB_URI is not set' }, { status: 500 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'master_db');
    const posts = db.collection('posts');

    const count = await posts.countDocuments();
    if (count > 0) {
      return NextResponse.json({
        ok: true,
        seeded: false,
        message: `Collection already has ${count} documents`,
      });
    }

    const now = new Date().toISOString();
    const samples = [
      {
        title: 'Mục thưởng khuyến học 1 - Bài viết mẫu',
        thumbnail: 'images/image1.png',
        content: 'html/1755489708050_mucthuongkhuyenhoc2 2.html',
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Mục thưởng khuyến học 2 - Bài viết mẫu',
        thumbnail: 'images/image2.png',
        content: 'html/1756701754694_mucthuongkhuyenhoc2 2.html',
        createdAt: now,
        updatedAt: now,
      },
      {
        title: 'Mục thưởng khuyến học 3 - Bài viết mẫu',
        thumbnail: 'images/image3.png',
        content: 'html/1756810867467_mucthuongkhuyenhoc2 2.html',
        createdAt: now,
        updatedAt: now,
      },
    ];

    for (const s of samples) {
      await addArticle({ title: s.title, thumbnail: s.thumbnail, content: s.content });
    }

    const seededCount = await posts.countDocuments();
    return NextResponse.json({ ok: true, seeded: true, count: seededCount });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Seeding failed' }, { status: 500 });
  }
}
