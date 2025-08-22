import React from 'react';
import chooseimicon from "../../../assets/dashboard/Choose-cuate 1.png";
import image1 from "../../../assets/dashboard/Group 19.png";
import image2 from "../../../assets/dashboard/Group 20.png";
import image3 from "../../../assets/dashboard/Group 21.png";
import image4 from "../../../assets/dashboard/Group 22.png";
import image5 from "../../../assets/dashboard/slice1.png";
import image6 from "../../../assets/dashboard/slice2.png";
import image7 from "../../../assets/dashboard/slice3.png";
import image8 from "../../../assets/dashboard/slice4.png";

// Data arrays
const data1 = [
    { text1: "Invest in Films You Love", text2: "Back projects that excite you", image: image1 },
    { text1: "Earn Passive Income", text2: "Get rewarded when the movies you support succeed.", image: image2 },
    { text1: "Vote on Film Decisions", text2: "Have a say in casting, storylines, and more.", image: image3 },
    { text1: "Own Exclusive Film NFTs", text2: "Get digital collectibles tied to movie projects.", image: image4 }
];

const data2 = [
    { text1: "Crowdfund Your Film", text2: "Get funding from passionate fans and investors.", image: image5 },
    { text1: "Transparent & Secure", text2: "Blockchain ensures fair and traceable transactions.", image: image6 },
    { text1: "Built-in Audience Engagement", text2: "Turn fans into promoters and stakeholders.", image: image7 },
    { text1: "Profit-Sharing Model", text2: "Ensure fair revenue distribution among contributors.", image: image8 }
];

// Component
const Choosefilmyfunds = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center gap-12 lg:gap-24 mt-10  mx-auto px-4 sm:px-6 lg:px-12">

            {/* Left Section - Image */}
            <div className="w-full lg:w-[589px] md:w-[589px] flex justify-center">
                <img src={chooseimicon} alt="Choose FilmyFunds" className="w-full max-w-[400px] lg:max-w-[520px]" />
            </div>

            {/* Right Section - List */}
            <div className="w-full lg:w-[480px] flex flex-col gap-4">

                {/* Benefits for Fans/Creators */}
                <div className="flex flex-col gap-4">
    {data1.map((item, index) => (
        <div 
            key={index} 
            className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-[0_6px_30px_rgba(0,0,0,0.5)]" // custom shadow
        >
            <img src={item.image} alt="Feature Icon" className="w-12 h-12 rounded-full"/>
            <div className="flex flex-col">
                <p className="text-base sm:text-lg font-semibold text-black">{item.text1}</p>
                <p className="text-xs sm:text-sm text-gray-600">{item.text2}</p>
            </div>
        </div>
    ))}
</div>



            </div>

        </div>
    );
};

export default Choosefilmyfunds;
