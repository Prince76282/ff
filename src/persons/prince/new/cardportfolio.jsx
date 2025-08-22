// CardPortfolio.js
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/prince/bahubali_poster.jpg"

export const cardData = [
  {
    id: 1,
    title: "Cale Henituse",
    artist: "Singer",
    year: 2025,
    image:
      "",
    role: "Executive Producer",
    platform: "Netflix, Zee-5, etc",
    trailer: "/trailer/cale-henituse", // internal route
  },
  {
    id: 2,
    title: "Project Two",
    artist: "Singer",
    year: 2024,
    image:
      "",
    role: "Director",
    platform: "Amazon Prime",
    trailer: "/trailer/project-two", // internal route
  },
  {
    id: 1,
    title: "Cale Henituse",
    artist: "Singer",
    year: 2025,
    image:
      "",
    role: "Executive Producer",
    platform: "Netflix, Zee-5, etc",
    trailer: "/trailer/cale-henituse", // internal route
  },
  {
    id: 2,
    title: "Project Two",
    artist: "Singer",
    year: 2024,
    image:
      "",
    role: "Director",
    platform: "Amazon Prime",
    trailer: "/trailer/project-two", // internal route
  },
];

const CardPortfolio = ({ data }) => {
  return (
    <div className="w-70 bg-white border-2 rounded-lg shadow-md p-4 flex flex-col gap-2 cursor-pointer hover:shadow-lg transition-shadow">
      <span className="flex justify-between">
        <div className="text-md font-bold text-center">
          {data.title} |{" "}
          <span className="text-gray-600 text-xs">{data.artist}</span>
        </div>
        <span className="text-md">{data.year}</span>
      </span>
      <img
        src={img1}
        alt={data.title}
        className="rounded-md object-cover h-36 w-full"
      />
      <span className="text-sm text-black flex gap-2">
        Role : <p className="text-sm text-gray-600"> {data.role}</p>
      </span>
      <span className="text-sm text-black flex ">
        Streaming Platform :{" "}
        <p className="text-sm text-gray-600"> {data.platform}</p>
      </span>

      <span className="text-black text-sm flex gap-2">
        Link/Trailer :
        <Link className="text-blue-500 underline text-sm">{data.trailer}</Link>
      </span>
    </div>
  );
};

export default CardPortfolio;
