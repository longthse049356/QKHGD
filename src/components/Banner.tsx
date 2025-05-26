import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='bg-blue-600 flex items-center px-3 h-[270px]'>
      <Link href='/' title='Home'>
        <Image
          className='w-full h-[270px]'
          alt='quy khuyen hoc'
          title='quy khuyen hoc'
          src='/banner.png'
          width={1500}
          height={800}
          quality={100}
        />
      </Link>
    </div>
  );
};

export default Banner;
