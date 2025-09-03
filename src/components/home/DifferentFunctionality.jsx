import React from 'react'
import FunctionCard from './FunctionCard'
import RootAnalysis from "../../assets/rootAnalysis.png"
import HolisticTreatment from "../../assets/holisticTreat.png"
import Care from "../../assets/continousCare.png"

const DifferentFunctionality = () => {
  const FunctionsList = [
    {
      title: "Analysis of Root Cause",
      img: RootAnalysis,
      desc: "Based on 100s of biomarkers, symptoms and health history, our expert doctors analyze the root cause of your hypothyroidism",
      bg: "#FAEFF7",
    },
    {
      title: "Creating Holistic Treatment",
      img: HolisticTreatment,
      desc: "We go beyond medicines. Your personalized treatment combined food, supplements and lifestyle guidance to address the root cause permanently",
      bg: "#FFF3D1"
    },
    {
      title: "Continuous Care",
      img: Care,
      desc: "Our expert thyroid coaches assist you in implementing the treatment throughout the journey. We are with you till the time you feel much better.",
      bg: "#F3EEFD"
    }
  ]

  return (
    <div className='max-w-full px-6 md:px-20 py-12'>
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 mt-3">
        <span className="underline underline-offset-8 md:underline-offset-10 decoration-4 decoration-[#9575CD]">
          What
        </span> Thyro Health does differently?
      </h2>

      <div className="max-w-3xl mx-auto">
        <p className='leading-relaxed text-center sm:text-justify text-sm md:text-base lg:text-lg'>
          Most thyroid patients eventually become regular with hypothyroidism medication, but other
          lifestyle factors are not so easy to incorporate. Here are a few simple changes you can make
          to your daily routine to relieve hypothyroidism symptoms in men and women.
        </p>
      </div>

      {/* Cards Section */}
      <div
        className="
          flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth
          md:grid md:grid-cols-3 md:gap-6
          md:overflow-x-visible mt-9
        "
      >
        {FunctionsList.map((func, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 w-[85%] sm:w-[70%] 
              md:w-auto md:flex-shrink
              snap-center
            "
          >
            <FunctionCard
              img={func.img}
              title={func.title}
              desc={func.desc}
              bg={func.bg}
            />
          </div>
        ))}
      </div>
       <div className="max-w-3xl mx-auto mt-10">
        <p className='leading-relaxed text-center sm:text-justify text-sm md:text-base lg:text-lg'>
          We make this easier for you by formulating a complete plan that includes diet, exercise and relaxation practices.
          This personalized treatment plan will give you optimal results. Our team of hypothyroidism doctors and experts
          recommend this plan for longterm results.
        </p>
      </div>
    </div>
  )
}

export default DifferentFunctionality
