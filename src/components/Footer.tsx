import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LinkAddress =
  'https://www.google.com/maps/place/%C4%90%C3%ACnh+L%C3%A0ng+,+T%E1%BB%95+D%C3%A2n+Ph%E1%BB%91+%C4%90a+H%E1%BB%99i/@21.1227307,105.9197933,19z/data=!3m1!4b1!4m6!3m5!1s0x31350719dca03e1d:0x533ef7d2530516da!8m2!3d21.1227295!4d105.920437!16s%2Fg%2F11fnt9l_fh?hl=vi-VN&entry=ttu';

const Footer = () => {
  return (
    <section className='pt-6 md:pt-10 pb-5 md:pb-7 bg-blue-600'>
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
            <div className='mt-4 flex items-center justify-center md:justify-start gap-3 md:gap-5'>
              <Link
                href='#'
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
                    d='M13.5854 10.7242L19.79 3.66699H18.3197L12.9323 9.79466L8.62939 3.66699H3.6665L10.1733 12.9331L3.6665 20.3337H5.13687L10.8261 13.8626L15.3703 20.3337H20.3332L13.5851 10.7242H13.5854ZM11.5716 13.0147L10.9123 12.092L5.66666 4.75005H7.92505L12.1583 10.6753L12.8176 11.598L18.3204 19.2999H16.062L11.5716 13.0151V13.0147Z'
                    fill='currentColor'
                  />
                </svg>
              </Link>
              <Link
                href='#'
                className='p-2 h-10 w-10 flex items-center justify-center bg-white text-blue-600 rounded-full transition-all duration-500 hover:bg-blue-100 focus-within:outline-0 focus-within:bg-blue-100 hover:text-blue-700 focus-within:text-blue-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M6.14869 8.92708C6.14869 7.39302 7.3927 6.14908 8.92769 6.14908C10.4627 6.14908 11.7074 7.39302 11.7074 8.92708C11.7074 10.4611 10.4627 11.7051 8.92769 11.7051C7.3927 11.7051 6.14869 10.4611 6.14869 8.92708ZM4.64605 8.92708C4.64605 11.2904 6.56294 13.2061 8.92769 13.2061C11.2924 13.2061 13.2093 11.2904 13.2093 8.92708C13.2093 6.56375 11.2924 4.64802 8.92769 4.64802C6.56294 4.64802 4.64605 6.56375 4.64605 8.92708ZM12.3782 4.47835C12.3781 4.67613 12.4368 4.86949 12.5466 5.03399C12.6565 5.19848 12.8127 5.32672 12.9955 5.40248C13.1783 5.47824 13.3795 5.49812 13.5736 5.45961C13.7678 5.42111 13.9461 5.32594 14.0861 5.18614C14.2261 5.04634 14.3214 4.8682 14.3601 4.67423C14.3988 4.48027 14.3791 4.27919 14.3034 4.09644C14.2278 3.91368 14.0996 3.75745 13.9351 3.6475C13.7706 3.53756 13.5771 3.47883 13.3792 3.47875H13.3788C13.1136 3.47887 12.8592 3.58422 12.6716 3.77164C12.484 3.95906 12.3785 4.21324 12.3782 4.47835V4.47835ZM5.559 15.7102C4.74605 15.6732 4.30418 15.5379 4.01054 15.4235C3.62124 15.2721 3.34347 15.0917 3.05143 14.8002C2.75939 14.5087 2.57861 14.2314 2.42772 13.8423C2.31326 13.549 2.17784 13.1073 2.14089 12.2948C2.10046 11.4164 2.09239 11.1525 2.09239 8.92715C2.09239 6.70175 2.10113 6.43862 2.14089 5.55948C2.17791 4.74702 2.31432 4.30615 2.42772 4.01195C2.57928 3.62288 2.75979 3.34528 3.05143 3.05342C3.34307 2.76155 3.62057 2.58088 4.01054 2.43008C4.30405 2.31568 4.74605 2.18035 5.559 2.14342C6.43793 2.10302 6.70195 2.09495 8.92769 2.09495C11.1534 2.09495 11.4177 2.10368 12.2974 2.14342C13.1103 2.18042 13.5515 2.31675 13.8458 2.43008C14.2351 2.58088 14.5129 2.76195 14.8049 3.05342C15.097 3.34488 15.2771 3.62288 15.4287 4.01195C15.5431 4.30528 15.6785 4.74702 15.7155 5.55948C15.7559 6.43862 15.764 6.70175 15.764 8.92715C15.764 11.1525 15.7559 11.4157 15.7155 12.2948C15.6785 13.1073 15.5424 13.5489 15.4287 13.8423C15.2771 14.2314 15.0966 14.509 14.8049 14.8002C14.5133 15.0914 14.2351 15.2721 13.8458 15.4235C13.5523 15.5379 13.1103 15.6733 12.2974 15.7102C11.4184 15.7506 11.1544 15.7587 8.92769 15.7587C6.70095 15.7587 6.43766 15.7506 5.559 15.7102V15.7102ZM5.48996 0.644217C4.6023 0.684617 3.99573 0.825283 3.46601 1.03128C2.91742 1.24402 2.45301 1.52942 1.98893 1.99248C1.52485 2.45555 1.24001 2.92042 1.02715 3.46868C0.821028 3.99842 0.680277 4.60428 0.639852 5.49142C0.598761 6.37995 0.589355 6.66402 0.589355 8.92708C0.589355 11.1901 0.598761 11.4742 0.639852 12.3627C0.680277 13.2499 0.821028 13.8557 1.02715 14.3855C1.24001 14.9334 1.52492 15.3988 1.98893 15.8617C2.45294 16.3245 2.91742 16.6096 3.46601 16.8229C3.99673 17.0289 4.6023 17.1695 5.48996 17.2099C6.37949 17.2503 6.66326 17.2604 8.92769 17.2604C11.1921 17.2604 11.4763 17.251 12.3654 17.2099C13.2531 17.1695 13.8593 17.0289 14.3894 16.8229C14.9376 16.6096 15.4024 16.3247 15.8664 15.8617C16.3305 15.3986 16.6148 14.9334 16.8282 14.3855C17.0343 13.8557 17.1758 13.2499 17.2155 12.3627C17.2559 11.4735 17.2654 11.1901 17.2654 8.92708C17.2654 6.66402 17.2559 6.37995 17.2155 5.49142C17.1751 4.60422 17.0343 3.99808 16.8282 3.46868C16.6148 2.92075 16.3298 2.45628 15.8664 1.99248C15.4031 1.52868 14.9376 1.24402 14.39 1.03128C13.8593 0.825283 13.2531 0.68395 12.3661 0.644217C11.477 0.603817 11.1928 0.59375 8.92836 0.59375C6.66393 0.59375 6.37949 0.60315 5.48996 0.644217Z'
                    fill='currentColor'
                  />
                  <path
                    d='M6.14869 8.92708C6.14869 7.39302 7.3927 6.14908 8.92769 6.14908C10.4627 6.14908 11.7074 7.39302 11.7074 8.92708C11.7074 10.4611 10.4627 11.7051 8.92769 11.7051C7.3927 11.7051 6.14869 10.4611 6.14869 8.92708ZM4.64605 8.92708C4.64605 11.2904 6.56294 13.2061 8.92769 13.2061C11.2924 13.2061 13.2093 11.2904 13.2093 8.92708C13.2093 6.56375 11.2924 4.64802 8.92769 4.64802C6.56294 4.64802 4.64605 6.56375 4.64605 8.92708ZM12.3782 4.47835C12.3781 4.67613 12.4368 4.86949 12.5466 5.03399C12.6565 5.19848 12.8127 5.32672 12.9955 5.40248C13.1783 5.47824 13.3795 5.49812 13.5736 5.45961C13.7678 5.42111 13.9461 5.32594 14.0861 5.18614C14.2261 5.04634 14.3214 4.8682 14.3601 4.67423C14.3988 4.48027 14.3791 4.27919 14.3034 4.09644C14.2278 3.91368 14.0996 3.75745 13.9351 3.6475C13.7706 3.53756 13.5771 3.47883 13.3792 3.47875H13.3788C13.1136 3.47887 12.8592 3.58422 12.6716 3.77164C12.484 3.95906 12.3785 4.21324 12.3782 4.47835V4.47835ZM5.559 15.7102C4.74605 15.6732 4.30418 15.5379 4.01054 15.4235C3.62124 15.2721 3.34347 15.0917 3.05143 14.8002C2.75939 14.5087 2.57861 14.2314 2.42772 13.8423C2.31326 13.549 2.17784 13.1073 2.14089 12.2948C2.10046 11.4164 2.09239 11.1525 2.09239 8.92715C2.09239 6.70175 2.10113 6.43862 2.14089 5.55948C2.17791 4.74702 2.31432 4.30615 2.42772 4.01195C2.57928 3.62288 2.75979 3.34528 3.05143 3.05342C3.34307 2.76155 3.62057 2.58088 4.01054 2.43008C4.30405 2.31568 4.74605 2.18035 5.559 2.14342C6.43793 2.10302 6.70195 2.09495 8.92769 2.09495C11.1534 2.09495 11.4177 2.10368 12.2974 2.14342C13.1103 2.18042 13.5515 2.31675 13.8458 2.43008C14.2351 2.58088 14.5129 2.76195 14.8049 3.05342C15.097 3.34488 15.2771 3.62288 15.4287 4.01195C15.5431 4.30528 15.6785 4.74702 15.7155 5.55948C15.7559 6.43862 15.764 6.70175 15.764 8.92715C15.764 11.1525 15.7559 11.4157 15.7155 12.2948C15.6785 13.1073 15.5424 13.5489 15.4287 13.8423C15.2771 14.2314 15.0966 14.509 14.8049 14.8002C14.5133 15.0914 14.2351 15.2721 13.8458 15.4235C13.5523 15.5379 13.1103 15.6733 12.2974 15.7102C11.4184 15.7506 11.1544 15.7587 8.92769 15.7587C6.70095 15.7587 6.43766 15.7506 5.559 15.7102V15.7102ZM5.48996 0.644217C4.6023 0.684617 3.99573 0.825283 3.46601 1.03128C2.91742 1.24402 2.45301 1.52942 1.98893 1.99248C1.52485 2.45555 1.24001 2.92042 1.02715 3.46868C0.821028 3.99842 0.680277 4.60428 0.639852 5.49142C0.598761 6.37995 0.589355 6.66402 0.589355 8.92708C0.589355 11.1901 0.598761 11.4742 0.639852 12.3627C0.680277 13.2499 0.821028 13.8557 1.02715 14.3855C1.24001 14.9334 1.52492 15.3988 1.98893 15.8617C2.45294 16.3245 2.91742 16.6096 3.46601 16.8229C3.99673 17.0289 4.6023 17.1695 5.48996 17.2099C6.37949 17.2503 6.66326 17.2604 8.92769 17.2604C11.1921 17.2604 11.4763 17.251 12.3654 17.2099C13.2531 17.1695 13.8593 17.0289 14.3894 16.8229C14.9376 16.6096 15.4024 16.3247 15.8664 15.8617C16.3305 15.3986 16.6148 14.9334 16.8282 14.3855C17.0343 13.8557 17.1758 13.2499 17.2155 12.3627C17.2559 11.4735 17.2654 11.1901 17.2654 8.92708C17.2654 6.66402 17.2559 6.37995 17.2155 5.49142C17.1751 4.60422 17.0343 3.99808 16.8282 3.46868C16.6148 2.92075 16.3298 2.45628 15.8664 1.99248C15.4031 1.52868 14.9376 1.24402 14.39 1.03128C13.8593 0.825283 13.2531 0.68395 12.3661 0.644217C11.477 0.603817 11.1928 0.59375 8.92836 0.59375C6.66393 0.59375 6.37949 0.60315 5.48996 0.644217Z'
                    fill=''
                  />
                  <defs>
                    <radialGradient
                      id='paint0_radial_539_510'
                      cx='0'
                      cy='0'
                      r='1'
                      gradientUnits='userSpaceOnUse'
                      gradientTransform='translate(2.80495 17.3391) scale(21.77 21.7569)'
                    >
                      <stop offset='0.09' stopColor='#FA8F21' />
                      <stop offset='0.78' stopColor='#D82D7E' />
                    </radialGradient>
                    <radialGradient
                      id='paint1_radial_539_510'
                      cx='0'
                      cy='0'
                      r='1'
                      gradientUnits='userSpaceOnUse'
                      gradientTransform='translate(10.703 18.0858) scale(17.1578 17.1475)'
                    >
                      <stop offset='0.64' stopColor='#8C3AAA' stopOpacity='0' />
                      <stop offset='1' stopColor='#8C3AAA' />
                    </radialGradient>
                  </defs>
                </svg>
              </Link>
              <Link
                href='#'
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
              <Link
                href='#'
                className='p-2 bg-white text-blue-600 group rounded-full transition-all duration-500 hover:bg-blue-100 focus-within:bg-blue-100 focus-within:outline-0 hover:text-blue-700 focus-within:text-blue-700'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M20.3677 7.90615C20.1684 7.15701 19.5789 6.56602 18.8289 6.36347C17.4728 6 12.0319 6 12.0319 6C12.0319 6 6.59366 6 5.23479 6.36347C4.48756 6.56324 3.89807 7.15423 3.69604 7.90615C3.3335 9.2657 3.3335 12.1041 3.3335 12.1041C3.3335 12.1041 3.3335 14.9425 3.69604 16.3021C3.89531 17.0512 4.48479 17.6422 5.23479 17.8448C6.59366 18.2082 12.0319 18.2082 12.0319 18.2082C12.0319 18.2082 17.4728 18.2082 18.8289 17.8448C19.5762 17.645 20.1657 17.054 20.3677 16.3021C20.7302 14.9425 20.7302 12.1041 20.7302 12.1041C20.7302 12.1041 20.7302 9.2657 20.3677 7.90615Z'
                    fill='currentColor'
                  />
                  <path
                    className='fill-white transition-all divide-gray-500 group-hover:fill-blue-100 group-focus-within:fill-blue-100'
                    d='M10.2939 14.7206L14.8132 12.1041L10.2939 9.48767V14.7206Z'
                    fill=''
                  />
                </svg>
              </Link>
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
