import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const AddReview = ({ onClose }) => {
  const userImage = useSelector((state) => state.profile.userDetails?.image);
  const user_details = useSelector((state) => state.profile.userDetails);
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState("");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log("Rating:", newRating);
  };

  const handleSubmit = () => {
    const wordCount = reviewText.trim().split(/\s+/).length;

    if (wordCount > 300) {
      setError("Review must not exceed 300 words.");
      return;
    }

    setError("");
    // Proceed to submit review (e.g., dispatch action or API call)
    console.log("Submitted review:", { rating, reviewText });
  };

  return (
    <div
      className="
            relative
        lg:w-[600px] w-full 
        mx-auto p-6
        bg-white bg-opacity-30 backdrop-blur-md
        rounded-xl shadow-lg
        flex flex-col items-center gap-6 font-poppins
        sm:p-4
      "
    >
      <div className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
        <IoMdCloseCircleOutline className="text-5xl text-teal-600" />
      </div>

      <p className="text-2xl font-semibold text-center">Add Your Review</p>

      <div className="flex flex-col items-center gap-5">
        <img
          src={userImage || "/default-avatar.png"}
          alt="User Avatar"
          loading="lazy"
          className="w-36 h-36 rounded-full object-cover shadow-md border-2 border-gray-300"
        />
        <span className="font-semibold text-xl">
          {user_details?.name || "John Doe"}
        </span>
      </div>

      <div className="w-full h-[2px] bg-black opacity-35"></div>

      <span className="font-semibold">Give Rating</span>

      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        onChange={ratingChanged}
        className="mb-4 text-xl"
      />

      <div className="w-full">
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        <p className="text-right text-sm text-gray-600 mt-1">
          {
            reviewText
              .trim()
              .split(/\s+/)
              .filter((word) => word).length
          }
          /300 words
        </p>
      </div>

      <div className="flex justify-between w-full">
        <button
          className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-teal-600 transition-colors duration-300"
          onClick={onClose}
        >
          NOT NOW
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-teal-600 text-black rounded-lg hover:bg-gray-400 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default AddReview;
