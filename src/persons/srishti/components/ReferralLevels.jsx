import React, { useState } from "react";
import crownIcon from "../../../assets/srishti/crown.png";

const data = [
  {
    level: 1,
    text: "Starting level for everyone. Earn coins with every successful referral.",
    bonus: "Earn 100 coins per referral",
  },
  {
    level: 2,
    text: "Unlock after 3 successful referrals. Enhanced rewards for your efforts.",
    bonus: "Earn 100 coins + 10% bonus per referral",
  },
  {
    level: 3,
    text: "Unlock after 8 successful referrals. Premium rewards for dedicated users.",
    bonus: "Earn 100 coins + 20% bonus per referral",
  },
  {
    level: 4,
    text: "Unlock after 15 successful referrals. The final & most rewarding tier.",
    bonus: "Earn 100 coins + 30% bonus per referral",
  },
];

const ReferralLevels = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 py-6 sm:py-8 shadow-lg rounded-3xl mt-6 w-full max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-6 text-left">
        Level Up & Earn More
      </h2>

      {/* Progress Bar */}
      <div className="relative flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 mb-6 px-2 sm:px-6 w-full">
        {data.map((step, index) => (
          <React.Fragment key={step.level}>
            {/* Progress Line */}
            {index !== 0 && (
              <div
                className={`h-1 sm:h-2 flex-1 rounded-full transition-all duration-500 ${
                  currentStep >= step.level ? "bg-[#9DD4C6]" : "bg-gray-300"
                }`}
              ></div>
            )}
            {/* Level Circle */}
         {/* Level Circle */}
<div
  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 text-sm sm:text-lg font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center
    ${
      currentStep >= step.level
        ? "bg-[#0C8281] text-white border-[#9DD4C6]"
        : "bg-gray-300 text-black border-gray-400"
    }`}
  onClick={() => setCurrentStep(step.level)}
>
  {step.level}
</div>

          </React.Fragment>
        ))}
      </div>

      {/* Level Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {data.map((item, index) => (
          <div
            key={item.level}
            className={`p-6 sm:p-8 flex shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] flex-col items-center text-center rounded-3xl  transition-all duration-300 cursor-pointer border-2 relative 
              ${
                currentStep === item.level
                  ? "bg-[#E0F7F6] border-[#09DD4C6] shadow-xl"
                  : "bg-white border-gray-300"
              } 
              hover:shadow-lg hover:border-[#09DD4C6] hover:scale-[1.03]
              ${index === 0 ? "shadow-lg shadow-gray-400" : ""}
            `}
            
          >
            {/* Crown for Level 1 */}
            {item.level === 1 && (
              <img
                src={crownIcon}
                alt="Crown"
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 h-10 sm:h-12"
              />
            )}
            <div className="mt-6">
              <p className="text-lg font-bold text-black">Level {item.level}</p>
              <p className="text-sm text-black my-3">{item.text}</p>
              <p className="px-4 py-1 bg-[#EEF2FF] text-black rounded-full font-semibold text-sm inline-block">
                {item.bonus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralLevels;
