import { Card, CardBody } from '@heroui/react'
import React from 'react'

const RootCauseCard = ({ causeLogo, title, desc }) => {
  return (
    <Card 
      className="rounded-lg shadow-lg max-w-[270px] w-full transition-shadow duration-300 hover:shadow-xl h-full"
    >
      <CardBody className="flex flex-col items-center justify-between text-center gap-4 p-6">
      
        <img src={causeLogo} alt={title} className="w-14 h-14 object-contain" />

       
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

       
        <p className="text-sm text-gray-600">{desc}</p>
      </CardBody>
    </Card>
  )
}

export default RootCauseCard
