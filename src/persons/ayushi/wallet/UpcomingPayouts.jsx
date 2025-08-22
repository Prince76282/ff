import React from "react";
import movie from "../../../assets/ayushi_assets/movie.png";

const payouts = [
  "Killer Peter",
  "Omniscient Reader's Viewpoint",
  "Killer Peter",
  "Killer Peter",
  "Lout of Count's Family",
  "Omniscient Reader's Viewpoint",
  "Killer Peter",
  "Lout of Count's Family",
  "Killer Peter",
  "Killer Peter",
];

const UpcomingPayouts = () => {
  return (
    <div className="w-full sm:w-[650px] md:w-[530px] bg-white p-4 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Upcoming Payouts</h3>
      <div className="max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
        {payouts.map((title, index) => (
          <div key={index}>
            <div className="flex items-start gap-3 mb-2">
              <img
                src={movie}
                alt="avatar"
                className="w-10 h-10 min-w-[40px] rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm truncate sm:max-w-[200px]">
                  {title}
                </p>
                <p className="text-xs text-gray-500">
                  Next Payout Scheduled for March 28, 2025
                </p>
              </div>
            </div>
            <hr className="border-gray-200 my-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPayouts;
