import React, { useRef } from "react";
import movie from "../../../assets/ayushi_assets/movie.png";

const transactions = [
  { title: "Killer Peter", date: "25 Mar 2025", amount: "₹450" },
  {
    title: "Omniscient Reader's Viewpoint",
    date: "15 Mar 2025",
    amount: "₹250",
  },
  { title: "Killer Peter", date: "25 Feb 2025", amount: "₹400" },
  { title: "Killer Peter", date: "25 Jan 2025", amount: "₹350" },
  { title: "Lout of Count’s Family", date: "17 Jan 2025", amount: "₹100" },
  { title: "Lout of Count’s Family", date: "17 Jan 2025", amount: "₹100" },
];

const TransactionHistoryCard = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-full sm:w-[650px] md:w-[630px] bg-white p-4 rounded-xl shadow-lg relative">
      <h3 className="text-lg font-semibold mb-2">Investment Transactions</h3>
      <div
        ref={scrollRef}
        className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar"
      >
        {transactions.map((tx, index) => (
          <div key={index}>
            <div className="flex justify-between items-start gap-3 mb-3">
              <div className="flex gap-3 items-center">
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
              <p className="font-semibold text-sm">{tx.amount}</p>
            </div>
            <hr className="border-t border-gray-200 mb-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistoryCard;
