'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import anh1 from '@/asset/tinified/anh-1.jpg';
import anh2 from '@/asset/tinified/anh-2.jpg';
import anh3 from '@/asset/tinified/anh-3.jpg';
import anh4 from '@/asset/tinified/anh-4.jpg';
import anh5 from '@/asset/tinified/anh-5.jpg';
import anh6 from '@/asset/tinified/anh-6.jpg';
import anh7 from '@/asset/tinified/anh-7.jpg';
import anh8 from '@/asset/tinified/anh-8.jpg';
import anh9 from '@/asset/tinified/anh-9.jpg';
import anh10 from '@/asset/tinified/anh-10.jpg';

const ImageSlider = () => {
  const swiperRef = useRef<SwiperType>();
  
  const images = [
    { src: anh1, alt: 'Lễ tuyên dương trao thưởng khuyến học' },
    { src: anh2, alt: 'Hoạt động khuyến học khuyến tài' },
    { src: anh3, alt: 'Trao học bổng cho học sinh hiếu học' },
    { src: anh4, alt: 'Gặp mặt các thế hệ gia tộc' },
    { src: anh5, alt: 'Hoạt động tại văn miếu' },
    { src: anh6, alt: 'Lễ kỷ niệm truyền thống gia tộc' },
    { src: anh7, alt: 'Tôn vinh giá trị học tập' },
    { src: anh8, alt: 'Họp mặt ban chấp hành' },
    { src: anh9, alt: 'Hoạt động cộng đồng' },
    { src: anh10, alt: 'Lễ tri ân các bậc tiền bối' },
  ];

  return (
    <div className='w-full max-w-screen-xl mx-auto mb-8'>
      <div className='bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 ring-1 ring-gray-900/5'>
        <div className='p-3 md:p-4 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600'>
          <h3 className='text-white text-lg font-semibold text-center'>
            Hình ảnh hoạt động Quy Khuyến học
          </h3>
        </div>
        
        <div className='relative h-[280px] md:h-[320px] overflow-hidden'>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="slide"
            speed={800}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            className='h-full px-2 md:px-4 py-2 md:py-4'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='relative h-full rounded-lg overflow-hidden group'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                    priority={index < 3}
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300'></div>
                  <div className='absolute bottom-2 left-2 right-2'>
                    <div className='bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm'>
                      <p className='line-clamp-2'>{image.alt}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className='swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className='swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1.5 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10'>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className='swiper-pagination-custom absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'></div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          margin: 0 4px;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active-custom {
          background: white;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider; 