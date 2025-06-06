import React from 'react';
import fs from 'fs';
import path from 'path';

const Page = async () => {
  const filePath = path.join(process.cwd(), 'public', 'CHUCNANGVANHIEMVUCUABCHHGT.html');
  // Sử dụng fs để đọc file
  const htmlContent = fs.readFileSync(filePath, 'utf8');
  return (
    <div className='w-full max-w-[700px] px-4 sm:px-6 mx-auto my-6'>
      <h1 className='text-2xl md:text-3xl text-center font-semibold mb-6'>Chức năng và nhiệm vụ</h1>
      <div
        className='font-sans bg-slate-100 p-4 rounded-md shadow-sm'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Page;
