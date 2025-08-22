import React from "react";
import Character from "../../assets/harsh_assets/checkdummy.png";
import arrow from "../../assets/ayushi_assets/arr.svg";
import UpcomingPayouts from "./wallet/UpcomingPayouts";
import TransactionHistoryCard from "./wallet/TransactionHistory";
import EarningWithdrawalCard from "./wallet/EarningWithdraw";

const WalletDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 flex-wrap w-full px-4 py-6">
      <div className="flex flex-col gap-6 w-full lg:w-3/5 ">
        <div className="flex flex-col lg:flex-row gap-6 w-full ">
          <div className="w-full ">
            <div className="bg-white shadow-lg rounded-xl px-4 md:px-6 py-4 md:py-6 w-2xl">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Wallet</h2>
              <div className="flex flex-col md:flex-row w-full border rounded-lg shadow-xl p-4 md:p-6">
                <div className="flex flex-col items-center justify-center md:w-1/3 mb-6 md:mb-0">
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-[#6FC4AD] to-[#FFC727] flex items-center justify-center">
                    <div className="relative w-36 h-36 rounded-full bg-white flex items-center justify-center">
                      <img
                        src={Character}
                        alt="User"
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-600 pt-2">
                    JaneDoe#456
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-between pl-0 md:pl-6">
                  <div className="flex flex-col sm:flex-row justify-between gap-6 mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Total Earnings</p>
                      <p className="text-xl font-bold pb-2">₹2,500.00</p>
                      <span className="flex items-center gap-2 text-green-600 text-sm bg-yellow-100 px-4 py-1 rounded-xl w-fit">
                        <img src={arrow} alt="arrow" className="w-6 h-6" />
                        +7.35%
                      </span>
                    </div>
                    <div className="hidden sm:block border-l border-gray-300 mx-2"></div>
                    <div>
                      <p className="text-gray-500 text-sm">Total Investments</p>
                      <p className="text-xl font-bold pb-2">₹1,500.00</p>
                      <span className="flex items-center gap-2 text-green-600 text-sm bg-[#9DD4C6] px-4 py-1 rounded-xl w-fit">
                        <img src={arrow} alt="arrow" className="w-6 h-6" />
                        +7.35%
                      </span>
                    </div>
                  </div>

                  <div className="bg-black text-white p-4 rounded-md w-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-medium">Pending Earning</p>
                        <p className="text-3xl font-bold pt-1">₹500.00</p>
                      </div>
                      <button className="bg-white text-black px-4 py-2 rounded-md font-medium mt-2 md:mt-0">
                        Withdraw
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <UpcomingPayouts />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-4/5">
            <TransactionHistoryCard />
          </div>
          <div className="w-full md:w-1/5">
            <EarningWithdrawalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
