import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-200 via-blue-200 to-indigo-200'>
      <div className='text-center'>
        <div className='bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4'>
          <div className='text-6xl font-bold text-gray-300 mb-4'>404</div>
          <h1 className='text-2xl font-semibold text-gray-800 mb-4'>
            Không tìm thấy trang
          </h1>
          <p className='text-gray-600 mb-6'>
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link
            href='/'
            className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
} 