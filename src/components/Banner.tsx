import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='bg-blue-600 flex items-center px-3 h-[270px]'>
            <Link href='/' title='Home'>
                <Image
                    className='w-full h-[270px]'
                    alt='quy khuyen hoc'
                    title='quy khuyen hoc'
                    src='/banner.png'
                    width={1500}
                    height={800}
                    quality={100}
                />
            </Link>
            {/*<Link href='/' title='Home'>*/}
            {/*    <Image*/}
            {/*        className='w-[140px] h-[176px] rounded-sm'*/}
            {/*        alt='quy khuyen hoc'*/}
            {/*        title='quy khuyen hoc'*/}
            {/*        src='/IMG_0550.jpg'*/}
            {/*        width={500}*/}
            {/*        height={500}*/}
            {/*        quality={100}*/}
            {/*    />*/}
            {/*</Link>*/}
            {/*<div className="flex-1 h-[240px] text-white flex justify-between px-6 items-center">*/}
            {/*    <div className={cn('text-6xl leading-[120px] font-bold italic', myFont.className)}>Khuyến Học <br/>Giáp Đông</div>*/}
            {/*    <div className="">*/}
            {/*        <div className='text-xl'>*/}
            {/*            <p>&quot;Hiền tài là nguyên khí quốc gia&ldquo;</p>*/}
            {/*            <p className="text-right">- Bia Văn Miếu Quốc Từ Giám</p>*/}
            {/*        </div>*/}
            {/*        <div className='text-xl mt-4'>*/}
            {/*            <p>Khuyến học khuyến tài:</p>*/}
            {/*            <p className="pl-6">Xây dựng nền tảng &quot;Sức Khoẻ - Tri Thức - Đạo Đức&ldquo;</p>*/}
            {/*            <p className="pl-6">Phát triển văn hoá &quot;Chuẩn Mực - Sáng tạo - Nghĩa Tình&ldquo;</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<Link href='/' title='Home'>*/}
            {/*    <Image*/}
            {/*        className='w-44'*/}
            {/*        alt='quy khuyen hoc'*/}
            {/*        title='quy khuyen hoc'*/}
            {/*        src='/logo.png'*/}
            {/*        width={400}*/}
            {/*        height={400}*/}
            {/*        quality={100}*/}
            {/*    />*/}
            {/*</Link>*/}
        </div>
    )
}

export default Banner
