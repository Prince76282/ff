import React from 'react';

const WorkingCards = ({ nums, image, text1, text2 }) => {
  return (
    // <div className="relative w-full sm:w-[210px] md:w-[210px] lg:w-[311px] lg:h-[310px] md:h-[330px] min-h-[200px] bg-[#9DD4C6]  text-black flex flex-col items-center lg:p-5 p-3 rounded-2xl shadow-xl">

    <div id="working" className="relative w-full sm:w-[210px] md:w-[210px] lg:w-[311px] lg:h-[310px] md:h-[330px] min-h-[200px] bg-[#9DD4C6] text-black flex flex-col items-center lg:p-5 p-3 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105">

      {/* Number Circle - Positioned absolutely to overlap the top */}
      <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center font-bold rounded-full w-[60px] h-[60px] text-2xl bg-white shadow-lg'>
        {nums}
      </div>
         
      {/* Space added to prevent content from being hidden under circle */}
      <div className="mt-12 w-full flex flex-col items-center">

        {/* Image */}
        <div className=" lg:w-[336px] h-[100px]">
          <img src={image} alt="Icon" className="w-full h-full object-contain" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center  md:text-sm mt-4">
          <p className="lg:text-lg text-md font-semibold">{text1}</p>
          <p className="lg:text-sm  font-semibold opacity-85 text-xs">{text2}</p>
        </div>

      </div>
    </div>
  );
};

export default WorkingCards;
