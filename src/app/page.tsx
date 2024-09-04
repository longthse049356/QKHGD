import React from 'react'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import SliderComponent from '@/components/SliderComponent'
import News from '@/components/News'
import NavbarFooter from '@/components/NavbarFooter'
import Footer from '@/components/Footer'

function Home() {
  return (
    <main className='min-h-screen'>
      <SliderComponent />
      <News />
    </main>
  )
}

export default Home
