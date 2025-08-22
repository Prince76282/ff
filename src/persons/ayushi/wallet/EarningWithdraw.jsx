import React, { useRef } from "react";
import movie from "../../../assets/ayushi_assets/movie.png";

const transactions = [
  {
    title: "Killer Peter",
    date: "25 Mar 2025",
    amount: "₹450.00",
    status: "Withdrawn",
  },
  {
    title: "Omniscient Reader’s Viewpoint",
    date: "15 Mar 2025",
    amount: "₹250.00",
    status: "Withdrawn",
  },
  {
    title: "Killer Peter",
    date: "25 Feb 2025",
    amount: "₹400.00",
    status: "Withdrawn",
  },
  {
    title: "Killer Peter",
    date: "25 Jan 2025",
    amount: "₹350.00",
    status: "Pending",
  },
  {
    title: "Lout of Count’s Family",
    date: "17 Jan 2025",
    amount: "₹100.00",
    status: "Withdrawn",
  },
  {
    title: "Lout of Count’s Family",
    date: "17 Jan 2025",
    amount: "₹100.00",
    status: "Withdrawn",
  },
];

const EarningWithdrawalCard = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-full sm:w-[650px] md:w-[630px] bg-white p-4 rounded-xl shadow-lg relative">
      <h3 className="text-lg font-semibold mb-2">
        Earning & Withdrawal Transactions
      </h3>
      <div
        ref={scrollRef}
        className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar"
      >
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-start gap-3">
              <img
                src={movie}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm truncate max-w-[180px]">
                  {tx.title}
                </p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="font-semibold">{tx.amount}</p>
              <span
                className={`w-[100px] justify-center text-white text-sm px-2 py-1 rounded-[4px] font-medium ${
                  tx.status === "Withdrawn" ? "bg-[#0C8281]" : "bg-[#E63946]"
                }`}
              >
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningWithdrawalCard;
