import React, { useState, useEffect } from "react";
import cast from "../../../assets/ayushi_assets/cast.svg"; // Update path as needed

const Story = ({ overviewDetails }) => {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    if (overviewDetails?.genres) {
      try {
        const parsedOnce = JSON.parse(overviewDetails.genres); // First parse
        const genreList = JSON.parse(parsedOnce); // Second parse
        setGenreData(genreList);
      } catch (error) {
        console.error("Failed to parse genres:", error);
        setGenreData([]);
      }
    }
  }, [overviewDetails]);

  return (
    <div className="max-w-2xl">
      {/* Synopsis */}
      <h2 className="text-xl sm:text-2xl font-semibold text-[#0C8281]">SYNOPSIS</h2>
      <p
        className="text-base sm:text-lg text-gray-800 mt-2 font-medium pr-0 sm:pr-8"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {
          overviewDetails?.synopsis ||
          `After devoting his life to the crime organization, Glory Club, Peter
          retires his status as a legendary killer and spends his remaining days
          running a quiet used bookstore. But after being ambushed and nearly
          killed one day by the very organization he dedicated his life to, Peter
          finds his body magically reverted back to its teenage years. Now that
          Peter was back to his peak physique, he sets out to settle the score
          with Glory Club.`
        }
      </p>

      {/* Genres */}
      <div className="flex flex-wrap gap-3 mt-4">
        {genreData.map((genre, index) => (
          <button
            key={index}
            className="relative px-4 py-2 text-sm sm:text-base font-medium text-[#37474F] 
              bg-white rounded-full border-2 border-[#9DD4C6] transition-all"
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Director Section */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0C8281]">
          DIRECTED AND WRITTEN BY
        </h2>
        <div className="flex flex-wrap gap-6 sm:gap-8 mt-4">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <img
                src={cast}
                alt="Director"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-base sm:text-lg font-medium text-black">
                  Real Name
                </p>
                <p className="text-sm text-gray-600 font-semibold">Director</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cast Section */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-xl font-semibold text-[#0C8281]">
          MAIN CAST
        </h2>
        <div className="flex flex-wrap gap-6 sm:gap-8 mt-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <img
                src={cast}
                alt="Cast Member"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-base sm:text-lg font-medium text-black">
                  Real Name
                </p>
                <p className="text-sm text-gray-600 font-semibold">Actor</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
