import EventSection from '@/components/Banner/EventSection'
import HeroSection from '@/components/Banner/HeroSection'
import Carousel from '@/components/Banner/LatestNews'
import StatsSection from '@/components/Banner/StatsSection'
import SubHeroSection from '@/components/Banner/SubHeroSection'
import Navbar from '@/components/common/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <main>
        <HeroSection />
        <section className='bg-white z-50' style={{zIndex:1000}}>
          <div className=' bg-white mx-auto'>
          <SubHeroSection/>
          <EventSection/>
          <Carousel/>
          <StatsSection/>
          <div className='h-96'>

          </div>
        </div>
        </section>
        
      </main>
    </div>
  )
}

export default page