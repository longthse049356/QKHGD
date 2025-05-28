import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Image1 from '@/asset/anh-bia-quy-uoc.jpg';

const Page = async () => {
  const filePath = path.join(process.cwd(), 'public', 'quyuoc.html');
  // Sử dụng fs để đọc file
  const htmlContent = fs.readFileSync(filePath, 'utf8');
  return (
    <div className='w-full max-w-[700px] px-4 sm:px-6 mx-auto my-6'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold mb-6'>Quy ước họ Trần</h1>
      <div className='flex justify-center mb-6'>
        <Image
          className='w-full max-w-[600px] h-auto rounded-md shadow-sm'
          src={Image1}
          width={600}
          height={300}
          alt='Ảnh bìa quy ước họ Trần'
          priority
        />
      </div>
      <div
        className='font-sans bg-slate-100 p-4 rounded-md shadow-sm'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Page;
