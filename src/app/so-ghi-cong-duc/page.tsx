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
  const images = [
    { image: Image1, alt: 'Sổ ghi công đức 1', caption: 'Ảnh chụp 1' },
    { image: Image2, alt: 'Sổ ghi công đức 2', caption: 'Ảnh chụp 2' },
    { image: Image15, alt: 'Sổ ghi công đức 3', caption: 'Ảnh chụp 3' },
    { image: Image14, alt: 'Sổ ghi công đức 4', caption: 'Ảnh chụp 4' },
    { image: Image13, alt: 'Sổ ghi công đức 5', caption: 'Ảnh chụp 5' },
    { image: Image12, alt: 'Sổ ghi công đức 6', caption: 'Ảnh chụp 6' },
    { image: Image11, alt: 'Sổ ghi công đức 7', caption: 'Ảnh chụp 7' },
    { image: Image10, alt: 'Sổ ghi công đức 8', caption: 'Ảnh chụp 8' },
    { image: Image9, alt: 'Sổ ghi công đức 9', caption: 'Ảnh chụp 9' },
    { image: Image8, alt: 'Sổ ghi công đức 10', caption: 'Ảnh chụp 10' },
    { image: Image7, alt: 'Sổ ghi công đức 11', caption: 'Ảnh chụp 11' },
    { image: Image6, alt: 'Sổ ghi công đức 12', caption: 'Ảnh chụp 12' },
    { image: Image5, alt: 'Sổ ghi công đức 13', caption: 'Ảnh chụp 13' },
    { image: Image4, alt: 'Sổ ghi công đức 14', caption: 'Ảnh chụp 14' },
    { image: Image3, alt: 'Sổ ghi công đức 15', caption: 'Ảnh chụp 15' },
  ];

  return (
    <div className='w-full max-w-[900px] px-4 sm:px-6 mx-auto'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold my-6'>Sổ ghi công đức</h1>

      {images.map((item, index) => (
        <div key={index} className={index === images.length - 1 ? 'mb-10' : 'mb-6'}>
          <Image
            className='w-full h-auto border rounded-md shadow-sm'
            src={item.image}
            width={900}
            height={500}
            alt={item.alt}
            priority={index === 0}
          />
          <p className='text-center mt-2 text-gray-700'>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
