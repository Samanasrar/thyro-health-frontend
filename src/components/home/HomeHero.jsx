import React from 'react'
import ContentWrapper from '../ContentWrapper'
import Hero from "../../assets/heroImg.png"
import { Button } from '@heroui/react'
const HomeHero = () => {
  return (
 <div className="bg-[#1d293d] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-full">
  
  
  <div className="flex flex-col justify-center pt-16 text-left px-5 lg:px-12 md:px-7  md:text-left mx-auto md:mx-0 mt-4 md:mt-4 lg:mt-0">
    <h3 className="text-white text-sm md:text-xl lg:2xl font-medium mb-6">
      <span className="text-[#9575CD] text-2xl md:text-4xl lg:text-5xl font-bold">91% </span> 
       Success Rate with 10K+ Thyroid Patients Doctor Guided Holistic Care
    </h3>
    
    <h2 className="text-white text-md md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-6">
      Know the Root Causes of <span className='underline  underline-offset-9 md:underline-offset-10 decoration-4 decoration-[#9575CD]'>your</span> Thyroid Condition
    </h2>
    
    <Button className="bg-[#9575CD] w-fit px-2 py-1 mt-3 md:px-2 md:py-1 lg:mt-6 md:mb-4 lg:mb-0 lg:px-6 lg:py-3 text-white text-sm sm:text-base md:text-[13px] font-medium shadow-md hover:bg-[#7E57C2] transition">
      START WITH THYROID ROOT CAUSE TEST
    </Button>
  </div>

  {/* Image Section */}
  <div>
    <img
      src={Hero}
      alt="Thyroid Care Hero"
      className="w-full h-[400px] object-cover md:h-auto lg:h-[520px] md:rounded-bl-lg md:mb-10"
    />
  </div>
  
</div>

 
  )
}

export default HomeHero
