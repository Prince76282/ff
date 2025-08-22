import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import profile from "../../../assets/Shreya_assets/profile.png";
import { useLocation } from 'react-router-dom';
import AddReview from "@/persons/harsh/component/AddReview";

const reviews = [
  {
    id: 1,
    name: "Kou Tanaka",
    avatar: profile, // Replace with actual user image
    rating: "⭐⭐⭐⭐☆",
    invested: "₹2500",
    daysAgo: "2 Days ago",
    review:
      "Killer Peter has incredible production value and the trailer looks promising. The cinematography and action sequences are top-notch. Definitely a must-watch!",
  },
  {
    id: 2,
    name: "Kou Tanaka",
    avatar: profile, // Replace with actual user image
    rating: "⭐⭐⭐⭐☆",
    invested: "₹2500",
    daysAgo: "2 Days ago",
    review:
      "Killer Peter has incredible production value and the trailer looks promising. The cinematography and action sequences are top-notch. Definitely a must-watch!",
  },
  {
    id: 3,
    name: "Kou Tanaka",
    avatar: profile, // Replace with actual user image
    rating: "⭐⭐⭐⭐☆",
    invested: "₹2500",
    daysAgo: "2 Days ago",
    review:
      "Killer Peter has incredible production value and the trailer looks promising. The cinematography and action sequences are top-notch. Definitely a must-watch!",
  },
];


function Review() {
  const [review, setReview] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recent");

  const options = ["Recent", "Oldest", "Most Liked"];

  return (
    <div
      className=" rounded-[15px] p-4 sm:p-6 bg-white mt-[10px] border border-gray-200 shadow-lg"
      style={{

        height: "auto",
      }}
    >
      {/* Header Section - Always Column */}
      <div className="flex flex-col sm:mr-0 md:mr-0 lg:mr-2 font-Poppins items-start mb-4 space-y-3">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Reviews (132)</h2>

          {/* Show button only if not on /Project-detail */}
          {currentPath !== '/Project-details' && (
            <button
              className="bg-[#0C8281] cursor-pointer text-white px-4 py-2 rounded hover:bg-cyan-950 text-sm"
              onClick={() => setReview(true)}
            >
              Add Review
            </button>

          )}
        </div>


       {review && (
      <div className="fixed inset-0 flex justify-center items-center  backdrop-blur-xs bg-opacity-30 z-50">
        <AddReview   onClose={() => setReview(false)} /> 
      </div>
    )}



        {/* Sort Dropdown */}
        <div className=" w-full  md:w-auto lg:w-auto">
          <button
            className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-2 border border-[#9DD4C6] rounded-lg text-gray-900 font-Poppins text-sm sm:text-base md:text-lg w-full md:w-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Sorted by: {selectedOption}</span>
            <div className="w-6 h-6 ml-1 sm:w-7 sm:h-7 flex items-center justify-center bg-[#0C8281] rounded-full text-white">
              <ChevronDown size={16} />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border border-[#ECEFF0] rounded-md shadow-lg z-10">
              {options.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base md:text-lg"
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Cards */}
      <div className="space-y-2">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

// ✅ ReviewCard Component with PropTypes Validation
function ReviewCard({ review }) {
  return (
    <div className="border rounded-lg w-full sm:mr-0 md:mr-0 lg:mr-2 p-2 sm:p-3 my-2 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={review.avatar || profile}
          alt="User Avatar"
          className="w-12 sm:w-14 h-12 sm:h-14 rounded-full mr-3"
        />
        <div>
          <h3 className="font-Poppins text-sm sm:text-lg">
            {review.name || "Anonymous"}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            {review.rating || "⭐⭐⭐⭐☆"} | Invested: {review.invested || "₹0"} | {review.daysAgo || "Unknown"}
          </p>
        </div>
      </div>

      <p className="mt-1 text-gray-800 text-sm sm:text-base">
        {review.review}
      </p>
    </div>
  );
}



// ✅ Adding PropTypes for Validation
ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    rating: PropTypes.string.isRequired,
    invested: PropTypes.string.isRequired,
    daysAgo: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
