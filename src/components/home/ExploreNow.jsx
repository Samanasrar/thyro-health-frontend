import React from 'react'
import explore from "../../assets/explore.jpg"

const ExploreNow = () => {
  return (
    <div
      className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${explore})` }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">
            Holistic Consultation by Expert Doctors
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-100 text-center sm:text-left">
            At Thyro Health, we believe thyroid healing is not a one-pill solution.
            That's why our doctors take a root-cause approach—combining medicine,
            diet, supplements, and lifestyle changes to address your thyroid
            problem from all directions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExploreNow
