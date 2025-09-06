import Suppliment from "../../assets/suppliments.png"
import Diet from "../../assets/diet.png"
import Lifestyle from "../../assets/lifestyle.png"
import Medicine from "../../assets/medicine.png"
import HolisticTreatCard from './HolisticTreatCard'

const HolisticTreatment = () => {
  const HolisticTreatmentList = [
    {
      img: Suppliment,
      title: "Supplement",
      desc: "Fill key deficiencies with bioavailable nutrients",
    },
    {
      img: Diet,
      title: "Diet",
      desc: "Reduce inflammation & support gut health",
    },
    {
      img: Lifestyle,
      title: "Lifestyle",
      desc: "Manage stress, sleep & overall wellness",
    },
    {
      img: Medicine,
      title: "Medicine",
      desc: "Balance hormones & support metabolism",
    },
  ];

  return (
    <div className="bg-[#6A5794] px-4 sm:px-10 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 items-start">
        
        {/* Left Text */}
        <div className="max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white">
            <span className='underline  underline-offset-9 md:underline-offset-10 decoration-4 decoration-[#9575CD]'>Holistic</span> Treatment
          </h2>
          <p className="text-white leading-relaxed text-justify text-sm md:text-base lg:text-lg">
            At Thyro Health, we believe thyroid healing is not a one-pill solution.
            That's why our doctors take a root-cause approach—combining medicine,
            diet, supplements, and lifestyle changes to address your thyroid
            problem from all directions.
          </p>
        </div>

  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {HolisticTreatmentList.map((treatment, index) => (
            <div key={index} className="w-full">
              <HolisticTreatCard
                img={treatment.img}
                title={treatment.title}
                desc={treatment.desc}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HolisticTreatment;
