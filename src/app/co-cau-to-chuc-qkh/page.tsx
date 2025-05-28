import React from 'react';
import Image1 from '@/asset/co-cau-to-chuc-qkh.png';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full max-w-[1024px] px-4 sm:px-6 mx-auto'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold my-6'>Cơ cấu tổ chức QKH</h1>
      <div className='flex justify-center mb-10'>
        <Image
          className='w-full h-auto max-h-[700px] object-contain'
          src={Image1}
          width={1024}
          height={600}
          alt='Sơ đồ cơ cấu tổ chức QKH'
          priority
        />
      </div>
    </div>
  );
};

export default Page;
