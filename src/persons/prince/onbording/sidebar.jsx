

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/Shreya_assets/FilmyFundsGreen.svg";
import { useEffect, useRef, useState } from "react";

const steps = [
  { label: "Personal Details", path: "/onboarding/personal-details" },
  { label: "Email/Mobile Verification", path: "/onboarding/verify" },
  { label: "Investment Flow", path: "/onboarding/investment-flow" },
];

export const Sidebar = () => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClose = () => setIsOpen(false);

  const currentIndex = steps.findIndex(
    (step) => location.pathname === step.path
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const renderSteps = () => (
    <ul className="relative mt-6">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <li key={index} className="relative pl-4 mb-28 last:mb-0">
            {" "}
            {/* Increased from mb-20 to mb-28 */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-9 top-14 h-28 w-0.5 ${isCompleted
                    ? "bg-emerald-500"
                    : "border-l-2 border-dotted border-gray-300"
                  }`}
              />
            )}
            <Link
              to={step.path}
              className={`flex items-center p-2 rounded-md transition relative ${isActive
                  ? "font-semibold"
                  : isCompleted
                    ? "text-black font-semibold"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              onClick={onClose}
            >
              <div className="absolute left-0">
                {isCompleted ? (
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-green-700 bg-[#E9F5F2] rounded-full text-lg">
                    ✔
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 border-2 rounded-full flex items-center justify-center text-base font-semibold ${isActive
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-300 text-gray-600 border-green-700"
                      }`}
                  >
                    {index + 1}
                  </div>
                )}
              </div>
              <span className="ml-14 mt-1">{step.label}</span>{" "}
              {/* Adjusted spacing for bigger icon */}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden sm:block w-72 bg-white shadow p-4 m-1 border  rounded-lg h-fit">
        <div onClick={() => navigate("/")} className="mb-6 cursor-pointer">
          <img src={logo} alt="Filmy Funds Logo" className="h-12" />
        </div>

        <h2 className="text-xl font-semibold mb-2">Onboarding</h2>
        {renderSteps()}
      </aside>
      {/* Mobile sidebar */}
      <div
        ref={sidebarRef}
        className={`sm:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-lg border-r transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="overflow-y-auto p-4 pt-10">
          <h2 className="text-xl font-semibold mb-4">Onboarding</h2>
          {renderSteps()}
        </div>
      </div>

    </>
  );
};