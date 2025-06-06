import React from 'react';
import Image from 'next/image';
import NewIcon from '@/asset/img/new-icon.png';
import Link from 'next/link';

import Image1 from '@/asset/tinified/anh-1.jpg';
import Image3 from '@/asset/tinified/anh-3.jpg';
import Image4 from '@/asset/tinified/anh-4.jpg';
import Image5 from '@/asset/tinified/anh-5.jpg';
import Image6 from '@/asset/tinified/anh-6.jpg';
import Image8 from '@/asset/tinified/anh-8.jpg';
import Image10 from '@/asset/tinified/anh-10.jpg';
import Image11 from '@/asset/tinified/anh-11.jpg';
import Image19 from '@/asset/tinified/anh-19.jpg';
import Image23 from '@/asset/tinified/anh-23.jpg';

const News = () => {
  return (
    <div className='w-full max-w-screen-xl mx-auto shadow flex flex-col md:flex-row gap-6 p-2 md:p-4 rounded bg-white'>
      <div className='w-full md:max-w-[512px]'>
        <div className='relative w-full pb-[56.25%] md:pb-0 md:h-[300px]'>
          <iframe
            className='absolute top-0 left-0 w-full h-full md:relative md:w-full'
            src='https://www.youtube.com/embed/tTu907I0JPc?si=JCsPE65wPkKQ4VkD'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
        <div className='mt-4 md:mt-5'>
          <Link
            className='text-[#083E80] font-bold text-base md:text-lg'
            title='Hội Khuyến học thành phố Thủ Đức
                      tổ chức trao học bổng cho các em học sinh
                      có hoàn cảnh khó khăn hiếu học'
            href='#'
          >
            LỄ TUYÊN DƯƠNG TRAO THƯỞNG KHUYẾN HỌC HỌ TRẦN ĐÔNG GIÁP KHU PHỐ ĐA HỘI
          </Link>
        </div>
        <p className='mt-3 italic font-bold'>Xem nhiều nhất</p>
        <div className='flex mt-3 gap-3'>
          <Image
            className='h-[60px] w-[100px] object-cover'
            src={Image3}
            width={100}
            height={50}
            alt='slider-image'
          />
          <p className='flex-1 text-sm md:text-base'>
            Nghị quyết 29-NQ/TW đổi mới căn bản toàn diện Giáo dục - đào tạo
          </p>
        </div>
        <div className='flex mt-3 gap-3'>
          <Image
            className='h-[60px] w-[100px] object-cover'
            src={Image1}
            width={100}
            height={50}
            alt='slider-image'
          />
          <p className='flex-1 text-sm md:text-base'>
            Tổng kết hoạt động Khuyến học, khuyến tài, xây dựng xã hội học tập năm 2024
          </p>
        </div>
        <div className='flex mt-3 gap-3'>
          <Image
            className='h-[60px] w-[100px] object-cover'
            src={Image11}
            width={100}
            height={50}
            alt='slider-image'
          />
          <p className='flex-1 text-sm md:text-base'>Học bổng khuyến tài</p>
        </div>
      </div>
      <div className='w-full mt-6 md:mt-0'>
        <p className='text-[#083E80] text-right underline'>Bài đăng mới</p>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-xs md:text-sm'>Ban chấp hành Hội Đồng Gia Tộc.</p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image3}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='HỘI NGHỊ CHUYÊN ĐỀ "Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang" trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-xs md:text-sm'>Cụ Trần Văn Cập phát biểu tại buổi lễ.</p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image10}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-xs md:text-sm'>
            Ông Trần Văn Minh, Trưởng ban khuyến học Giáp Đông đọc diễn văn khai mạc.
          </p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image23}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='HỘI NGHỊ CHUYÊN ĐỀ "Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang" trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-xs md:text-sm'>
            Ông Trần Văn Vinh trưởng ban chấp hành Hội Đồng Gia Tộc.
          </p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image19}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-xs md:text-sm'>Đang cập nhật bài viết.</p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image4}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='HỘI NGHỊ CHUYÊN ĐỀ "Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang" trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-xs md:text-sm'>Đang cập nhật bài viết.</p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image5}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-xs md:text-sm'>Đang cập nhật bài viết.</p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image6}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center'
          title='HỘI NGHỊ CHUYÊN ĐỀ "Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang" trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-xs md:text-sm'>Đang cập nhật bài viết.</p>
          <Image
            className='h-6 w-6 flex-shrink-0'
            src={NewIcon}
            width={120}
            height={70}
            alt='new-icon'
          />
          <Image
            className='h-[70px] w-[100px] md:w-[120px] object-cover flex-shrink-0'
            src={Image8}
            width={120}
            height={70}
            alt='slider-image'
          />
        </Link>
      </div>
    </div>
  );
};

export default News;
