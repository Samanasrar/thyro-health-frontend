import { Card, CardBody } from '@heroui/react'
import React from 'react'

const HolisticTreatCard = ({ img, title, desc }) => {
  return (
    <Card className="w-full rounded-xl shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl">
      <CardBody className="p-6">
        <div className="flex items-center gap-5">
          <img src={img} alt={title} className="w-25 h-25 object-contain" />
          <div className="text-left">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default HolisticTreatCard
