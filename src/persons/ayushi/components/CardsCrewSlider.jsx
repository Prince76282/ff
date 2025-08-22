import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../../assets/ayushi_assets/arrow.svg";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <img src={arrow} alt="Next" className="w-8 h-8" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <img src={arrow} alt="Next" className="w-8 h-8" />
  </div>
);

const CastCrewSlider = ({
  title,
  members,
  width,
  slidesToShow = 4,
  showThreeDots = false,
}) => {
  const sliderSettings = {
    dots: false,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-[#0C8281] transition-all duration-300"></div>
    ),
    appendDots: (dots) => (
      <div className="flex justify-center mt-3 space-x-2">
        {dots}
        {showThreeDots && (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        )}
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, // Only next arrow

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(3, slidesToShow) },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(2, slidesToShow) },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: Math.min(2, slidesToShow) },
      },
    ],
  };

  return (
    <div className={`flex flex-col`} style={{ width }}>
      <h2 className="text-xl font-semibold text-[#0C8281] ">{title}</h2>
      <div className="relative bg-[#E6F4F1] p-4 rounded-sm mt-2">
        <Slider {...sliderSettings}>
          {members.map((member, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Profile Image (Column 1) */}
              <div className="ml-2 mt-2 flex justify-start">
                <img
                  src={member.image}
                  alt={member.role}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex flex-col ml-4 mt-2">
                  <p className="text-lg font-medium text-black">
                    {member.name}
                  </p>
                  <p className="text-md text-gray-600 font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CastCrewSlider;
