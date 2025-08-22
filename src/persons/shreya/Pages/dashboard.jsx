import React, { useMemo, useState } from "react";
import logo from "../../../assets/Shreya_assets/FilmyFundsGreen.svg";

import abcd from "../../../assets/Shreya_assets/item.png";
import graph1 from "../../../assets/Shreya_assets/Graph.png";
import graph2 from "../../../assets/Shreya_assets/Graph2.png";
import coin from "../../../assets/Shreya_assets/coin 1.png";
import stack from "../../../assets/Shreya_assets/stack.png";
import { FaFilter } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

ChartJS.register(ArcElement, Tooltip, Legend);

import { FiSearch, FiBell, FiChevronRight, FiTrendingUp } from "react-icons/fi";
import { IoHome, IoNotificationsSharp, IoLogOut } from "react-icons/io5";
import { BsBarChartLineFill } from "react-icons/bs";
import { MdExplore, MdWifiCalling3 } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import ActiveInvestmentsTable from "../component/Table"; // Import the new component
import InvestmentCards from "@/persons/harsh/component/InvestmentCards";

import Slider from "react-slick";
import NftCards from "@/persons/harsh/common/NftCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiLayoutSidebar2 } from "react-icons/tfi";
import { VscThreeBars } from "react-icons/vsc";
import Swiper from "swiper";
import { Navigation } from "lucide-react";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CardDrawer from "@/persons/harsh/common/CardDrawer";
import axios from "axios";
import { useEffect } from "react";
import useApiHandler from "@/hooks/useApiCall";

const InvestmentData = [
  {
    id: "1",
    color: "#E6F4F1",
    text1: "Total Investment",
    amount: "₹1500",
    text2: "+10.30%",
    zigimg: graph1,
  },
  {
    id: "2",
    color: "#FFF7CB",
    text1: "Total Earnings",
    amount: "₹2500",
    text2: "+7.35%",
    zigimg: graph2,
  },
  {
    id: "3",
    color: "#FFE655",
    text1: "Total Projects",
    amount: "10",
    text2: "EXPLORE",
    zigimg: stack,
  },
  {
    id: "4",
    color: "#FFE655",
    text1: "Pending Earnings",
    amount: "500",
    text2: "WITHDRAW",
    zigimg: coin,
  },
];

