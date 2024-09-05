import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from "next/image";
import Image1 from "@/asset/anh-bia-quy-uoc.jpg";

const Page = async () => {
    const filePath = path.join(process.cwd(), 'public', 'quyuoc.html');
    // Sử dụng fs để đọc file
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    return (
       <div className="w-[600px] mx-auto">
           <p className="font-sans text-2xl text-center font-semibold">Ảnh bìa quy ước</p>
           <div className="flex justify-center mb-4"><Image className="mt-6" src={Image1} width={600} height={300} alt='slider-image'/></div>
           <div className="font-sans" dangerouslySetInnerHTML={{ __html: htmlContent }} />
       </div>
    );
};

export default Page;