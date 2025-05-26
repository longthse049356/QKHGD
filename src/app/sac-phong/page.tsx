import React from 'react';
import Image1 from '@/asset/anh-sac-phong/anh-sac-phong-1.jpg';
import Image2 from '@/asset/anh-sac-phong/anh-sac-phong-2.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-[1024px] mx-auto'>
      <p className='text-2xl text-center font-semibold'>Các ảnh sắc phong được lưu giữ lại</p>
      <Image className='mt-6' src={Image1} width={1024} height={700} alt='slider-image' />
      <p className='text-center'>Ảnh sắc phong 1</p>
      <Image className='mt-6' src={Image2} width={1024} height={700} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh sắc phong 2</p>
    </div>
  );
};

export default Page;
