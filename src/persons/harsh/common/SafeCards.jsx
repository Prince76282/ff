import React from 'react';

const SafeCards = ({ nums, image, text1, text2 }) => {
  return (
    <div 
      className="relative w-full max-w-[280px] sm:max-w-[300px] md:w-[311px] lg:w-[311px] lg:h-[310px] md:h-[330px] min-h-[200px] sm:min-h-[250px] transform transition duration-300 hover:scale-105 text-black flex flex-col items-center lg:p-3 p-3 rounded-2xl"
      style={{
        boxShadow: 'inset 4px -4px 10px rgba(0,0,0,0.5)',
      }}
    >
  
      {/* Space added to prevent content from being hidden under circle */}
      <div className="w-full flex flex-col items-center">

        {/* Image Section - Full width */}
        <div className="w-full lg:h-[160px] md:h-[160px] sm:h-[140px] h-[120px]">
          <img src={image} alt="Icon" className="w-full h-full object-cover" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col lg:gap-6 md:gap-4 sm:gap-3 gap-2 text-center md:text-sm mt-4">
          <p className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold">{text1}</p>
          <p className="lg:text-sm md:text-[12px] sm:text-[11px] text-[10px] font-semibold opacity-85">{text2}</p>
        </div>

      </div>
    </div>
  );
};

export default SafeCards;
