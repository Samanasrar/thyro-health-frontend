import { Card } from '@heroui/react'
import React from 'react'

const FunctionCard = ({ title, img, desc, bg }) => {
  return (
    <Card
      style={{ backgroundColor: bg }}
      className="w-full rounded-xl shadow-lg flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-2xl h-full px-7 py-6 min-h-[320px]"
    >
      {/* Title */}
      <h2 className="text-md font-semibold text-center">{title}</h2>

      {/* Image */}
      <img src={img} alt={title} className="w-28 h-28 object-contain my-4" />

      {/* Description */}
      <p className="text-sm text-gray-600 text-center flex-grow">
        {desc}
      </p>
    </Card>
  )
}

export default FunctionCard
