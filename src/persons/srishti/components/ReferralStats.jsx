import { useState } from "react";

// Importing image assets
import youth from "../../../assets/srishti/youth1.png";
import salary from "../../../assets/srishti/salary1.png";

const ReferralRewards = () => {
  //  Using useState to manage combined state for referrals and coins
  const [data, setData] = useState({
    referrals: 1,
    coins: 300,
  });

  return (
    <div className="bg-white p-2 shadow-md rounded-2xl">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-gray-800">Referral & Rewards</h2>
      <p className="text-gray-500 text-sm">
        Invite friends, earn coins, unlock exclusive benefits!
      </p>

      {/* Main grid layout for two cards - responsive using Tailwind's grid and lg:grid-cols-2 */}
      <div className="grid gap-4 lg:grid-cols-2 p-2">
        {/* 🔷 Total Referrals Card */}
        <div className="bg-gray-100 rounded-xl shadow h-36 p-4">
          <div className="flex justify-around items-center p-2">
            <img
              src={youth}
              alt="referrals"
              className="w-20 h-20 object-contain"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Total Referral
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {data.referrals}/12
              </p>
              <p className="text-sm text-gray-500">On your way to Level 2!</p>
            </div>
          </div>

          {/* Referral range slider */}
          <div className="flex items-center m-2">
            <input
              type="range"
              min="1"
              max="12"
              value={data.referrals}
              onChange={(e) => {
                const newReferrals = Number(e.target.value);
                let baseCoins = newReferrals * 100;
                let bonusMultiplier = 0;
              
                if (newReferrals >= 15) {
                  bonusMultiplier = 0.30;
                } else if (newReferrals >= 8) {
                  bonusMultiplier = 0.20;
                } else if (newReferrals >= 3) {
                  bonusMultiplier = 0.10;
                }
              
                const bonus = baseCoins * bonusMultiplier;
                const updatedCoins = baseCoins + bonus;
              
                setData((prev) => ({
                  ...prev,
                  referrals: newReferrals,
                  coins: Math.floor(updatedCoins), // Round down to nearest integer
                }));
              }}
              
              className="w-full appearance-none h-2 rounded-lg"
              style={{
                background: `linear-gradient(to right, #0C8281 ${
                  (data.referrals / 12) * 100
                }%, #e5e7eb ${(data.referrals / 12) * 100}%)`,
              }}
            />
          </div>
        </div>

        {/* 🔷 Total Earned Card */}
        <div className="bg-gray-100 gap-1 rounded-xl shadow h-36 p-5">
          <div className="flex justify-between items-center p-2">
            <img
              src={salary}
              alt="salary"
              className="w-20 h-20 object-contain"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Total Earned
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {data.coins}/1950
              </p>
              <p className="text-sm text-gray-500">Coins earned so far</p>
            </div>
          </div>

          {/* Coins range slider (optional if it's only controlled by referrals) */}
          <div className="flex items-center m-2">
            <input
              type="range"
              min="1"
              max="1950"
              value={data.coins}
              disabled // prevent manual adjustment if it's auto-updated
              className="w-full appearance-none h-2 rounded-lg"
              style={{
                background: `linear-gradient(to right, #0C8281 ${
                  (data.coins / 1950) * 100
                }%, #e5e7eb ${(data.coins / 1950) * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralRewards;
