import React from 'react'

const CardsWorkflow = ({cardnum,cardimg,text1,text2}) => {
  return (
    <div className=" relative w-full sm:w-[210px] md:w-[210px] lg:w-[250px] min-h-[200px]  bg-[#9DD4C6] hover:bg-blue-300 text-black flex flex-col items-center p-3 rounded-lg shadow-xl">
      <div className=' absolute w-[20px] h-[20px] bg-white p-1 '>
        {cardnum}
      </div>
      <div className="w-full h-[100px] ">
        <img src={cardimg} alt="Icon" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col gap-2 text-center mt-4">
        <p className="lg:text-xl text-lg font-semibold">{text1}</p>
        <p className="lg:text-[12px] text-xs">{text2}</p>
      </div>

    </div>
  )
}

export default CardsWorkflow
