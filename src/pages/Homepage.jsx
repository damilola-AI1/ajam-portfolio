import React from 'react'
import Hero from '../components/Hero'
import Herobackground from '../components/Herobackground'
import Navbar from '../components/Navbar'


const Homepage = () => {
  return (
    <div className='relative scrollbar-hide  w-full min-w-[1600px]  max-w-[1600px] h-full bg-[#FFFFFF]'>
       <Herobackground />
       <div className=" scrollbar-hide relative min-w-[1210px] max-w-[1210px]  mx-auto    h-full ">
          <Navbar />
          <Hero />
       </div>
    </div>
  )
}

export default Homepage


