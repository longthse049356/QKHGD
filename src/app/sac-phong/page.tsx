import React from 'react';
import Image1 from '@/asset/anh-sac-phong/anh-sac-phong-1.jpg';
import Image2 from '@/asset/anh-sac-phong/anh-sac-phong-2.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full max-w-[1024px] px-4 sm:px-6 mx-auto'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold my-6'>
        Sắc phong được lưu giữ
      </h1>
      <div className='mb-6'>
        <Image
          className='w-full h-auto rounded-md shadow-sm'
          src={Image1}
          width={1024}
          height={700}
          alt='Sắc phong 1'
          priority
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh sắc phong 1</p>
      </div>
      <div className='mb-10'>
        <Image
          className='w-full h-auto rounded-md shadow-sm'
          src={Image2}
          width={1024}
          height={700}
          alt='Sắc phong 2'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh sắc phong 2</p>
      </div>
    </div>
  );
};

export default Page;
