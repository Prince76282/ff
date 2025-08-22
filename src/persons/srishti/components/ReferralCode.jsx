import { useState } from "react";
import { CiShare2 } from "react-icons/ci";

const ReferralCode = () => {
  //  State to store the referral code input
  const [referralCode, setReferralCode] = useState("dhdh-djdjf-assd-dhdh");

  return (
    <div className="bg-white p-4 shadow rounded-lg mt-4 w-full max-w-6xl mx-auto">
      {/* max-w-2xl centers and limits width on large screens, mx-auto centers the card */}

      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
        Share your referral code
      </h2>
      <p className="text-gray-500 text-sm md:text-base">
        Refer your friends & earn 100 coins for each successful signup!
      </p>

      {/* Responsive layout: flex on md and above, stack on small screens */}
      <div className="flex flex-col md:flex-row mt-4 gap-2">
        {/* Editable Input Field */}
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
        />

        {/* Copy Button */}
        <button
          className="bg-black text-white px-3 py-2 rounded w-full  md:w-auto"
          onClick={() => {
            navigator.clipboard.writeText(referralCode);
            alert("Referral code copied!");
          }}
        >
          Copy Link
        </button>

        {/* Share Button */}
        <button className="bg-[#0C8281] text-white px-3 py-2 rounded w-full md:w-auto font-bold flex items-center justify-center gap-2">
          <CiShare2 />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default ReferralCode;