function Dashboard() {
  const [color, setColor] = useState("#000000");

  const [currentTab, setCurrentTab] = useState("tab1");

  const apiCaller = useApiHandler();
  const [myInvestment, setMyInvestment] = useState([]);

  const fetchInvestmentData = async () => {
    const url = `/user/order/my-investments`;
    const res = await apiCaller(url, "GET");

    console.log(res);
  };

  useEffect(() => {
    fetchInvestmentData();
  }, []);

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1 z-10 bg-[#0C8181] bg-opacity-50 p-3 rounded-full text-white text-xl hover:bg-opacity-75"
    >
      <IoIosArrowDropleftCircle />
    </button>
  );

  // Custom Next Arrow Component
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1 z-10 bg-[#0C8181] bg-opacity-50 p-3 rounded-full text-white text-xl hover:bg-opacity-75"
    >
      <IoIosArrowDroprightCircle />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true, // Ensures infinite looping
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enables continuous rotation
    autoplaySpeed: 2000, // Adjust speed (2s per slide)
    prevArrow: <PrevArrow />, // Custom arrow
    nextArrow: <NextArrow />, // Custom arrow
    responsive: [
      {
        breakpoint: 830, // Tablets and smaller
        settings: {
          slidesToShow: 2, // Show only one card
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600, // Small tablets and large phones
        settings: {
          slidesToShow: 1, // Keep one card
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: 1, // One card per slide
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  const slides = useMemo(() => [...Array(4)], []);
  const data = {
    labels: ["Pro", "Gold", "Diamond"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="font-Poppins w-full overflow-x-hidden flex flex-col lg:gap-7 md:gap-3 sm:gap-2 p-3">
      {/* Investment Cards Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center ">
        {InvestmentData.map((data) => (
          <InvestmentCards
            key={data.id}
            color={data.color}
            text1={data.text1}
            amount={data.amount}
            text2={data.text2}
            zigimg={data.zigimg}
          />
        ))}
      </div>

      {/* Active Investments Table */}
      <section className="w-[342px] md:w-[545px] lg:w-full sm:w-full lg:max-w-[1160px]  flex flex-col justify-center items-center mx-auto lg:h-[542px] overflow-hidden mt-auto  p-5 rounded-lg gap-4">
        {/* Header */}
        <div className="flex flex-row justify-between w-full">
          <p className="lg:text-xl md:text-lg text-sm font-semibold">
            Your Investment at a Glance
          </p>
          <div className="flex flex-row gap-2 items-center">
            <TfiLayoutSidebar2
              className={`text-4xl p-2 rounded-lg 
      ${
        currentTab === "tab1"
          ? "bg-[#0C8181] text-white"
          : "bg-white text-black border border-gray-300"
      }`}
              onClick={() => setCurrentTab("tab1")}
            />
            <VscThreeBars
              className={`text-4xl p-2 rounded-lg
      ${
        currentTab === "tab2"
          ? "bg-[#0C8181] text-white"
          : "bg-white text-black border border-gray-300"
      }`}
              onClick={() => setCurrentTab("tab2")}
            />
          </div>
        </div>
        {currentTab === "tab1" ? (
          <div className="flex flex-col lg:flex-row sm:w-full w-full h-full lg:gap-12 gap-3.5 justify-between   items-center">
            {/* Investment Tiers */}
            <div className="flex flex-row w-auto justify-center lg:flex-col gap-2 text-md">
              <button
                className={`p-2 w-[100px] sm:p-3  border border-black rounded-lg bg-[#FFFFFF]  cursor-pointer `}
                style={{
                  background: color === "#000000" ? "#000000" : "#FFFFFF",
                  color: color === "#000000" ? "#FFFFFF" : "#000000",
                }}
                onClick={() => setColor("#000000")}
              >
                PRO
              </button>
              <button
                className="p-2 w-[100px] sm:p-3    border border-black metallic-gold-bg rounded-lg cursor-pointer"
                style={{
                  background:
                    color ===
                    "linear-gradient(135deg, #a67c00, #bf9b30, #ffcc00, #bf9b30, #a67c00)"
                      ? "linear-gradient(135deg, #a67c00, #bf9b30, #ffcc00, #bf9b30, #a67c00)"
                      : "#FFFFFF",
                }}
                onClick={() =>
                  setColor(
                    "linear-gradient(135deg, #a67c00, #bf9b30, #ffcc00, #bf9b30, #a67c00)"
                  )
                }
              >
                GOLD
              </button>
              <button
                className="p-2 w-[100px] sm:p-3    border border-black bg-[#B2B2B2] rounded-lg cursor-pointer"
                style={{
                  background:
                    color ===
                    "linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)"
                      ? "linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)"
                      : "#FFFFFF",
                }}
                onClick={() =>
                  setColor(
                    "linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)"
                  )
                }
              >
                DIAMOND
              </button>
            </div>

            {/* NFT Cards Swiper */}
            <div className=" w-full max-w-screen   justify-center  overflow-hidden gap-1  ">
              <CardDrawer color={color}></CardDrawer>
            </div>
          </div>
        ) : (
          <div className="w-full h-auto  ">
            <ActiveInvestmentsTable></ActiveInvestmentsTable>
          </div>
        )}
      </section>

      {/* Performance Insights */}
      <div className="w-full lg:flex lg:flex-row flex-col justify-between">
        <div className="flex flex-col gap-2 p-2.5 lg:w-[430px]">
          <div className="flex flex-row justify-between p-2 ">
            <p>Performance Insights</p>
            {/* <div className=" p-2 bg-gray-200 rounded-lg">
              <FaFilter className="text-2xl " />
            </div> */}
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-1.5">
              <span className="text-[#455A64] text-ms">Overall ROI</span>
              <span>66.7%</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#455A64] text-sm">Investment</span>
              <span>₹1,500</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#455A64] text-sm">Current Value</span>
              <span>₹2,500</span>
            </div>
          </div>
          <div className="lg:w-[340px] lg:h-[310px] w-250px] h-[260px] justify-center mx-auto ">
            <Pie data={data} />
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="w-full max-w-[95vw] sm:max-w-[700px]   overflow-hidden  flex justify-center mx-auto p-4 sm:p-4">
          <Slider {...settings} className="w-full ">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex justify-center mx-auto">
                <NftCards
                  width="w-[90%] sm:w-[250px] md:w-[250px] lg:w-[297px]"
                  height="h-[350px] sm:h-[380px] md:h-[440px]"
                  bgcolor={"#000000"}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* add  */}
      </div>
    </div>
  );
}

export default Dashboard;
