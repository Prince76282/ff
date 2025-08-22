import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { PiArrowBendRightUpFill } from "react-icons/pi";

const InvestmentCards = ({ color, text1, amount, text2, zigimg }) => {
    return (
        <div className="w-[160px] lg:w-[230px]   md:w-[229px] h-[160px] flex flex-col justify-between font-Poppins bg-white shadow-lg p-4 rounded-xl">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-[11px] lg:text-lg  md:text-md opacity-80">{text1}</p>
                <button className="rounded-full p-1.5 bg-white shadow-lg">
                    <MdNavigateNext />
                </button>
            </div>

            {/* Amount Section */}
            <div className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold">{amount}</div>

            {/* Bottom Section */}
            <div className="flex flex-row justify-between items-center">
                <div
                    className="flex flex-row p-1 items-center gap-1 rounded-md text-xs sm:text-sm md:text-md"
                    style={{ backgroundColor: color }}
                >
                    <PiArrowBendRightUpFill />
                    <p>{text2}</p>
                </div>

                {/* Responsive Image */}
                <img
                    src={zigimg}
                    alt="zigzag design"
                    className="max-w-[88px] max-h-[52px] w-16 h-14 object-contain self-end ml-auto"
                />
            </div>
        </div>
    );
};

export default InvestmentCards;
