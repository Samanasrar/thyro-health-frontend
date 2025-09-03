import React from 'react'
import AutoImunity from "../../assets/autoimunity.png"
import gut from "../../assets/gut.png"
import Insulin from "../../assets/insulin.png"
import Toxicity from "../../assets/toxicity.png"
import Nutrition from "../../assets/nutrition.png"
import RootCauseCard from './RootCauseCard'

const RootCauses = () => {
  const RootCausesList = [
    {
      causeLogo: AutoImunity,
      title: "Autoimmunity Risk",
      desc: "Identify Hashimoto's or other immune responses"
    },
    {
      causeLogo: Insulin,
      title: "Insulin Resistance Risk",
      desc: "Understand how metabolism impacts thyroid functions"
    },
    {
      causeLogo: Nutrition,
      title: "Nutrition Profile",
      desc: "Vitamin and mineral imbalances"
    },
    {
      causeLogo: Toxicity,
      title: "Toxicity Profile",
      desc: "Environmental toxins affecting hormone production"
    },
    {
      causeLogo: gut,
      title: "Gut Health Profile",
      desc: "Poor gut function can disrupt hormone balance"
    }
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-12 mt-3">
        <span className='underline  underline-offset-9 md:underline-offset-10 decoration-4 decoration-[#9575CD]'>Thyroid</span> Has Many Root Causes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch justify-items-center">
        {RootCausesList.map((cause, index) => (
          <RootCauseCard
            key={index}
            causeLogo={cause.causeLogo}
            title={cause.title}
            desc={cause.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default RootCauses
