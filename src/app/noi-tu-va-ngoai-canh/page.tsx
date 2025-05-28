import React from 'react';
import Image1 from '@/asset/noi-tu/anh-1.jpg';
import Image2 from '@/asset/noi-tu/anh-2.jpg';
import Image3 from '@/asset/noi-tu/anh-3.jpg';
import Image4 from '@/asset/noi-tu/anh-4.jpg';
import Image5 from '@/asset/noi-tu/anh-5.jpg';
import Image6 from '@/asset/noi-tu/anh-6.jpg';
import Image7 from '@/asset/noi-tu/anh-7.jpg';
import Image8 from '@/asset/noi-tu/anh-8.jpg';
import Image9 from '@/asset/noi-tu/anh-9.jpg';
import Image10 from '@/asset/noi-tu/anh-10.jpg';
import Image11 from '@/asset/noi-tu/anh-11.jpg';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full max-w-[900px] px-4 sm:px-6 mx-auto'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold my-6'>
        Ảnh nội tự và ngoại cảnh
      </h1>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image1}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 1'
          priority
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 1</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image2}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 2'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 2</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image3}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 3'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 3</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image4}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 4'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 4</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image5}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 5'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 5</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image6}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 6'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 6</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image7}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 7'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 7</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image8}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 8'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 8</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image9}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 9'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 9</p>
      </div>

      <div className='mb-6'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image10}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 10'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 10</p>
      </div>

      <div className='mb-10'>
        <Image
          className='w-full h-auto border rounded-md shadow-sm'
          src={Image11}
          width={900}
          height={500}
          alt='Nội tự và ngoại cảnh 11'
        />
        <p className='text-center mt-2 text-gray-700'>Ảnh chụp 11</p>
      </div>
    </div>
  );
};

export default Page;
