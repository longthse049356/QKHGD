import React from 'react';
import fs from 'fs';
import path from 'path';

const Page = async () => {
    const filePath = path.join(process.cwd(), 'public', 'quy-che.html');
    // Sử dụng fs để đọc file
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    return (
        <div className="w-[600px] mx-auto">
            <p className="text-2xl text-center font-semibold mb-4">Quy chế quỹ khuyến học</p>
            <div className="font-sans" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Page;