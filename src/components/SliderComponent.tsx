'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Image1 from '@/asset/tinified/anh-1.jpg'
import Image2 from '@/asset/tinified/anh-2.jpg'
import Image3 from '@/asset/tinified/anh-3.jpg'
import Image4 from '@/asset/tinified/anh-4.jpg'
import Image5 from '@/asset/tinified/anh-5.jpg'
import Image6 from '@/asset/tinified/anh-6.jpg'
import Image7 from '@/asset/tinified/anh-7.jpg'
import Image8 from '@/asset/tinified/anh-8.jpg'
import Image9 from '@/asset/tinified/anh-9.jpg'
import Image10 from '@/asset/tinified/anh-10.jpg'
import Image11 from '@/asset/tinified/anh-11.jpg'
import Image12 from '@/asset/tinified/anh-12.jpg'
import Image13 from '@/asset/tinified/anh-13.jpg'
import Image14 from '@/asset/tinified/anh-14.jpg'
import Image15 from '@/asset/tinified/anh-15.jpg'
import Image16 from '@/asset/tinified/anh-16.jpg'
import Image17 from '@/asset/tinified/anh-17.jpg'
import Image18 from '@/asset/tinified/anh-18.jpg'
import Image19 from '@/asset/tinified/anh-19.jpg'
import Image20 from '@/asset/tinified/anh-20.jpg'
import Image21 from '@/asset/tinified/anh-21.jpg'
import Image22 from '@/asset/tinified/anh-22.jpg'
import Image23 from '@/asset/tinified/anh-23.jpg'
import Image24 from '@/asset/tinified/anh-24.jpg'

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
          <Image className='h-[356px] w-auto' src={Image4} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image5} width={700} height={700} alt='slider-image' />
        </div>
      </div>
      <div className='bg-gray-200 h-[356px]'>
        <div className='flex justify-center items-center'>
          <Image className='h-[356px] w-auto' src={Image6} width={700} height={700} alt='slider-image' />
        </div>
      </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image7} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image8} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image9} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image10} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image11} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image12} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image13} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image14} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image15} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image16} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image17} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image18} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image19} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image20} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image21} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image22} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image23} width={700} height={700} alt='slider-image' />
            </div>
        </div>
        <div className='bg-gray-200 h-[356px]'>
            <div className='flex justify-center items-center'>
                <Image className='h-[356px] w-auto' src={Image24} width={700} height={700} alt='slider-image' />
            </div>
        </div>
    </Slider>
  )
}

export default SliderComponent
