import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import Nftcartpage from "./newPage";
import CardPortfolio, { cardData } from "./cardportfolio";
import img1 from "../../../assets/prince/bahubali_poster.jpg";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = [
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaXTwitter />, link: "#" },
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

const Page = () => {
  const portfolioRef = useRef(null);
  const currentProjectsRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth, scrollWidth } = ref.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft =
        direction === "left"
          ? Math.max(0, scrollLeft - scrollAmount)
          : Math.min(scrollWidth, scrollLeft + scrollAmount);

      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 py-4 sm:px-4 md:px-6 bg-gray-50 min-h-screen rounded-xl shadow-md overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 px-2 sm:px-0">
        <h1 className="text-xl sm:text-2xl font-bold">XYZ Studio</h1>
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
              When We Think About Our Dream Squad, We Always Want It To Be
              Ideal.
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              Red Chillies has consistently pushed boundaries across the
              spectrum, creating and producing entertaining content and engaging
              audiences worldwide through a vast variety of different platforms.
              Our mission is and will always be to deliver world-class,
              ground-breaking stories through quality, innovation, and detail,
              that touch lives across the globe
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <span>
            <p className="text-xs sm:text-sm text-gray-500">
              On screen since 2020
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

      <div>
        <h2 className="text-base sm:text-lg font-bold mb-3">
          Portfolio Section
        </h2>
        <div className="relative w-full">
          <button
            onClick={() => scroll(portfolioRef, "left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-1.5 sm:p-2 shadow hover:bg-gray-200 transition-colors"
          >
            &#8592;
          </button>
          <div
            ref={portfolioRef}
            className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-2 sm:px-8 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            <AnimatePresence>
              {cardData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                >
                  <CardPortfolio data={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button
            onClick={() => scroll(portfolioRef, "right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-1.5 sm:p-2 shadow hover:bg-gray-200 transition-colors"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="mt-6 sm:mt-10">
        <h2 className="text-base sm:text-lg font-bold mb-3">
          Current Projects
        </h2>
        <div className="relative w-full">
          <button
            onClick={() => scroll(currentProjectsRef, "left")}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-1.5 sm:p-2 shadow hover:bg-gray-200 transition-colors"
          >
            &#8592;
          </button>
          <div
            ref={currentProjectsRef}
            className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-2 sm:px-8 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            <AnimatePresence>
              {[...Array(10)].map((_, index) => (
                <motion.div
                  key={index}
                  className="min-w-[220px] sm:min-w-[260px] max-w-xs transition-all bg-white rounded-lg shadow-md snap-start"
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
          <button
            onClick={() => scroll(currentProjectsRef, "right")}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border rounded-full p-1.5 sm:p-2 shadow hover:bg-gray-200 transition-colors"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
