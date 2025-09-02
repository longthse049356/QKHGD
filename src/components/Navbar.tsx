'use client';
import React, { useState, useEffect } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClick = ({ key }: any) => {
    // @ts-ignore
    push(ROUTES[key]);
    setIsMenuOpen(false);
  };

  const onClick2 = ({ key }: any) => {
    // @ts-ignore
    push(ROUTES[key]);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 border-gray-200 text-white sticky top-0 z-50 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='/quy-che-quy-khuyen-hoc'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <Image src='/logo.png' width={40} height={40} alt='logo' />
          <span className='self-center text-xl md:text-2xl font-semibold whitespace-nowrap'>
            Quỹ khuyến học
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
          aria-controls='navbar-default'
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMenuOpen ? (
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            ) : (
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id='navbar-default'
        >
          <div className='flex flex-col md:flex-row md:items-center md:gap-5 text-lg font-medium text-white'>
            <div className='md:flex md:items-center'>
              <Link
                href='/'
                className='text-base block py-2 px-3 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:p-0 md:py-0'
                aria-current='page'
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
            </div>

            {/* Desktop Dropdowns */}
            <div className='hidden md:flex md:items-center'>
              <Dropdown menu={{ items, onClick }}>
                <Space className='text-base cursor-pointer'>Lịch sử họ Trần</Space>
              </Dropdown>
            </div>
            <div className='hidden md:flex md:items-center'>
              <Dropdown menu={{ items: items2, onClick: onClick2 }}>
                <Space className='text-base cursor-pointer'>Khuyến học khuyến tài</Space>
              </Dropdown>
            </div>
            <div className='hidden md:flex md:items-center'>
              <Dropdown menu={{ items: items3, onClick: onClick2 }}>
                <Space className='text-base cursor-pointer'>Thông tin - Sự kiện</Space>
              </Dropdown>
            </div>

            {/* Mobile Dropdowns */}
            <div className='md:hidden'>
              <Accordion title='Lịch sử họ Trần' items={items} onClick={onClick} />
              <Accordion title='Khuyến học khuyến tài' items={items2} onClick={onClick2} />
              <Accordion title='Thông tin - Sự kiện' items={items3} onClick={onClick2} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Accordion component for mobile menu
const Accordion = ({
  title,
  items,
  onClick,
}: {
  title: string;
  items: MenuProps['items'];
  onClick: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-t border-blue-400 py-2'>
      <button
        className='w-full text-left flex justify-between items-center py-2 px-3'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-base font-medium'>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className='pl-4 mt-1'>
          {items?.map((item) => {
            if (!item) return null;

            const menuItem = item as {
              key?: React.Key;
              label?: React.ReactNode;
              children?: { key?: React.Key; label?: React.ReactNode }[];
            };

            return (
              <React.Fragment key={menuItem?.key}>
                <button
                  className='block w-full text-left py-2 px-3 text-base hover:bg-blue-600 rounded'
                  onClick={() => {
                    onClick({ key: menuItem?.key });
                    setIsOpen(false);
                  }}
                >
                  {menuItem?.label}
                </button>

                {menuItem?.children && (
                  <div className='pl-4'>
                    {menuItem.children.map((child) => (
                      <button
                        key={child.key}
                        className='block w-full text-left py-2 px-3 text-base hover:bg-blue-600 rounded'
                        onClick={() => {
                          onClick({ key: child.key });
                          setIsOpen(false);
                        }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
