'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NewIcon from '@/asset/img/new-icon.png';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  thumbnail: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [oldestArticles, setOldestArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        const result = await response.json();

        if (result.success) {
          // Lấy 6 bài viết mới nhất
          setArticles(result.articles.slice(0, 6));

          // Lấy 3 bài viết cũ nhất (sắp xếp theo createdAt tăng dần)
          const sortedOldest = [...result.articles].sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          );
          setOldestArticles(sortedOldest.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const resolveSrc = (p: string) => (p?.startsWith('http') ? p : `/${p}`);

  const truncateTitle = (title: string, maxLength: number = 60) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };
  return (
    <div className='w-full max-w-screen-xl mx-auto shadow-2xl flex flex-col md:flex-row gap-6 p-4 md:p-6 rounded-xl bg-white border border-gray-200 my-8 ring-1 ring-gray-900/5'>
      <div className='w-full md:max-w-[512px]'>
        <div className='relative w-full pb-[56.25%] md:pb-0 md:h-[300px]'>
          <iframe
            className='absolute top-0 left-0 w-full h-full md:relative md:w-full'
            src='https://www.youtube.com/embed/tTu907I0JPc?si=JCsPE65wPkKQ4VkD'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='mt-4 md:mt-5'>
          <Link
            className='text-[#083E80] font-bold text-base md:text-lg'
            title='Hội Khuyến học thành phố Thủ Đức
                      tổ chức trao học bổng cho các em học sinh
                      có hoàn cảnh khó khăn hiếu học'
            href='#'
          >
            LỄ TUYÊN DƯƠNG TRAO THƯỞNG KHUYẾN HỌC HỌ TRẦN ĐÔNG GIÁP KHU PHỐ ĐA HỘI
          </Link>
        </div>
        <p className='mt-3 italic font-bold'>Xem nhiều nhất</p>

        {loading ? (
          <div className='mt-3 text-center'>
            <p className='text-sm text-gray-500'>Đang tải...</p>
          </div>
        ) : oldestArticles.length === 0 ? (
          <div className='mt-3 text-center'>
            <p className='text-sm text-gray-500'>Chưa có bài viết</p>
          </div>
        ) : (
          oldestArticles.map((article) => (
            <Link
              key={article.id}
              href={`/bai-viet/${article.id}`}
              className='flex mt-3 gap-3 hover:bg-gray-50 p-1 rounded transition-colors'
              title={article.title}
            >
              <Image
                className='h-[60px] w-[100px] object-cover rounded'
                src={resolveSrc(article.thumbnail)}
                width={100}
                height={60}
                alt={article.title}
              />
              <p className='flex-1 text-sm md:text-base'>{truncateTitle(article.title, 80)}</p>
            </Link>
          ))
        )}
      </div>
      <div className='w-full mt-6 md:mt-0'>
        <p className='text-[#083E80] text-right underline'>Bài đăng mới</p>
        {loading ? (
          <div className='mt-4 text-center'>
            <p className='text-sm text-gray-500'>Đang tải bài viết...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className='mt-4 text-center'>
            <p className='text-sm text-gray-500'>Chưa có bài viết nào</p>
          </div>
        ) : (
          articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/bai-viet/${article.id}`}
              className={`mt-2 flex gap-3 items-center ${
                index < articles.length - 1 ? 'border-b border-dashed border-blue-900 pb-1' : ''
              }`}
              title={article.title}
            >
              <p className='flex-1 text-xs md:text-sm'>{truncateTitle(article.title)}</p>
              <Image
                className='h-6 w-6 flex-shrink-0'
                src={NewIcon}
                width={24}
                height={24}
                alt='new-icon'
              />
              <Image
                className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
                src={resolveSrc(article.thumbnail)}
                width={120}
                height={70}
                alt={article.title}
                onError={(e) => {
                  // Fallback image nếu không load được
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
