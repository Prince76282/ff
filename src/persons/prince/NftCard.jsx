import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import dhoni from "../../assets/prince/bahubali_poster.jpg";
import clsx from "clsx";
import useApiHandler from "@/hooks/useApiCall";

const NftCards = ({ width, height, bgcolor, book, onClose }) => {


  const navigate = useNavigate();
  const apiCaller = useApiHandler();
  // date convertor function to convert date to DD-MM-YY format
  // This function takes a date string as input and returns it in the format DD-MM-YY
  function convertToDDMMYY(dateStr) {
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
  }




  // if clicked on image in nft card navigate to go to details page 
  function Gotodetails(productid) {
    navigate(`/project-details/${productid}`)


  }

  // addto cart apii ********************************************************************


// if clicked on go to details naviagte to go to details by closing search
const handleGoToDetails = () => {
  if (onClose) onClose(); // ✅ close the search popup
  navigate(`/project-details/${book?.product_id}`); // ✅ navigate to details
};


  const [hovernft, setHoverdNft] = useState(false);
  const data = {
    NFTCards: (book?.gold_cards || 0) + (book?.silver_cards || 0) + (book?.pro_cards || 0),
    endDate: new Date(book?.end_date).toLocaleDateString(),
    clockEndDate: book?.end_date,
    productName: book?.p_name,
    posterImageUrl: book?.poster_image,
    studio: book?.production_house,
    royaltyShares: book?.royalty_shares
  }

  const [timeLeft, setTimeLeft] = useState({ hours: null, minutes: null, seconds: null })
  const [showClock, setShowClock] = useState(false)

  const checkDayDiff = (endTime) => {
    const currTime = new Date().getTime()

    const diff = endTime - currTime
    // CHECKING FOR DIFF =1D
    if (diff < 24 * 60 * 60 * 1000 && diff > 0) {
      setShowClock(true)
    }
  }
  useEffect(() => {
    const endTime = new Date(book).getTime()
    checkDayDiff(endTime);

    const checkInterval = setInterval(checkDayDiff, 60 * 1000)
    return () => clearInterval(checkInterval)
  }, [book?.end_date])

  useEffect(() => {
    if (!showClock) return;

    const interval = setInterval(() => {
      const curr = new Date().getTime();
      const diff = new Date(data.clockEndDate).getTime() - curr

      if (diff <= 0) {
        setTimeLeft({
          hours: 0, minutes: 0, seconds: 0
        })
        clearInterval(interval)
        return;
      }
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds })
    }, 1000)
    return () => clearInterval(interval);
  }, [showClock, data.clockEndDate])
  return (
    <div
      style={{ background: bgcolor }}
      className={clsx(
        `border-2 sm:border-4 z-10  bg-black text-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative`,
        width, // ✅ Dynamic width classes
        height // ✅ Dynamic height classes
      )}
      onMouseEnter={() => setHoverdNft(true)} // ✅ Fix: Set hover state
      onMouseLeave={() => setHoverdNft(false)} // ✅ Fix: Reset hover state
    >
      {!hovernft ? (
        <>
          {/* NFT Header */}
          <div className="flex flex-row justify-between items-center bg-black text-white px-3 sm:px-4 py-2">
            <p className="text-[10px]  md:text-lg font-semibold font-mono">
              {book.product_name}
            </p>
            {/* <span className="text-gray-400 text-xs sm:text-sm font-mono">
              {book.product_id}
            </span> */}
          </div>

          {/* NFT Image */}
          <div className="w-full lg:h-[320px] sm:h-[220px] md:h-[250px] h-auto overflow-hidden shadow-lg p-2 border-2 border-black">
            <img
              src={data.posterImageUrl}
              alt="NFT"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* NFT Info */}
          <div className="p-2 sm:p-4 flex flex-col justify-between space-y-2">
            {/* Pricing & Buyers Info */}
            <div className="flex flex-row justify-between items-center">
              <span className="text-sm sm:text-lg font-bold text-white opacity-85 bg-[#0C8281] px-2 sm:px-3 rounded-md">
                {book?.total_budget || ""}
              </span>
              <div className="flex flex-col items-end ">
                <span className="text-sm sm:text-xl font-semibold">{book.available_pro_card}</span>
                <span className="text-xs">Remaining NFT</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col justify-between mt-2 transition-all duration-300 px-2 font-Poppins text-white">
            {/* NFT Image (on hover) */}

            <div
              onClick={() => Gotodetails(book?.product_id)}
              className="w-full lg:h-[180px] h-[180px] md:h-[180px] overflow-hidden shadow-lg border-2 border-black"
            >
              <img
                src={book.poster_image}
                alt="NFT"
                className="w-full h-full object-cover rounded-md"
              />
            </div>


            {/* Studio & Time Info */}
            <div className="flex flex-row justify-between items-center mt-2 flex-wrap">
              <div className="flex flex-row gap-2 items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-300"></div>
                <span className="text-xs lg:text-lg font-semibold">
                  {data.studio}
                </span>
              </div>
              {
                showClock ? (<div className="flex flex-col text-right">
                  <span className="text-xs lg:text-base  font-semibold">
                    {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
                  </span>
                  <span className="text-xs">Closing</span>
                </div>) : ""
              }
            </div>

            {/* Royalty Info */}
            <div className="flex flex-col justify-center items-center text-center mx-auto font-medium text-xs lg:text-lg md:text-sm  mt-2 lg:mt-3 ">
              <span> {data.royaltyShares} Royalty Share + Reward Coins</span>
            </div>

            {/* Price & NFT Count */}
            <div className="flex flex-row justify-between items-center mt-2 flex-wrap">
              <div className="flex flex-col">
                <span className="text-xs lg:text-md">{convertToDDMMYY(book.end_date)}</span>
                <span className="text-[10px] lg:text-sm">Valid Till</span>
              </div>

              <div className="text-xs lg:text-sm font-semibold text-white opacity-85 bg-[#0C8281] h-[26px] lg:h-[30px] px-2 py-1 w-fit rounded-sm">
                {book?.funds_goal !== "" ? book.funds_goal : "4000"}

              </div>

              <div className="flex flex-col text-right">
                <p className="text-xs sm:text-md">{book.available_pro_card}</p>
                <span className="lg:text-xs  text-[10px]">NFT's Remaining</span>
              </div>
            </div>
          </div>

          {/* Buy Now & Add to Cart Buttons */}
          <div className="flex flex-row gap-5 justify-center items-center mt-2 p-1 lg:bg-gray-400 md:bg-gray-400 w-full h-full flex-wrap">
            <div className="w-1/2 flex justify-center">
              <button
                onClick={handleGoToDetails}
                className="bg-yellow-400 text-black font-semibold rounded-sm py-2 px-1 lg:w-[120px] text-xs sm:text-sm md:text-sm hover:bg-yellow-500 transition"
              >
                Go to Details
              </button>
            </div>


            {/* <button onClick={ProductAddtocart} className="bg-yellow-400 text-black font-semibold rounded-sm py-2 px-1 lg:w-[120px] text-xs sm:text-sm md:text-sm hover:bg-yellow-500 transition">
              ADD TO CART
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default NftCards;
