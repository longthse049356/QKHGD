import React from 'react';
import Image1 from '@/asset/nha-bia-va-van-bia/1.jpg';
import Image2 from '@/asset/nha-bia-va-van-bia/2.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full max-w-[900px] px-4 sm:px-6 mx-auto'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold my-6'>Nhà bia và văn bia</h1>
      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image2}
          width={900}
          height={500}
          alt='Nhà bia và văn bia 1'
          priority
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 1</p>
      </div>
      <div className='mb-10'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image1}
          width={900}
          height={500}
          alt='Nhà bia và văn bia 2'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 2</p>
      </div>
    </div>
  );
};

export default Page;
