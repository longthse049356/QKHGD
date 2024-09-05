'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Image1 from '@/asset/noi-tu/anh-1.jpg'
import Image2 from '@/asset/nha-bia-va-van-bia/2.jpg'
import Image3 from '@/asset/anh-sac-phong/anh-sac-phong-1.jpg'
import Image4 from '@/asset/noi-tu/anh-4.jpg'
import Image5 from '@/asset/noi-tu/anh-5.jpg'
import Image6 from '@/asset/anh-sac-phong/anh-sac-phong-2.jpg'

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true
  }
  return (
    <Slider {...settings}>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image1} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image5} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image4} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image2} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image3} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image6} width={700} height={700} alt='slider-image' />
        </div>
      </div>
    </Slider>
  )
}

export default SliderComponent
