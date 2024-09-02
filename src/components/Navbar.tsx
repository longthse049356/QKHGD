'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Lược sử họ Trần',
    children: [
      {
        key: '2-1',
        label: 'Lược sử',
      },
      {
        key: '2-2',
        label: 'Sắc phong',
      },
      {
        key: '2-3',
        label: 'Giấy ghi nhận di tích lịch sử',
      },
      {
        key: '2-4',
        label: 'Sổ ghi công đức',
      },{
        key: '2-5',
        label: 'Câu đối',
      },
      {
        key: '2-6',
        label: 'Nội tự và ngoại cảnh',
      },
      {
        key: '2-7',
        label: 'Nhà bia và văn bia',
      },
    ],
  },
  {
    key: '2',
    label: 'Quy ước họ Trần',
  },
  {
    key: '3',
    label: 'Cơ cấu tổ chức',
  },
  {
    key: '4',
    label: 'Chức năng và nhiệm vụ',
  },
];

const items2: MenuProps['items'] = [
  {
    key: '1',
    label: 'Quy chế quỹ khuyến học',
  },
  {
    key: '2',
    label: 'Cơ cấu tổ chức',
  },
  {
    key: '3',
    label: 'Chức năng và nhiệm vụ',
  },
];
const Navbar = () => {
  return (
    <nav className='bg-blue-500 border-gray-200 text-white'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image src='/logo.png' width={40} height={40} alt='logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>Quỹ khuyến học</span>
        </Link>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex gap-5 text-lg font-medium text-white'>
            <li>
              <Link href='#' className='text-base block py-2' aria-current='page'>
                Trang chủ
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Dropdown menu={{ items }}>
                <Space className="text-base">
                  Lịch sử họ Trần
                </Space>
              </Dropdown>
            </li>
            <li className="flex justify-center items-center">
              <Dropdown menu={{ items: items2 }}>
                <Space className="text-base">
                  Khuyến học khuyến tài
                </Space>
              </Dropdown>
            </li>
            <li>
              <Link href='#' className='text-base block py-2'>
                Thông tin - Sự kiện
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
