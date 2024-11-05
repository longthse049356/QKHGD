import React from 'react'
import SliderComponent from '@/components/SliderComponent'
import News from '@/components/News'

function Home() {
  return (
    <main className='min-h-screen'>
      <SliderComponent />
        <News />
      <div className="flex justify-center mt-8">
        <iframe width="1024" height="650" src="https://www.youtube.com/embed/tTu907I0JPc?si=JCsPE65wPkKQ4VkD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </main>
  )
}

export default Home
