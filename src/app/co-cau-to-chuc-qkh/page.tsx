import React from 'react';
import Image1 from "@/asset/co-cau-to-chuc-qkh.png";
import Image from "next/image";

const Page = () => {
    return (
        <div className="w-[1024px] mx-auto">
            <p className="text-2xl text-center font-semibold">Ảnh cơ cấu và tổ chức quỹ khuyến học</p>
            <Image className="mt-6" src={Image1} width={1024} height={600} alt='slider-image'/>
        </div>
    );
};

export default Page;