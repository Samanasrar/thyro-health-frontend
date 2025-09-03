import { Card, CardBody, CardHeader } from '@heroui/react'


const SymtomsCard = ({icon, title, desc}) => {
  return (
    <Card className="w-full rounded-xl shadow-lg bg-white transition-shadow duration-300 hover:shadow-2xl h-full">
        <CardHeader className='bg-[#6A5794] rounded-b-md flex gap-6 p-3'>
            <img src={icon} alt="" className="w-7 h-7 object-contain"  />
            <h3 className="text-md font-semibold text-white">{title}</h3>
        </CardHeader>
        <CardBody className="text-sm text-gray-600 text-left">
            {desc}
        </CardBody>
    </Card>
  )
}
export default SymtomsCard
