import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from "next/image";
import Image1 from "@/asset/anh-bia-quy-uoc.jpg";

const Page = async () => {
    const filePath = path.join(process.cwd(), 'public', 'quy-che.html');
    // Sử dụng fs để đọc file
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    return (
        <div className="w-[600px] mx-auto">
            <div className="font-sans" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Page;