import React from 'react';
import News from '@/components/News';
import ImageSlider from '@/components/ImageSlider';

function Home() {
  return (
    <main className='min-h-screen px-4 md:px-8 py-6'>
      <ImageSlider />
      <News />
    </main>
  );
}

export default Home;
