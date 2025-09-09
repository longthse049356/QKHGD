import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LinkAddress =
  'https://www.google.com/maps/place/%C4%90%C3%ACnh+L%C3%A0ng+,+T%E1%BB%95+D%C3%A2n+Ph%E1%BB%91+%C4%90a+H%E1%BB%99i/@21.1227307,105.9197933,19z/data=!3m1!4b1!4m6!3m5!1s0x31350719dca03e1d:0x533ef7d2530516da!8m2!3d21.1227295!4d105.920437!16s%2Fg%2F11fnt9l_fh?hl=vi-VN&entry=ttu';

const Footer = () => {
  return (
    <section className='pt-6 md:pt-10 pb-5 md:pb-7 bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 max-lg:gap-8 lg:grid-cols-12 lg:divide-x-2 lg:divide-blue-400 border-gray-200'>
          <div className='lg:col-span-7 lg:pr-6'>
            <h5 className='text-lg font-medium text-white text-center md:text-left mb-4 md:mb-7'>
              Liên hệ
            </h5>
            <div className='flex flex-col md:flex-row gap-3 md:gap-4 pb-4 md:pb-6 border-b-2 border-blue-400'>
              <Link href={LinkAddress} className='flex items-center gap-2' target='_blank'>
                <span className='text-xl'>📍</span>
                <p className='text-sm md:text-base font-normal text-white hover:text-blue-100'>
                  Đa Hội - Châu Khê - Từ Sơn - Bắc Ninh
                </p>
              </Link>
              <div className='flex items-center gap-2'>
                <span className='text-xl'>📞</span>
                <p className='text-sm md:text-base font-normal text-white select-all'>
                  093 8866779
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-xl'>✉️</span>
                <p className='text-sm md:text-base font-normal text-white select-all truncate'>
                  qkhgiapdong@gmail.com
                </p>
              </div>
            </div>
              {/* Bank info with QR */}
              <div className='mt-6 p-4 rounded-xl border-2 border-blue-400/60 bg-white/5'>
              <h5 className='text-lg font-medium text-white text-center md:text-left mb-3'>
                Thông tin tài khoản
              </h5>
              <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                <Image
                  src='/images/qr-bidv.png'
                  alt='QR chuyển khoản BIDV - Trần Văn Minh - 4330067930'
                  width={180}
                  height={180}
                  className='rounded-lg bg-white p-2'
                />
                <ul className='text-white text-sm md:text-base space-y-1'>
                  <li>
                    <span className='font-semibold'>Tên chủ TK:</span> Trần Văn Minh
                  </li>
                  <li>
                    <span className='font-semibold'>Ngân hàng:</span> BIDV
                  </li>
                  <li>
                    <span className='font-semibold'>Số TK:</span> 4330067930
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='lg:col-span-5 lg:pl-6 col-start-1'>
            <div className='flex items-center justify-center md:justify-start mb-4'>
              <Link
                href='https://pagedone.io/'
                className='flex gap-3 hover:text-blue-200 text-gray-900'
              >
                <Image src='/logo.png' width={36} height={36} alt='logo' />
                <p className='flex-1 text-2xl md:text-4xl text-white'>Giáp Đông</p>
              </Link>
            </div>
            <p className='text-sm md:text-base font-normal text-white text-center md:text-left mb-3 mt-2'>
              Đăng ký nhận bản tin độc quyền của chúng tôi để biết thông tin cập nhật mới nhất
            </p>
            <div className='relative mx-auto md:mx-0 max-w-xs md:max-w-sm text-gray-500 focus-within:text-gray-900 mb-4 md:mb-5'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                >
                  <path
                    d='M2.95739 5.61072L6.47281 7.80147C8.18826 8.87052 9.04599 9.40504 9.99991 9.40489C10.9538 9.40474 11.8114 8.86994 13.5265 7.80035L17.0509 5.60245M9.16667 16.6663H10.8333C13.976 16.6663 15.5474 16.6663 16.5237 15.69C17.5 14.7137 17.5 13.1424 17.5 9.99967C17.5 6.85698 17.5 5.28563 16.5237 4.30932C15.5474 3.33301 13.976 3.33301 10.8333 3.33301H9.16667C6.02397 3.33301 4.45262 3.33301 3.47631 4.30932C2.5 5.28563 2.5 6.85698 2.5 9.99967C2.5 13.1424 2.5 14.7137 3.47631 15.69C4.45262 16.6663 6.02397 16.6663 9.16667 16.6663Z'
                    stroke='white'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='default-search'
                className='block w-full pr-4 pl-12 py-2.5 text-sm md:text-base font-normal shadow-xs text-white bg-transparent border border-blue-400 rounded-full placeholder-blue-200 focus:outline-none focus:border-white leading-relaxed'
                placeholder='mail@gmail.com'
              />
            </div>
            <div className='flex justify-center md:justify-start'>
              <button className='py-2 md:py-2.5 px-5 md:px-7 rounded-full flex items-center justify-center bg-white text-blue-600 text-sm md:text-base font-semibold mb-3 transition-all duration-500 hover:bg-blue-100 hover:text-blue-700'>
                Đăng ký
              </button>
            </div>
            <div className='mt-4 flex items-center justify-center md:justify-start gap-3 md:gap-5'>
              <Link
                href='https://www.facebook.com/qkh.giap.ong?mibextid=wwXIfr&rdid=LdnNbgz9dAtn4DlU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AsR6B5rX9%2F%3Fmibextid%3DwwXIfr#'
                className='p-2 bg-white text-blue-600 rounded-full transition-all duration-500 hover:bg-blue-100 focus-within:bg-blue-100 focus-within:outline-0 hover:text-blue-700 focus-within:text-blue-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M15.4977 10.7242L15.9326 10.1198H13.2539V8.32546C13.2539 7.57064 13.6278 6.83307 14.8237 6.83307H16.0587V4.48234C15.3395 4.36776 14.6128 4.30577 13.8844 4.29688C11.6797 4.29687 10.2403 5.62104 10.2403 8.0149V10.1198H7.79639V12.8803H10.2403V19.5572H13.2539V12.8803H15.4977Z'
                    fill='currentColor'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-center pt-5 md:pt-7'>
          <p className='text-xs md:text-sm font-normal text-white text-center'>
            <Link href='#' className='hover:text-blue-200'>
              ©GiapDong
            </Link>{' '}
            2024, All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
