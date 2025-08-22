import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Nftcartpage from "./newPage";

import img1 from "../../../assets/prince/bahubali_poster.jpg";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const awards = [
  "Indian Telly Awards",
  "Screen Awards",
  "Septimius Awards",
  "Critics Choice Film Awards",
];

const previousProjects = ["Project A", "Project B", "Project C", "Project D"];

const socialIcons = [
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaXTwitter />, link: "#" },
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

// Simulated current projects (replace with real project data if needed)
const currentProjects = [...Array(3)];

const ProfilePageon = () => {
  const scrollRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      let newScrollLeft =
        direction === "left"
          ? Math.max(0, scrollLeft - scrollAmount)
          : Math.min(scrollWidth, scrollLeft + scrollAmount);

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const showButtons = !(isLargeScreen && currentProjects.length <= 3);

  return (
    <div className="max-w-6xl mx-auto px-3 py-4 sm:px-4 md:px-6 bg-gray-50 min-h-screen rounded-xl shadow-md overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 px-2 sm:px-0">
        <div className="text-xl md:text-2xl font-bold text-center flex items-center md:text-left">
          Cale Henituse{" "}
          <span className="text-gray-600 text-sm md:text-base block ml-2">
            | Singer • Music
          </span>
        </div>

        <div className="flex flex-wrap gap-4 text-lg sm:text-xl text-gray-700 justify-center">
          {socialIcons.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="transition-transform hover:scale-110"
            >
              <span className="w-8 h-8 flex items-center justify-center">
                {item.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-4 flex-col bg-white rounded-lg p-3 sm:p-4 shadow mb-6">
        <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
          <img
            src={img1}
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-gray-300"
          />
          <div className="flex-1 w-full">
            <h2 className="text-base sm:text-lg font-semibold text-teal-700 mb-1">
              When We Think About Our Dream Squad, We Always Want It To Be Ideal.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              Red Chillies has consistently pushed boundaries across the spectrum,
              creating and producing entertaining content and engaging audiences
              worldwide through a vast variety of different platforms. Our mission
              is and will always be to deliver world-class, ground-breaking stories
              through quality, innovation, and detail, that touch lives across the
              globe
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <span>
            <p className="text-xs sm:text-sm text-gray-500">
              Experience : 5 Years
            </p>
          </span>

          <span className="gap-4 flex">
            <Link
              to="/imdb"
              className="text-[#0C8281] font-semibold hover:underline"
            >
              IMDB
            </Link>
            <Link
              to="/portfolio"
              className="text-[#0C8281] font-semibold hover:underline"
            >
              Portfolio
            </Link>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 px-4 sm:px-6 lg:px-8">
        <div
          className="p-4 w-full border-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          style={{
            borderImage: "linear-gradient(to left, #FFE655, #9DD4C6) 1",
            borderStyle: "solid",
          }}
        >
          <h2 className="text-lg font-semibold border-b pb-2 mb-3">
            AWARDS AND ACHIEVEMENTS
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
            {awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </div>

        <div
          className="p-4 w-full border-3 rounded-lg shadow-md hover:shadow-lg transition-all"
          style={{
            borderImage: "linear-gradient(to left, #FFE655, #9DD4C6) 1",
            borderStyle: "solid",
          }}
        >
          <h2 className="text-lg font-semibold border-b pb-2 mb-3">
            PREVIOUS PROJECTS
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
            {previousProjects.map((project, i) => (
              <li key={i}>{project}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-lg md:text-xl font-bold mb-4">Current Projects</h2>
        <div className="relative w-full">
          {showButtons && (
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow hover:bg-gray-200 transition"
              aria-label="Scroll left"
            >
              &#8592;
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 pb-4 px-1 sm:px-6 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            <AnimatePresence>
              {currentProjects.map((_, index) => (
                <motion.div
                  key={index}
                  className="min-w-[220px] sm:min-w-[260px] max-w-xs bg-white rounded-lg shadow-md snap-start"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                >
                  <Nftcartpage />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {showButtons && (
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-2 shadow hover:bg-gray-200 transition"
              aria-label="Scroll right"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageon;
