import giftBox from "../../../assets/srishti/gift-box1.png";
import token from "../../../assets/srishti/token1.png";

const ReferralInfo = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
      {/* Sign-up Bonus Card */}
      <div
        className={`
          bg-white shadow-lg rounded-2xl flex items-start gap-4 
          p-4 sm:p-5 md:p-6 lg:p-8
          w-full 
        `}
      >
        {/* Image - make responsive with dynamic size */}
        <img
          src={giftBox}
          alt="gift"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />

        {/* Text Section - expand text container with padding */}
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Sign-up Bonus for Referrals
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-tight sm:leading-normal mt-1">
            Invite friends and help them start earning! Each new user who signs up through your
            referral link will receive{" "}
            <span className="font-semibold text-gray-800">100 coins</span> after a successful sign-up.
          </p>
        </div>
      </div>

      {/* Coin Redemption Rule Card */}
      <div
        className={`
          bg-white shadow-lg rounded-2xl flex items-start gap-4 
          p-4 sm:p-5 md:p-6 lg:p-8 
          w-full
        `}
      >
        <img
          src={token}
          alt="token"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Coin Redemption Rule
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-tight sm:leading-normal mt-1">
            Users can redeem a maximum of{" "}
            <span className="font-semibold text-gray-800">25%</span> of their total coins at a time.
            This ensures a balanced and sustainable rewards system that benefits everyone in the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralInfo;
