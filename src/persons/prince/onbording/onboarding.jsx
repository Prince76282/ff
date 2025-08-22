import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import google from "../../../assets/prince/google 1.png";
import news from "../../../assets/prince/news 1.png";
import social from "../../../assets/prince/social-media 1.png";
import talking from "../../../assets/prince/talking 1.png";

const options = [
  {
    label: "Social Media",
    description: "Facebook, Twitter, Instagram, Telegram",
    icon: <img src={social} className=" text-pink-600" />,
    value: "social_media",
  },
  {
    label: "Search Engine",
    description: "Google, Bing, Yahoo",
    icon: <img src={google} className=" text-blue-600" />,
    value: "search_engine",
  },
  {
    label: "Friend/Family",
    description: "Word of Mouth",
    icon: <img src={talking} className=" text-green-600" />,
    value: "friend_family",
  },
  {
    label: "News/Media",
    description: "Articles, Press",
    icon: <img src={news} className=" text-indigo-600" />,
    value: "news_media",
  },
];

const HowYouFoundUs = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="  px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl sm:text-2xl font-semibold mb-2">
        How did you find us?
      </h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        Help us understand how you discovered Filmy Funds
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {options.map((opt) => (
          <Card
            key={opt.value}
            onClick={() => setSelected(opt.value)}
            className={`cursor-pointer transition shadow-md hover:shadow-lg border-2 ${
              selected === opt.value
                ? "border-emerald-500"
                : "border-transparent"
            }`}
          >
            <CardContent className="flex flex-col items-center justify-center p-4 text-center space-y-2">
              <div className="bg-gray-100 p-3 rounded-full">{opt.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold">
                {opt.label}
              </h3>
              <p className="text-sm text-gray-500">{opt.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Button
          disabled={!selected}
          className={`rounded-3xl px-6 py-2 font-medium transition ${
            selected
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => console.log("Selected:", selected)}
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

export default HowYouFoundUs;
