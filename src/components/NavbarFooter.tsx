'use client'
import React from 'react'
import Link from 'next/link'
import {Dropdown, MenuProps, Space} from "antd";
import {useRouter} from "next/navigation";

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Lược sử họ Trần',
    children: [
      {
        key: '1-1',
        label: 'Lược sử',
      },
      {
        key: '1-2',
        label: 'Sắc phong',
      },
      {
        key: '1-3',
        label: 'Giấy ghi nhận di tích lịch sử',
      },
      {
        key: '1-4',
        label: 'Sổ ghi công đức',
      }, {
        key: '1-5',
        label: 'Câu đối',
      },
      {
        key: '1-6',
        label: 'Nội tự và ngoại cảnh',
      },
      {
        key: '1-7',
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
    key: '5',
    label: 'Quy chế quỹ khuyến học',
  },
  {
    key: '6',
    label: 'Cơ cấu tổ chức',
  },
  {
    key: '7',
    label: 'Chức năng và nhiệm vụ',
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
}
const NavbarFooter = () => {
  const { push } = useRouter();
  const onClick = ({key}: any) => {
    // @ts-ignore
    push(ROUTES[key])
  }
  const onClick2 = ({key}: any) => {
    // @ts-ignore
    push(ROUTES[key])
  }
  return (
    <nav className='bg-blue-700 border-gray-200 text-white'>
      <div className='w-[1024px] mx-auto py-2' id='navbar-default'>
        <div className='flex gap-5 text-lg font-medium text-white'>
          <Link href='/' className='text-base block py-2' aria-current='page'>
            Trang chủ
          </Link>
          <Dropdown menu={{items, onClick}}>
            <Space className="text-base cursor-pointer">
              Lịch sử họ Trần
            </Space>
          </Dropdown>
          <Dropdown menu={{items: items2, onClick: onClick2}}>
            <Space className="text-base cursor-pointer">
              Khuyến học khuyến tài
            </Space>
          </Dropdown>
          <Link href='#' className='text-base block py-2'>
            Thông tin - Sự kiện
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarFooter
