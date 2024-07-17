import React from 'react'
import Link from 'next/link'

const NavbarFooter = () => {
  return (
    <nav className='bg-blue-700 border-gray-200 dark:bg-gray-900 text-white mt-10'>
      <div className='w-[1024px] mx-auto py-2' id='navbar-default'>
        <ul className='flex gap-6 text-lg font-medium text-white'>
          <li>
            <Link href='#' className='text-base block py-2' aria-current='page'>
              Trang chủ
            </Link>
          </li>
          <li>
            <div className='group relative cursor-pointer py-2'>
              <div className='flex items-center justify-between'>
                <a className='menu-hover text-base'>Lịch sử họ Trần - Giáp Đông</a>
              </div>
              <div className='invisible rounded top-10 border-2  absolute z-50 flex w-full flex-col bg-blue-400 border-blue-600 py-1 px-4 text-gray-800 shadow-xl group-hover:visible'>
                <div className='w-10 overflow-hidden inline-block absolute -top-4'>
                  <div className='h-4 w-5 bg-blue-600 rotate-45 transform origin-bottom-left'></div>
                </div>
                <a className='my-2 block font-semibold text-white hover:text-gray-900 md:mx-2'>Thông tin lịch sử</a>

                <a className='my-2 block font-semibold text-white hover:text-gray-900 md:mx-2'>Thông tin khác</a>
              </div>
            </div>
          </li>
          <li>
            <Link href='#' className='text-base block py-2'>
              Khuyến học khí tài
            </Link>
          </li>
          <li>
            <Link href='#' className='text-base block py-2'>
              Thông tin - Sự kiện
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarFooter
