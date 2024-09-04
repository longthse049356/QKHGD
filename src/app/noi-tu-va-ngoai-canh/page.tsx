import React from 'react';
import Image1 from "@/asset/noi-tu/anh-1.jpg";
import Image2 from "@/asset/noi-tu/anh-2.jpg";
import Image3 from "@/asset/noi-tu/anh-3.jpg";
import Image4 from "@/asset/noi-tu/anh-4.jpg";
import Image5 from "@/asset/noi-tu/anh-5.jpg";
import Image6 from "@/asset/noi-tu/anh-6.jpg";
import Image7 from "@/asset/noi-tu/anh-7.jpg";
import Image8 from "@/asset/noi-tu/anh-8.jpg";
import Image9 from "@/asset/noi-tu/anh-9.jpg";
import Image10 from "@/asset/noi-tu/anh-10.jpg";
import Image11 from "@/asset/noi-tu/anh-11.jpg";
import Image from "next/image";

const Page = () => {
    return (
        <div className="w-[900px] mx-auto">
            <p className="text-2xl text-center font-semibold">Ảnh nội tự và ngoại cảnh</p>
            <Image className="mt-6 border rounded" src={Image1} width={900} height={500} alt='slider-image'/>
            <p className="text-center">Ảnh chụp 1</p>
            <Image className="mt-6 border rounded" src={Image2} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 2</p>
            <Image className="mt-6 border rounded" src={Image3} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 3</p>
            <Image className="mt-6 border rounded" src={Image4} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 4</p>
            <Image className="mt-6 border rounded" src={Image5} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 5</p>
            <Image className="mt-6 border rounded" src={Image6} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 6</p>
            <Image className="mt-6 border rounded" src={Image7} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 7</p>
            <Image className="mt-6 border rounded" src={Image8} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 8</p>
            <Image className="mt-6 border rounded" src={Image9} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 9</p>
            <Image className="mt-6 border rounded" src={Image10} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 10</p>
            <Image className="mt-6 border rounded" src={Image11} width={900} height={500} alt='slider-image'/>
            <p className="text-center mb-3">Ảnh chụp 11</p>
        </div>
    );
};

export default Page;