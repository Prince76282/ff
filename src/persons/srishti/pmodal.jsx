import { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import image1 from "../../assets/srishti/checkdummy.png";

const ReviewModal = ({ onClose }) => {
  // ✅ Combined state
  const [reviewData, setReviewData] = useState({
    rating: 0,
    hover: 0,
    review: "",
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl px-4 py-2 shadow-lg p-6 w-97 relative border-4">
        <div className="border px-8 py-4 border-black rounded-lg">
          {/* Close Button */}
          <button
            className="absolute top-1 right-4 bg-[#0C8281] text-3xl rounded-3xl p-1"
            onClick={onClose}
          >
            <IoCloseSharp className="text-white font-bold" />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-4 text-black">
            Add Your Review
          </h2>

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <img src={image1} alt="Jane Doe" className="rounded-full mb-2" />
            <p className="font-medium">Jane Doe</p>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Rating Section */}
          <p className="text-center font-medium mb-2">Give Rating</p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <FaStar
                  key={index}
                  size={24}
                  className={`cursor-pointer transition-colors duration-200 ${
                    currentRating <= (reviewData.hover || reviewData.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() =>
                    setReviewData((prev) => ({
                      ...prev,
                      rating: currentRating,
                    }))
                  }
                  onMouseEnter={() =>
                    setReviewData((prev) => ({
                      ...prev,
                      hover: currentRating,
                    }))
                  }
                  onMouseLeave={() =>
                    setReviewData((prev) => ({ ...prev, hover: 0 }))
                  }
                />
              );
            })}
          </div>

          {/* Review Textarea */}
          <textarea
            className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your review..."
            value={reviewData.review}
            onChange={(e) =>
              setReviewData((prev) => ({
                ...prev,
                review: e.target.value,
              }))
            }
            rows={4}
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-between mt-6 space-x-8">
            <button
              className="px-3 py-1 text-sm border border-[#0C8281] text-[#0C8281] hover:bg-gray-100"
              onClick={onClose}
            >
              NOT NOW
            </button>
            <button className="px-3 py-1 text-sm bg-[#0C8281] border border-black text-white hover:bg-[#0A6F6D]">
              ADD REVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ReviewModal;
