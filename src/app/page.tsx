import React from 'react'
import SliderComponent from '@/components/SliderComponent'
import News from '@/components/News'

function Home() {
  return (
    <main className='min-h-screen'>
      <SliderComponent />
        <News />
    </main>
  )
}

export default Home
