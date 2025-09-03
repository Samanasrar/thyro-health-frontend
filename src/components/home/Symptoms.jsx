import React from 'react'
import Weight from "../../assets/weight.svg"
import Fatigue from "../../assets/fatigue.svg"
import Temp from "../../assets/temprature.svg"
import Depression from "../../assets/depressed.svg"
import SymtomsCard from './SymtomsCard'

const Symptoms = () => {
  const SymptomsList = [
    {
      icon: Weight,
      title: "Weight Gain And Trouble Losing Weight",
      desc: "This is one of the most common concerns in people with hypothyroidism. Often even with a healthy diet, the weight just keeps piling on which is a challenge to overcome."
    },
    {
      icon: Fatigue,
      title: "Fatigue",
      desc: "You may feel tired even after enough rest."
    },
    {
      icon: Temp,
      title: "Sensitivity To Low Temperature",
      desc: "You know how some people feel excessively cold, especially in air-conditioned rooms? Hypothyroidism makes it more difficult to adapt to lower temperature because your metabolic rate is low."
    },
    {
      icon: Depression,
      title: "Depression",
      desc: "You may feel persistently low, lose interest in activities, and find it hard to feel motivated."
    }
  ]

  return (
    <div className="max-w-full px-6 md:px-20 py-12">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 mt-3">
        <span className="underline underline-offset-8 md:underline-offset-10 decoration-4 decoration-[#9575CD]">
          Symp
        </span>
        toms that can be managed perfectly
      </h2>

      {/* Cards Section */}
      <div
        className="
          flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth
          lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-8
          lg:overflow-x-visible
        "
      >
        {SymptomsList.map((symptom, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 
              w-[90%] sm:w-[70%] md:w-[60%] 
              lg:w-auto lg:flex-shrink 
              snap-center
            "
          >
            <SymtomsCard
              icon={symptom.icon}
              title={symptom.title}
              desc={symptom.desc}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Symptoms
