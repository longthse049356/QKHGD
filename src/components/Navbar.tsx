'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useRouter } from 'next/navigation';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <span className='font-medium'>Lược sử họ Trần</span>,
    children: [
      {
        key: '1-1',
        label: <span className='font-medium'>Lược sử</span>,
      },
      {
        key: '1-2',
        label: <span className='font-medium'>Sắc phong</span>,
      },
      {
        key: '1-3',
        label: <span className='font-medium'>Giấy ghi nhận di tích lịch sử</span>,
      },
      {
        key: '1-4',
        label: <span className='font-medium'>Sổ ghi công đức</span>,
      },
      {
        key: '1-5',
        label: <span className='font-medium'>Câu đối</span>,
      },
      {
        key: '1-6',
        label: <span className='font-medium'>Nội tự và ngoại cảnh</span>,
      },
      {
        key: '1-7',
        label: <span className='font-medium'>Nhà bia và văn bia</span>,
      },
    ],
  },
  {
    key: '2',
    label: <span className='font-medium'>Quy ước họ Trần</span>,
  },
  {
    key: '3',
    label: <span className='font-medium'>Cơ cấu tổ chức</span>,
  },
  {
    key: '4',
    label: <span className='font-medium'>Chức năng và nhiệm vụ</span>,
  },
];

const items2: MenuProps['items'] = [
  {
    key: '5',
    label: <span className='font-medium'>Quy chế quỹ khuyến học</span>,
  },
  {
    key: '6',
    label: <span className='font-medium'>Cơ cấu tổ chức</span>,
  },
  {
    key: '7',
    label: <span className='font-medium'>Chức năng và nhiệm vụ</span>,
  },
  {
    key: '10',
    label: <span className='font-medium'>Ảnh trao thưởng</span>,
  },
];

const items3: MenuProps['items'] = [
  {
    key: '8',
    label: <span className='font-medium'>Mức thưởng khuyến học</span>,
  },
  {
    key: '9',
    label: <span className='font-medium'>Danh mục tiêu chí được thưởng</span>,
  },
];

export const ROUTES = {
  '1-1': '/luoc-su-ho-tran',
  '1-2': '/sac-phong',
  '1-3': '/giay-cong-nhan-di-tich',
  '1-4': '/so-ghi-cong-duc',
  '1-5': '/cau-doi',
  '1-6': '/noi-tu-va-ngoai-canh',
  '1-7': '/nha-bia-va-van-bia',
  '2': '/quy-uoc-ho-tran',
  '3': '/co-cau-to-chuc',
  '4': '/chuc-nang-va-nhiem-vu',
  '5': '/quy-che-quy-khuyen-hoc',
  '6': '/co-cau-to-chuc-qkh',
  '7': '/chuc-nang-va-nhiem-vu-qkh',
  '8': '/muc-thuong-khuyen-hoc',
  '9': '/danh-muc-tieu-chi-duoc-thuong',
  '10': '/anh-trao-thuong',
};

const Navbar = () => {
  const { push } = useRouter();
  const onClick = ({ key }: any) => {
    // @ts-ignore
    push(ROUTES[key]);
  };
  const onClick2 = ({ key }: any) => {
    // @ts-ignore
    push(ROUTES[key]);
  };
  return (
    <nav className='bg-blue-500 border-gray-200 text-white'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='/quy-che-quy-khuyen-hoc'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image src='/logo.png' width={40} height={40} alt='logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            Quỹ khuyến học
          </span>
        </Link>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <div className='flex gap-5 text-lg font-medium text-white'>
            <Link href='/' className='text-base block py-2' aria-current='page'>
              Trang chủ
            </Link>
            <Dropdown menu={{ items, onClick }}>
              <Space className='text-base cursor-pointer'>Lịch sử họ Trần</Space>
            </Dropdown>
            <Dropdown menu={{ items: items2, onClick: onClick2 }}>
              <Space className='text-base cursor-pointer'>Khuyến học khuyến tài</Space>
            </Dropdown>
            <Dropdown menu={{ items: items3, onClick: onClick2 }}>
              <Space className='text-base cursor-pointer'>Thông tin - Sự kiện</Space>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
