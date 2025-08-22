import React, { useState } from 'react';
import pika from "../../../assets/harsh_assets/chava.jpg";
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import dhoni from "../../../assets/harsh_assets/bahubali_poster.jpg"
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const NftCards = ({ width,height,bgcolor }) => {
    const [hovernft, setHoverdNft] = useState(false);
      const navigate = useNavigate();
    
    const location=useLocation();
    const ishome = location.pathname==="/home" || location.pathname==="/dashboard"
    console.log("ishome",ishome);

    return (
      <div
        style={{ background: bgcolor }}
        className={clsx(
          `border-2 sm:border-4 z-10  border-black  text-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative`,
          width, // ✅ Dynamic width classes
          height // ✅ Dynamic height classes
        )}
        onMouseEnter={() => setHoverdNft(true)} // ✅ Fix: Set hover state
        onMouseLeave={() => setHoverdNft(false)} // ✅ Fix: Reset hover state
      >
        {!hovernft ? (
          <>
            {/* NFT Header */}
            <div className="flex flex-row justify-between items-center  text-white px-3 sm:px-4 py-2">
              <p className="text-xs sm:text-sm md:text-lg font-semibold font-mono">
                Chhava
              </p>
              <span className="text-gray-400 text-xs sm:text-sm font-mono">
                @nkk01
              </span>
            </div>

            {/* NFT Image */}
            <div className="w-full lg:h-[320px] sm:h-[220px] md:h-[250px] h-auto overflow-hidden shadow-lg  border-2 border-black">
              <img
                src={dhoni}
                alt="NFT"
                className="w-full h-full object-cover rounded-xs"
              />
            </div>

            {/* NFT Info */}
            <div className="p-2 sm:p-4 flex flex-col justify-between space-y-2">
              {/* Pricing & Buyers Info */}
              <div className="flex flex-row justify-between items-center">
                <span className="text-sm sm:text-lg font-bold text-white opacity-85 bg-[#0C8281] px-2 sm:px-3 rounded-md">
                  ₹ 1000
                </span>
                <div className="flex flex-col items-end ">
                  <span className="text-sm sm:text-xl font-semibold">2000</span>
                  <span className="text-xs">Remaining NFT</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col  w-full h-full">
            <div
              className={`flex flex-col justify-between mt-2 transition-all duration-300 px-2 font-Poppins ${
                bgcolor ==
                "linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)"
                  ? "text-black"
                  : "text-white"
              }  `}
            >
              {/* NFT Image (on hover) */}
              <div className="w-full lg:h-[180px] h-[180px] md:h-[180px]  overflow-hidden shadow-lg border-2 border-black  ">
                <img
                  src={dhoni}
                  alt="NFT"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Studio & Time Info */}
              <div className="flex flex-row justify-between items-center mt-2 flex-wrap">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300"></div>
                  <span className="text-xs lg:text-lg font-semibold">
                    Studio
                  </span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs lg:text-base  font-semibold">
                    1H:15M:25S
                  </span>
                  <span className="text-xs">Closing</span>
                </div>
              </div>

              {/* Royalty Info */}
              <div className="flex flex-col justify-center items-center text-center mx-auto font-medium text-xs lg:text-lg md:text-sm  mt-2 lg:mt-3 ">
                <span>0.4% Royalty Share + Reward Coins</span>
              </div>

              {/* Price & NFT Count */}
              <div className="flex flex-row justify-between items-center mt-2 flex-wrap">
                <div className="flex flex-col">
                  <span className="text-xs lg:text-md">8/03/2025</span>
                  <span className="text-[10px] lg:text-sm">Valid Till</span>
                </div>

                <div className="text-xs lg:text-lg font-semibold text-white opacity-85 bg-[#0C8281] h-[26px] lg:h-[30px] px-2 py-1 w-fit rounded-sm">
                  ₹ 1000
                </div>

                <div className="flex flex-col text-right">
                  <p className="text-xs sm:text-md">35</p>
                  <span className="lg:text-xs  text-[10px]">
                    NFT's Remaining
                  </span>
                </div>
              </div>
            </div>

            {/* Buy Now & Add to Cart Buttons */}
            {ishome ? (
              <div className="flex flex-row gap-5 justify-center items-center mt-2 p-1 lg:bg-gray-400 md:bg-gray-400 w-full h-full flex-wrap">
                <button
                  onClick={() => navigate("/project-details")}
                  className="bg-yellow-400 text-black font-semibold rounded-sm py-2 px-1 lg:w-[120px] text-xs sm:text-sm md:text-sm hover:bg-yellow-500 transition"
                >
                  Go to Details
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-5 justify-center items-center mt-2 p-1 lg:bg-gray-400 md:bg-gray-400 w-full h-full flex-wrap">
                <Link to="/payment-page" className="w-1/2 flex justify-center">
                  <button className="bg-yellow-400 text-black font-semibold rounded-sm py-2 px-1 lg:w-[120px] text-xs sm:text-sm md:text-sm hover:bg-yellow-500 transition">
                    BUY NOW
                  </button>
                </Link>
                <Link to ="/cart">
                <button className="bg-yellow-400 text-black font-semibold rounded-sm py-2 px-1 lg:w-[120px] text-xs sm:text-sm md:text-sm hover:bg-yellow-500 transition">
                  ADD TO CART
                </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
};

export default NftCards;
