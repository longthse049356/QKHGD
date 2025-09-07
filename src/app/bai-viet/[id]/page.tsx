import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleById } from '@/lib/database';

export default async function Page({ params }: { params: { id: string } }) {
  const numericId = Number(params.id);
  if (!Number.isFinite(numericId)) {
    notFound();
  }
  const article = await getArticleById(numericId);

  if (!article) {
    notFound();
  }

  const resolveSrc = (p: string) => (p?.startsWith('http') ? p : `/${p}`);
  const iframeSrc = article.content.startsWith('http')
    ? `/api/proxy-blob?url=${encodeURIComponent(article.content)}`
    : `/${article.content}`;

  return (
    <div className='w-full max-w-4xl mx-auto px-4 sm:px-6 py-6'>
      {/* Back button */}
      <Link
        href='/'
        className='inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors'
      >
        <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        Quay lại trang chủ
      </Link>

      {/* Article header */}
      <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-8'>
        <div className='relative h-64 md:h-80'>
          <Image
            src={resolveSrc(article.thumbnail)}
            alt={article.title}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>
          <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
            <h1 className='text-2xl md:text-4xl font-bold mb-2'>{article.title}</h1>
            <div className='flex items-center text-sm text-gray-200'>
              <span>Ngày tạo: {new Date(article.createdAt).toLocaleDateString('vi-VN')}</span>
              {article.updatedAt !== article.createdAt && (
                <span className='ml-4'>
                  Cập nhật: {new Date(article.updatedAt).toLocaleDateString('vi-VN')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
        <div className='p-6'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Nội dung bài viết</h2>
          <div className='border border-gray-200 rounded-lg overflow-hidden'>
            <iframe
              src={iframeSrc}
              className='w-full border-0'
              style={{ minHeight: '2500px', height: 'auto' }}
              title={article.title}
              sandbox='allow-same-origin allow-scripts'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
