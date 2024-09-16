import React from 'react';
import Image1 from "@/asset/co-cau-to-chuc.png";
import Image from "next/image";

const Page = () => {
    return (
        <div className="w-[1024px] mx-auto">
            <Image className="mt-6 w-[580px] h-[700px] mx-auto" src={Image1} width={2024} height={1400} alt='slider-image'/>
        </div>
    );
};

export default Page;