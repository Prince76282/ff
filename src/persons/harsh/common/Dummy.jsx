import React from "react";

const MovieInvestmentCard = () => {
  return (
    <div className="max-w-4xl mx-auto border border-gray-300 rounded-lg shadow-md p-4 bg-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Lout of Count’s Family</h2>
        <div className="text-sm text-right">
          <span className="block font-medium">XYZ Studios</span>
        </div>
      </div>

      {/* Top Content */}
      <div className="flex gap-4">
        {/* Poster */}
        <div className="relative w-48 flex-shrink-0">
          <img
            src="" // Replace with your image path if local
            alt="Movie Poster"
            className="rounded-lg w-full h-auto"
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            Funding
          </span>
          <div className="mt-2 text-yellow-400 text-sm">
            ★★★★☆<span className="text-gray-500 ml-1">4.5</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 flex-grow">
          <div><span className="font-medium">Project Type:</span> Movie</div>
          <div><span className="font-medium">Tier:</span> Gold</div>

          <div><span className="font-medium">Region:</span> South Korea</div>
          <div><span className="font-medium">Language:</span> Korean</div>

          <div><span className="font-medium">Project Budget:</span> ₹ 10,00,000 (Estimated)</div>
          <div><span className="font-medium">Investment Amount:</span> ₹ 250</div>

          <div><span className="font-medium">Investment Date:</span> 26 March, 2023</div>
          <div><span className="font-medium">Release Date:</span> 28 March, 2025 (Estimated)</div>

          <div><span className="font-medium">Returns:</span> 0.4 Royalty Shares</div>
          <div><span className="font-medium">Upcoming Payout Date:</span> N/A (After Streaming Starts)</div>

          <div><span className="font-medium">Valid Till:</span> 28 March, 2026</div>
          <div><span className="font-medium">Duration:</span> 1 Hr 25 Min</div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="flex justify-between items-center border-t border-gray-200 mt-4 pt-3 text-sm text-gray-700">
        <div><span className="font-medium">Score:</span> 4.5/5</div>
        <div><span className="font-medium">Ranked:</span> #10</div>
        <div><span className="font-medium">Popularity:</span> #5</div>
        <div><span className="font-medium">Rating:</span> PG-13</div>
      </div>
    </div>
  );
};

export default MovieInvestmentCard;
