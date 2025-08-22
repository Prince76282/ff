import React, { useEffect, useMemo, useState } from "react";
import InvestmentCards from "./InvestmentCards";
import graph from "../../../assets/harsh_assets/Graph.png";
import graph2 from "../../../assets/harsh_assets/Graph(1).png";
import projectsImg from "../../../assets/harsh_assets/Rectangle 25003.png";
import coinImg from "../../../assets/harsh_assets/coin 1.png";
import { TfiLayoutSidebar2 } from "react-icons/tfi";
import { VscThreeBars } from "react-icons/vsc";
import NftCards from "../common/NftCards";
import ActiveInvestmentsTable from "../../shreya/component/Table"


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../common/Footer";
import useApiHandler from "@/hooks/useApiCall";
import { useLocation } from "react-router-dom";

const InvestmentData = [
  {
    id: "1",
    color: "#E6F4F1",
    text1: "Total Investment",
    amount: "₹1500",
    text2: "+10.30%",
    zigimg: graph,
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
    zigimg: projectsImg,
  },
  {
    id: "4",
    color: "#FFE655",
    text1: "Pending Earnings",
    amount: "500",
    text2: "WITHDRAW",
    zigimg: coinImg,
  },
];

const FansHome = () => {

 
  const [currentTab, setCurrentTab] = useState("tab1")

  const [color, setColor] = useState("#000000");
  const [recommendation,setRecommendation] = useState([])

  const apiCaller = useApiHandler()

  async function fetchRecommendation(){
    const url = '/product/recommendation'
    const res = await apiCaller(url, 'get')
    
    if (res.data?.status_code===200||res.data?.success)
    setRecommendation(res.data?.data)
  }

  const slides = useMemo(() => [...Array(4)], []);
  
  useEffect(()=>{
  fetchRecommendation()

  },[])
  return (
    <div className="font-Poppins w-full overflow-x-hidden flex flex-col lg:gap-7 md:gap-3 sm:gap-2 p-3">
      {/* Investment Cards Section */}
      <div className="  grid  grid-cols-2  gap-4 lg:flex lg:flex-row lg:justify-between w-full lg:pr-6 ">
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

      {/* Investment Overview Section */}
      <section className="w-[342px] md:w-[545px] lg:w-full sm:w-full lg:max-w-[1160px]  flex flex-col justify-center items-center mx-auto lg:h-[542px] overflow-hidden mt-auto  p-5 rounded-lg gap-4">
        {/* Header */}
        <div className="flex flex-row justify-between w-full">
          <p className="lg:text-xl md:text-lg text-sm font-semibold">Your Investment at a Glance</p>
          <div className="flex flex-row gap-2 items-center">
            <TfiLayoutSidebar2
              className={`text-4xl p-2 rounded-lg 
      ${currentTab === "tab1" ? "bg-[#0C8181] text-white" : "bg-white text-black border border-gray-300"}`}
              onClick={() => setCurrentTab("tab1")}
            />
            <VscThreeBars
              className={`text-4xl p-2 rounded-lg
      ${currentTab === "tab2" ? "bg-[#0C8181] text-white" : "bg-white text-black border border-gray-300"}`}
              onClick={() => setCurrentTab("tab2")}
            />
          </div>


        </div>
        {
          currentTab === "tab1" ? (
            <div className="flex flex-col lg:flex-row sm:w-full w-full h-full lg:gap-12 gap-3.5 justify-between   items-center">
              {/* Investment Tiers */}
              <div className="flex flex-row w-auto justify-center lg:flex-col gap-2 text-md">
                <button className={`p-2 w-[100px] sm:p-3  border border-black rounded-lg bg-[#FFFFFF]  cursor-pointer `}
                  style={{ background: color === "#000000" ? "#000000" : "#FFFFFF", color: color === "#000000" ? "#FFFFFF" : "#000000" }}


                  onClick={() => setColor("#000000")}  >PRO</button>
                <button className="p-2 w-[100px] sm:p-3   border border-black metallic-gold-bg rounded-lg cursor-pointer"
                  style={{ background: color === "linear-gradient(135deg, #a67c00, #bf9b30, #ffcc00, #bf9b30, #a67c00)" ? "linear-gradient(135deg, #a67c00, #bf9b30, #ffcc00, #bf9b30, #a67c00)" : "#FFFFFF" }}



                  onClick={() =>

                    setColor("linear-gradient(135deg, #a67c00, #bf9b30, #ffcc00, #bf9b30, #a67c00)")
                  }>GOLD</button>
                <button className="p-2 w-[100px] sm:p-3    border border-black bg-[#B2B2B2] rounded-lg cursor-pointer"
                  style={{ background: color === "linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)" ? "linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)" : "#FFFFFF" }}



                  onClick={() => setColor("linear-gradient(135deg, #6e6e6e, #c0c0c0, #e5e4e2, #f8f8f8, #c0c0c0, #6e6e6e)")}
                >DIAMOND</button>
              </div>

              {/* NFT Cards Swiper */}
              <div className=" w-full max-w-screen   justify-center  overflow-hidden gap-1  ">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={18}
                  slidesPerView={2}
                  navigation={true}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: true }}
                  speed={800}
                  loop={true} // Avoids infinite loop issues
                  observer={false} // Prevents unnecessary re-renders
                  resizeObserver={false} // Disables width-based re-renders
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { spaceBetween: 30, slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="custom-swiper  w-full  "
                >
                  {slides.map((_, index) => (
                    <SwiperSlide key={index}>
                      <NftCards
                        width="w-[300px] sm:w-[250px] md:w-[250px] lg:w-[297px]"
                        height="h-[350px] sm:h-[380px] md:h-[440px]"
                        bgcolor={color}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ) : (
            <div className="w-full h-auto ">
              <ActiveInvestmentsTable></ActiveInvestmentsTable>


            </div>



          )
        }

      </section>
      {/* recommended for you section */}
      <section className="w-[342px] md:w-[545px] lg:w-[1130px] sm:w-full flex flex-col justify-center mx-auto h-auto overflow-hidden mt-auto   p-5 rounded-lg gap-4">
        {/* Header */}
        <div className="flex flex-row justify-between w-full">
          <p className="lg:text-xl md:text-lg text-sm font-semibold">Recommendations for you</p>

        </div>


        {/* Investment Tiers */}


        {/* NFT Cards Swiper */}
        <div className=" w-full   lg:max-w-full justify-center  overflow-hidden gap-1 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={18}
            slidesPerView={2}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            speed={800}
            loop={true} // Avoids infinite loop issues
            observer={false} // Prevents unnecessary re-renders
            resizeObserver={false} // Disables width-based re-renders
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { spaceBetween: 30, slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="custom-swiper  w-full  "
          >
            {slides.map((_, index) => (
              <SwiperSlide key={index}>
                <NftCards
                  width="w-[300px] sm:w-[250px] md:w-[250px] lg:w-[297px]"
                  height="h-[350px] sm:h-[380px] md:h-[440px]"

                  bgcolor="#000000"
                

                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>


    </div>
  );
};

export default FansHome;
