import React from 'react';
import Image1 from '@/asset/so-ghi-cong-duc/1.jpg';
import Image2 from '@/asset/so-ghi-cong-duc/2.jpg';
import Image3 from '@/asset/so-ghi-cong-duc/3.jpg';
import Image4 from '@/asset/so-ghi-cong-duc/4.jpg';
import Image5 from '@/asset/so-ghi-cong-duc/5.jpg';
import Image6 from '@/asset/so-ghi-cong-duc/6.jpg';
import Image7 from '@/asset/so-ghi-cong-duc/7.jpg';
import Image8 from '@/asset/so-ghi-cong-duc/8.jpg';
import Image9 from '@/asset/so-ghi-cong-duc/9.jpg';
import Image10 from '@/asset/so-ghi-cong-duc/10.jpg';
import Image11 from '@/asset/so-ghi-cong-duc/11.jpg';
import Image12 from '@/asset/so-ghi-cong-duc/12.jpg';
import Image13 from '@/asset/so-ghi-cong-duc/13.jpg';
import Image14 from '@/asset/so-ghi-cong-duc/14.jpg';
import Image15 from '@/asset/so-ghi-cong-duc/15.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-[900px] mx-auto'>
      <p className='text-2xl text-center font-semibold'>Ảnh sổ ghi công đức</p>
      <Image className='mt-6' src={Image1} width={900} height={500} alt='slider-image' />
      <p className='text-center'>Ảnh chụp 1</p>
      <Image className='mt-6' src={Image2} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 2</p>
      <Image className='mt-6' src={Image15} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 3</p>
      <Image className='mt-6' src={Image14} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 4</p>
      <Image className='mt-6' src={Image13} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 5</p>
      <Image className='mt-6' src={Image12} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 6</p>
      <Image className='mt-6' src={Image11} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 7</p>
      <Image className='mt-6' src={Image10} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 8</p>
      <Image className='mt-6' src={Image9} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 9</p>
      <Image className='mt-6' src={Image8} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 10</p>
      <Image className='mt-6' src={Image7} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 11</p>
      <Image className='mt-6' src={Image6} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 12</p>
      <Image className='mt-6' src={Image5} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 13</p>
      <Image className='mt-6' src={Image4} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 14</p>
      <Image className='mt-6' src={Image3} width={900} height={500} alt='slider-image' />
      <p className='text-center mb-3'>Ảnh chụp 15</p>
    </div>
  );
};

export default Page;
