import React from 'react'
import Image from 'next/image'
import Image1 from '@/asset/tinified/anh-3.jpg'
import NewIcon from '@/asset/img/new-icon.png'
import Link from 'next/link'

const News = () => {
  return (
    <div className='w-[1024px] mx-auto shadow flex gap-6 p-2 rounded bg-white'>
      <div className='max-w-[512px]'>
        <Image className='h-[300px] w-[512px]' src={Image1} width={300} height={512} alt='slider-image' />
        <div className='mt-5'>
          <Link
            className='text-[#083E80] font-bold text-lg'
            title='Hội Khuyến học thành phố Thủ Đức
                      tổ chức trao học bổng cho các em học sinh
                      có hoàn cảnh khó khăn hiếu học'
            href='#'
          >
            Hội Khuyến học thành phố Thủ Đức tổ chức trao học bổng cho các em học sinh có hoàn cảnh khó khăn hiếu học
          </Link>
        </div>
        <p className='mt-3 italic font-bold'>Xem nhiều nhất</p>
        <div className='flex mt-3 gap-3'>
          <Image className='h-[60px] w-[100px]' src={Image1} width={100} height={50} alt='slider-image' />
          <p className='flex-1'>Nghị quyết 29-NQ/TW đổi mới căn bản toàn diện Giáo dục - đào tạo</p>
        </div>
        <div className='flex mt-3 gap-3'>
          <Image className='h-[60px] w-[100px]' src={Image1} width={100} height={50} alt='slider-image' />
          <p className='flex-1'>Tổng kết hoạt động Khuyến học, khuyến tài, xây dựng xã hội học tập năm 2014</p>
        </div>
        <div className='flex mt-3 gap-3'>
          <Image className='h-[60px] w-[100px]' src={Image1} width={100} height={50} alt='slider-image' />
          <p className='flex-1'>Học bổng khuyến tài</p>
        </div>
      </div>
      <div>
        <p className='text-[#083E80]  text-right underline'>Bài đăng mới</p>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-sm'>
            QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC, KHUYẾN TÀI, XÂY
            DỰNG XÃ HỘI HỌC TẬP.
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang” trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-sm'>
            HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang”
            trên địa bàn Quận 8 năm 2023
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-sm'>
            QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC, KHUYẾN TÀI, XÂY
            DỰNG XÃ HỘI HỌC TẬP.
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang” trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-sm'>
            HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang”
            trên địa bàn Quận 8 năm 2023
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-sm'>
            QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC, KHUYẾN TÀI, XÂY
            DỰNG XÃ HỘI HỌC TẬP.
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang” trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-sm'>
            HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang”
            trên địa bàn Quận 8 năm 2023
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center border-b border-dashed border-blue-900 pb-1'
          title='QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH
                   THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC,
                  KHUYẾN TÀI, XÂY DỰNG XÃ HỘI HỌC TẬP.'
        >
          <p className='flex-1 text-sm'>
            QUẬN 4, THÀNH PHỐ HỒ CHÍ MINH QUYẾT TÂM ĐẨY MẠNH THỰC HIỆN HIỆU QUẢ CÔNG TÁC KHUYẾN HỌC, KHUYẾN TÀI, XÂY
            DỰNG XÃ HỘI HỌC TẬP.
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
        <Link
          href='#'
          className='mt-2 flex gap-3 items-center'
          title='HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang” trên địa bàn Quận 8 năm 2023'
        >
          <p className='flex-1 text-sm'>
            HỘI NGHỊ CHUYÊN ĐỀ “Giải pháp nâng cao chất lượng hoạt động Chi hội khuyến học trong lực lượng vũ trang”
            trên địa bàn Quận 8 năm 2023
          </p>
          <Image className='h-6 w-6' src={NewIcon} width={120} height={70} alt='slider-image' />
          <Image className='h-[70px] w-[120px] object-cover' src={Image1} width={120} height={70} alt='slider-image' />
        </Link>
      </div>
    </div>
  )
}

export default News
