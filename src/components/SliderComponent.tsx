'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Image1 from '@/asset/SliderImg/TheProud1.jpg'
import Image4 from '@/asset/SliderImg/TheProud4.jpg'
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
          <Image className='h-[356px] w-auto' src={Image4} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image1} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image4} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image1} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image4} width={700} height={700} alt='slider-image' />
        </div>
      </div>
    </Slider>
  )
}

export default SliderComponent
