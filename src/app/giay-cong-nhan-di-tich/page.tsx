import React from 'react';
import Image1 from "@/asset/giay-cong-nhan-di-tich/giay-cong-nhan-di-tich-1.jpg";
import Image2 from "@/asset/giay-cong-nhan-di-tich/giay-cong-nhan-di-tich-2.jpg";
import Image from "next/image";

const Page = () => {
    return (
        <div className="w-[1024px] mx-auto">
            <p className="text-2xl text-center font-semibold">Ảnh công nhận di tích</p>
            <Image className="mt-6" src={Image1} width={1024} height={700} alt='slider-image'/>
            <p className="text-center">Ảnh chụp 1</p>
            <Image className="mt-6" src={Image2} width={1024} height={700} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 2</p>
        </div>
    );
};

export default Page;