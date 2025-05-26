import React from 'react';
import Image1 from '@/asset/nha-bia-va-van-bia/1.jpg';
import Image2 from '@/asset/nha-bia-va-van-bia/2.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-[900px] mx-auto'>
      <p className='text-2xl text-center font-semibold'>Ảnh nhà bia và văn bia</p>
      <Image
        className='mt-6 border rounded'
        src={Image2}
        width={900}
        height={500}
        alt='slider-image'
      />
      <p className='text-center'>Ảnh chụp 1</p>
      <Image
        className='mt-6 border rounded'
        src={Image1}
        width={900}
        height={500}
        alt='slider-image'
      />
      <p className='text-center mb-3'>Ảnh chụp 2</p>
    </div>
  );
};

export default Page;
