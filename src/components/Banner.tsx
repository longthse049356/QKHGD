import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='container px-0'>
      <Link href='/' title='Home'>
        <Image
          className='w-full'
          alt='quy khuyen hoc'
          title='quy khuyen hoc'
          src='/banner.jpeg'
          width={200}
          height={200}
          quality={100}
        />
      </Link>
    </div>
  )
}

export default Banner
