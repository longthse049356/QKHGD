import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 flex items-center px-0 h-[270px] md:h-[270px] overflow-hidden'>
      <Link href='/' title='Home' className='w-full'>
        <div className='relative w-full h-[270px] md:h-[270px]'>
          <Image
            className='object-cover object-center'
            alt='quy khuyen hoc'
            title='quy khuyen hoc'
            src='/banner.png'
            priority
            fill
            sizes='(max-width: 768px) 100vw, 1500px'
            quality={100}
          />
        </div>
      </Link>
    </div>
  );
};

export default Banner;
