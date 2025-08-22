import React from 'react';

const Reviews = () => {
  return (
    <div id="review" className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-center mx-auto bg-[#86B5A7] lg:h-[505px] md:h-[500px] h-auto lg:-mt-28 md:-mt-24 -mt-7 p-6">
      
      {/* Reviews Portfolio */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="lg:w-[400px] lg:h-[300px] w-[90%] max-w-[400px] h-auto bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg lg:text-2xl font-semibold text-black mb-2">Rating and Reviews</h2>
          <div className="flex flex-col gap-3 text-sm lg:text-base">
            <p className="text-gray-700">⭐⭐⭐⭐⭐ - "Amazing platform, easy to use!"</p>
            <p className="text-gray-700">⭐⭐⭐⭐ - "Great experience, would invest again!"</p>
            <p className="text-gray-700">⭐⭐⭐⭐⭐ - "Reliable and trustworthy service!"</p>
          </div>
        </div>
      </div>

      {/* Headline Section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 lg:gap-5">
        <p className="text-2xl lg:text-4xl font-semibold text-black tracking-wide">
          Real Stories
        </p>
        <p className="text-xl lg:text-4xl text-white font-bold -mt-1 lg:-mt-2 tracking-wide">
          Real Impact
        </p>
      </div>

    </div>
  );
};

export default Reviews;
