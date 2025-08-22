import React, { use, useEffect, useState } from "react";
import useApiHandler from "@/hooks/useApiCall";
import { showErrorToast, showSuccessToast } from "@/lib/toastUtils";

const Overview = ({overviewDetails}) => {

  // amount formatter
  const formatCurrency = (amount) => {
  if (!amount) return "₹ 0";

  // Remove any existing ₹ symbol or commas
  const num = Number(String(amount).replace(/[^0-9.-]+/g,""));
  return "₹ " + num.toLocaleString("en-IN");
};
  
// date formatter
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate(); // No leading zero
  const month = date.getMonth() + 1; // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

  return (
    <div className="w-full m-5">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
        {[
          { title: "PROJECT TYPE", value: overviewDetails.project_type || "Movie" },
          { title: "TIER", value: "Gold" },
          { title: "REGION", value: overviewDetails?.region || "India" },
          { title: "PROJECT BUDGET", value:formatCurrency(overviewDetails?.funds_goal) || "₹ 10,00,000" },
            
          { title: "INVESTMENT DATE", value: formatDate(overviewDetails?.enrolling_date)|| "26 March, 2023" },
          { title: "LANGUAGE", value: overviewDetails?.language|| "Korean" },
          { title: "INVESTMENT AMOUNT", value: formatCurrency(overviewDetails?.funds_goal) || "₹ 250" },
          { title: "UPCOMING PAYOUT DATE", value: formatDate(overviewDetails?.funds_goal_deadline) || "28 March, 2025" },
          { title: "RELEASED ON", value: formatDate(overviewDetails?.release_date) || "28 March, 2024" },
          { title: "RETURN TILL NOW", value: formatCurrency(overviewDetails?.total_budget) ||  "₹ 2,500" },
          { title: "VALID TILL", value: formatDate(overviewDetails?.end_date)|| "28 March, 2025" },
          { title: "DURATION", value: (overviewDetails?.duration +"min")|| "1 Hr 25 Min" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col">
            <strong className="text-[#0C8281] text-sm sm:text-base font-semibold">
              {item.title}
            </strong>
            <span className="text-[#263238] text-base sm:text-lg font-medium mt-2 sm:mt-4">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Section: Ratings */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-10 md:gap-15 bg-white rounded-lg mt-10 px-4 sm:px-0">
        {[
          { title: "Score", value: "4.5/5" },
          { title: "RANKED", value: "#10" },
          { title: "POPULARITY", value: "#5" },
          { title: "RATING", value: "PG-13" },
        ].map((item, index) => (
          <p
            key={index}
            className="text-base sm:text-lg md:text-xl font-medium text-gray-800"
          >
            <strong className="text-[#0C8281]">{item.title}:</strong>{" "}
            {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Overview;