import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Sidebar, { steps } from "./sidebaron";
import google from "../../../assets/Shreya_assets/google 1.png";
import news from "../../../assets/Shreya_assets/news 1.png";
import social from "../../../assets/Shreya_assets/social-media 1.png";
import talking from "../../../assets/Shreya_assets/talking 1.png";

const options = [
  {
    label: "Social Media",
    description: "Facebook, Twitter, Instagram, Telegram",
    icon: <img src={social} className="w-6 h-6" />,
    value: "social_media",
  },
  {
    label: "Search Engine",
    description: "Google, Bing, Yahoo",
    icon: <img src={google} className="w-6 h-6" />,
    value: "search_engine",
  },
  {
    label: "Friend/Family",
    description: "Word of Mouth",
    icon: <img src={talking} className="w-6 h-6" />,
    value: "friend_family",
  },
  {
    label: "News/Media",
    description: "Articles, Press",
    icon: <img src={news} className="w-6 h-6" />,
    value: "news_media",
  },
];

const HowYouFoundUs = () => {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.path === window.location.pathname);
    if (currentIndex < steps.length - 1) {
      window.location.href = steps[currentIndex + 1].path;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="ml-auto flex-1 p-4 md:p-2">
        <div className="mb-3 rounded-xl bg-white p-3 shadow-sm font-semibold text-center">
          <span className="block sm:inline text-xl">
            Welcome to <span className="text-emerald-600">FilmyFunds</span>!
          </span>
        </div>

        <h2 className="mb-2 text-xl font-semibold">How did you find us?</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Help us understand how you discovered Filmy Funds
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {options.map((opt) => (
            <Card
              key={opt.value}
              onClick={() => setSelected(opt.value)}
              className={`cursor-pointer transition shadow-md hover:shadow-neutral-600 border-2 bg-[#ECEFF9] ${
                selected === opt.value ? "border-emerald-500" : "border-transparent"
              }`}
            >
              <CardContent className="flex flex-col items-center justify-center p-3 text-center space-y-1">
                <div className="bg-gray-100 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                  {opt.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold">{opt.label}</h3>
                <p className="text-xs text-gray-500">{opt.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="flex items-center rounded-lg bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700"
            onClick={handleNext}
          >
            Next
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowYouFoundUs;
