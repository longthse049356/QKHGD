import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import favicon from '../../public/favicon.ico';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import NavbarFooter from '@/components/NavbarFooter';
import Footer from '@/components/Footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Quỹ khuyến học Giáp Đông',
  description: 'Nơi ươm mầm tài năng quê ta',
  icons: [{ rel: 'icon', url: favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fontSans.variable)}>
        <Banner />
        <Navbar />
        <div className='pb-10 bg-gradient-to-br from-slate-200 via-blue-200 to-indigo-200 min-h-screen'>
          {children}
        </div>
        <NavbarFooter />
        <Footer />
      </body>
    </html>
  );
}
