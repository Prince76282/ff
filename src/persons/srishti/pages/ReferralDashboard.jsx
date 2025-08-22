import ReferralStats from "../components/ReferralStats";
import ReferralCode from "../components/ReferralCode";
import ReferralLevels from "../components/ReferralLevels";
import ReferralInfo from "../components/ReferralInfo";

const ReferralDashboard = () => {
  return (
    <div className="p-4 w-full max-w-7xl mx-auto">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 ">
        <ReferralStats />
      
      </div>
      <ReferralCode />
      
      <div className="grid grid-cols-1 gap-4">
      <ReferralLevels />
        <ReferralInfo />
      </div>
    </div>
  );
};

export default ReferralDashboard;
