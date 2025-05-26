import React from 'react';
import fs from 'fs';
import path from 'path';

const Page = async () => {
  const filePath = path.join(process.cwd(), 'public', 'quy-che.html');
  // Sử dụng fs để đọc file
  const htmlContent = fs.readFileSync(filePath, 'utf8');
  return (
    <div className='w-[700px] mx-auto'>
      <div
        className='font-sans bg-slate-100 p-4 rounded-md'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Page;
