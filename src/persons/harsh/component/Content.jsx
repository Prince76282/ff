import Nft from "../../../assets/dashboard/Pokemon.png";
import image2 from "../../../assets/dashboard/pikachu.png";
import dinosor from "../../../assets/dashboard/dinosor.png";

import studyemo from "../../../assets/dashboard/study.png";
import popcorn from "../../../assets/dashboard/popcorn.png";
import { useState } from "react";
// import Buttons from '@/Harsh\'s-common/Buttons'
import { MdArrowOutward } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { GiFilmSpool } from "react-icons/gi";
import group from "../../../assets/dashboard/group.png";
import rectangle from "../../../assets/dashboard/Rectangle 21.png";
import people from "../../../assets/dashboard/people-working.png";
import { Swiper, SwiperSlide } from "swiper/react";
import vectorcard from "../../../assets/dashboard/Vector 3.png";
import vectorcard2 from "../../../assets/dashboard/Vector 41.png";
import curve1 from "../../../assets/dashboard/leftcurve1.png";
import curve2 from "../../../assets/dashboard/leftcurve2.png";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Choosefilmyfunds from "../common/Choosefilmyfunds";
import nftimg from "../../../assets/dashboard/nf 1.png";
import cardimg1 from "../../../assets/dashboard/Copyright-cuate 1.png";
import cardimg2 from "../../../assets/dashboard/Performance overview-rafiki 1.png";
import cardimg3 from "../../../assets/dashboard/Verified-rafiki 1.png";
import sectionimg from "../../../assets/harsh_assets/section-bg.png";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import NftCards from "../common/NftCards";
import { Link, useLocation } from "react-router-dom";
import WorkingCards from "../common/WorkingCards";
import data from "../../../data/data.json";

import Faquestion from "../../ayushi/help/helpsupport";
import Footer from "../common/Footer";
import Navbar from "./Navbar";
import CardComponent from "./CardComponent";
import imagereel from "../../../assets/dashboard/Image Reel.png";
import rectangle2 from "../../../assets/dashboard/sectionimg.png";
import cuate from "../../../assets/dashboard/cuate.png";
import image12 from "../../../assets/dashboard/ci1.png";
import image13 from "../../../assets/dashboard/ci2.png";
import image14 from "../../../assets/dashboard/ci3.png";
import image15 from "../../../assets/dashboard/ci4.png";
import design from "../../../assets/harsh_assets/design.png";
import SafeCards from "../common/SafeCards";
import safesectionimg from "../../../assets/harsh_assets/Rectangle 88.png";
import Reviews from "./Reviews";
import AuthComponent from "./AuthComponent";
import { useSelector } from "react-redux";

const cardflowData = [
  {
    nums: "1",
    image: image12,
    text1: "Investor Protection",
    text2: "Fans explore upcoming film projects and choose where to invest."
  },
  {
    nums: "2",
    image: image13,
    text1: "Verified projects",
    text2: "Back a film, own a stake, and get exclusive content access"
  },
  {
    nums: "3",
    image: image14,
    text1: "Performance tracking",
    text2: "Filmmakers create, while fans stay updated on progress."
  },
  {
    nums: "4",
    image: image15,
    text1: "Profit & Rewards",
    text2:
      "When the film succeeds, investors receive their share of the earnings."
  }
];

const cardData = [
  {
    nums: "1",
    image: cardimg1,
    text1: "Investor Protection",
    text2:
      "Your funds are secured through a legally binding agreement with production houses."
  },
  {
    nums: "2",
    image: cardimg2,
    text1: "Verified projects",
    text2: "Only vetted and credible projects are listed for funding."
  },
  {
    nums: "3",
    image: cardimg3,
    text1: "Performance tracking",
    text2:
      "Regular updates on project progress, revenue forecasts, and earnings distribution."
  }
];

const Content = () => {
  const [loginopen, setLoginopen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isLoggedin = useSelector((state) => state?.auth?.isLoggedIn);
  console.log("islogin", isLoggedin);

  const [hoveredImage, setHoveredImage] = useState({
    nft: Nft,
    img2: image2,
    dino: dinosor
  });
  return (
    <div className=" w-full flex flex-col  mx-auto items-center  font-poppins overflow-hidden min-h-screen text-black max-w-maxContent ">
      <Navbar></Navbar>
      <div className="w-full my-element flex flex-col md:flex-row  lg:flex-row justify-center items-center mx-auto lg:-mt-16  lg:h-[659px] h-auto p-2 shadow-md rounded-3xl lg:gap-20 gap-5">
        {/* Text Section */}
        <div className="lg:w-[30%] w-full flex flex-col justify-center items-center mx-auto gap-4 lg:ml-[157px] ml-2 lg:mt-0 mt-3 ">
          {" "}
          {/* Remove 'text-center' */}
          <p className="text-black lg:w-[480px] lg:text-5xl text-2xl font-bold">
              Transform <br />
            the Entertainment <br />
              Landscape with <br />
            FilmyFunds
             </p>


          <p className=" lg:text-sm text-[13px] leading-tight  opacity-80 w-full max-w-[450px] sm:max-w-full text-left  ">
            With our blockchain-based platform, you don’t just <br />
            consume content; you engage directly in its creation <br />
            and reap tangible rewards from your investments
          </p>
          {/* Buttons - Always left-aligned */}
          <div className="flex sm:flex-row justify-start gap-4 sm:gap-5 lg:gap-8 w-full">
            {/* Join Now / Go Home Button */}
            {isLoggedin ? (
              <Link to="/home">
                <button
                  onClick={() => setLoginopen(true)}
                  className="bg-yellow-300 flex flex-row items-center w-[160px] justify-center gap-2 text-sm sm:text-base lg:text-lg font-semibold px-3 py-2 rounded-3xl hover:bg-yellow-500 hover:text-whiteCustom border border-black"
                >
                  DASHBOARD
                  <MdArrowOutward className="text-xl sm:text-2xl" />
                </button>
              </Link>
            ) : (
              <>
                <button
                  onClick={() => setLoginopen(true)}
                  className="bg-yellow-300 flex flex-row items-center w-[160px] justify-center gap-2 text-sm sm:text-base lg:text-lg font-semibold px-3 py-2 rounded-3xl hover:bg-yellow-500 hover:text-whiteCustom border border-black"
                >
                  JOIN NOW
                  <MdArrowOutward className="text-xl sm:text-2xl" />
                </button>

                {loginopen && (
                  <AuthComponent
                    isOpen={loginopen}
                    onClose={() => setLoginopen(false)}
                  />
                )}
              </>
            )}

            {/* Explore Button */}
            <Link to="/Booksection">
              <button className="bg-white font-semibold flex flex-row w-[165px] lg:text-xl items-center justify-center gap-2 border-2 border-[#0C8281] rounded-3xl px-4 py-2 hover:bg-[#0C8281] hover:text-white transition-all">
                EXPLORE
              </button>
            </Link>
          </div>
        </div>
        <CardComponent></CardComponent>
      </div>
      <div className=" hidden lg:flex absolute lg:justify-end lg:top-[630px]   w-full lg:h-[200px]  ">
        <div className="relative w-full ">
          <img src={curve2} className="absolute top-6 -left-9" />
          <img src={curve1} className="absolute top-28 -left-7" />
        </div>
      </div>
      <div className="hidden  lg:flex lg:justify-end lg:top-[844px] lg:left-[1360px] w-full lg:h-[200px] absolute">
        <div className="relative w-full">
          <img src={vectorcard} className="absolute top-6 left-0" />
          <img src={vectorcard2} className="absolute top-0 left-0" />
        </div>
      </div>
      <section className="flex flex-col md:flex-row lg:flex-row w-full justify-center items-center mx-auto lg:gap-32 gap-3 lg:mt-2 mt-10 ">
        <div className="w-full  lg:w-auto flex justify-center">
          <img
            className="w-full md:w-[600px] lg:w-[680px]"
            src={studyemo}
            alt="Study Emoji"
          />
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-[430px] text-center justify-center items-center lg:text-left">
          <p className="text-2xl lg:text-3xl font-bold">
            Empower Your Passion for Entertainment with
            <span className="block">FilmyFunds</span>
          </p>
          <div className="flex flex-row justify-start lg:justify-start lg:-translate-x-10 items-center gap-4">
            <img
              src={popcorn}
              className="bg-amber-200 bg-opacity-30 p-3 rounded-full w-12 h-12"
            />
            <p className="font-semibold text-lg">
              Be More Than Just an Audience
            </p>
          </div>

          <p className="text-sm lg:text-[17px] opacity-80">
            Imagine being a part of the next blockbuster movie or chart-topping
            song! FilmyFunds gives you the power to invest in creative projects
            and earn rewards from their success.
          </p>
          <Link to="/Booksection">
            <button className="bg-yellow-300 flex flex-row justify-center lg:w-[292px] w-[80%] p-2 rounded-3xl hover:bg-amber-400 font-semibold gap-2  text-lg items-center">
              EXPLORE PROJECTS
              <GiFilmSpool className="text-xl" />
            </button>
          </Link>
        </div>
        {/* study section */}
      </section>
      <div className="bg-[#FAF3E0] relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%] py-3 px-4 mt-8 flex items-center justify-center font-semibold text-lg sm:text-xl lg:text-2xl mx-auto rounded-t-2xl text-center">
        Start Your Investment in 4 Easy Steps
      </div>

<div
  style={{
    backgroundImage: `url(${sectionimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="w-full lg:h-[454px] h-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:flex md:flex-row lg:flex lg:flex-row items-center justify-center mx-auto py-8 px-4 lg:px-8"
>
  {cardflowData.map((val, index) => (
    <WorkingCards
      key={index}
      nums={val.nums}
      image={val.image}
      text1={val.text1}
      text2={val.text2}
    />
  ))}
</div>




      {/* <p className="text-sm lg:text-base opacity-80">
            Whether you re an independent filmmaker or a major production house, FilmyFunds provides an innovative way to finance movies while directly involving your audience.
          </p> */}
      <section
        style={{
          boxShadow: "inset 4px -4px 10px rgba(0,0,0,0.5)"
          // inset shadow towards top-left
        }}
        className="lg:h-[545px] lg:w-[1350px] md:w-full w-[335px] rounded-xl z-20 flex flex-col p-6 justify-between  mx-auto lg:mt-12 -mt-2  shadow-lg"
      >
        <p className="text-3xl font-semibold text-left ">Featured Projects</p>
        <div className="relative w-full lg:mt-4 p-3 lg:px-5  ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true} // Ensures infinite scrolling
            autoplay={{
              delay: 0, // Removes delay for continuous motion
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={3500} // Controls the speed of movement
            pagination={false}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="w-full custom-swiper  "
          >
            <SwiperSlide >
              <NftCards
                width={"lg:w-[374px] sm:w-[220px] md:w-[260px] w-full"}
                height={"sm:h-[403px] md:h-[433px] h-auto"}
                bgcolor={"#000000"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NftCards
                width={"lg:w-[374px] sm:w-[220px] md:w-[260px] w-full"}
                height={"sm:h-[403px] md:h-[433px] h-auto"}
                bgcolor={"#000000"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NftCards
                width={"lg:w-[374px] sm:w-[220px] md:w-[260px] w-full"}
                height={"sm:h-[403px] md:h-[433px] h-auto"}
                bgcolor={"#000000"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NftCards
                width={"lg:w-[374px] sm:w-[220px] md:w-[260px] w-full"}
                height={"sm:h-[403px] md:h-[433px] h-auto"}
                bgcolor={"#000000"}
              />
            </SwiperSlide>
          </Swiper>
         
        </div>
      </section>

      <div className="flex justify-center lg:justify-start items-center mx-auto font-semibold text-2xl sm:text-2xl md:text-4xl lg:text-4xl  mt-20 md:mt-16 lg:mt-[80px] px-4 w-full">
        <p className="text-center lg:-ml-72 w-full">Why Choose FilmyFunds?</p>
      </div>
      <Choosefilmyfunds></Choosefilmyfunds>

      <div className="w-full lg:-mt-36">
        <img
          src={design}
          alt="Design Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div
        className="flex justify-center items-center mx-auto text-center lg:text-3xl text-lg lg:mt-5 lg:font-semibold font-bold"
      >
        How We Ensure Your Investment is Safe
      </div>

      <div
        style={{
          backgroundImage: `url(${safesectionimg})`,
          backgroundSize: "cover", // Ensures full coverage
          backgroundPosition: "center bottom", // Aligns image properly
          backgroundRepeat: "no-repeat" // Prevents tiling
        }}
        className="w-full px-4 lg:flex lg:h-[600px] md:h-[600px] h-[720px] items-center z-20  flex-row justify-center lg:gap-9 md:gap-6 gap-5 lg:flex-row md:flex-row grid grid-cols-2 lg:mt-10 "
      >
        {cardData.map((data, index) => (
          <SafeCards
            key={index}
            image={data.image}
            text1={data.text1}
            text2={data.text2}
          />
        ))}
      </div>

      {/* review section  */}
      <Reviews></Reviews>
      <div className="w-full flex mt-10 mb-5 shadow-xl items-center justify-center ">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex-1 h-[40px] sm:h-[50px] bg-white flex items-center mx-auto mb-3 justify-center"
          >
            <motion.img
              src={nftimg}
              alt={`NFT ${index + 1}`}
              className="w-12 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-12"
              animate={{
                x: ["100%", "-100%"] // Moves image from right to left
              }}
              transition={{
                repeat: Infinity, // Infinite loop
                duration: 5, // Adjust speed
                ease: "linear"
              }}
            />
          </div>
        ))}
      </div>
      <div className="w-full faqs max-w-4xl h-auto flex flex-col gap-5 p-4 items-center">
            <Faquestion/>    
      </div>

      <section
        className="w-full h-[500px] flex items-center justify-center px-4 lg:px-12"
        style={{
          backgroundImage: `url(${rectangle2})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full  p-6 rounded-lg">
          {/* Text Section */}
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <p className="text-2xl lg:text-3xl font-bold text-black leading-tight">
              Join 50,000+ Investors Who Believe in FilmyFunds!
            </p>
            <p className="text-sm lg:text-base text-black">
              Don’t just watch—be part of the action!
            </p>
            {isLoggedin ? (
              <button
                onClick={() => setLoginopen(true)}
                className="bg-yellow-300 flex flex-row items-center w-[160px] justify-center gap-2 text-sm sm:text-base lg:text-lg font-semibold px-3 py-2 rounded-3xl hover:bg-yellow-500 hover:text-whiteCustom border border-black"
              >
                DASHBOARD
                <MdArrowOutward className="text-xl sm:text-2xl" />
              </button>
            ) : (
              <>
                <button
                  onClick={() => setLoginopen(true)}
                  className="bg-yellow-300 flex flex-row items-center w-[160px] justify-center gap-2 text-sm sm:text-base lg:text-lg font-semibold px-3 py-2 rounded-3xl hover:bg-yellow-500 hover:text-whiteCustom border border-black"
                >
                  JOIN NOW
                  <MdArrowOutward className="text-xl sm:text-2xl" />
                </button>

                {loginopen && (
                  <AuthComponent
                    isOpen={loginopen}
                    onClose={() => setLoginopen(false)}
                  />
                )}
              </>
            )}
          </div>
          {/* Image Section */}
          <div className="w-48 lg:w-[465px]">
            <img src={cuate} alt="Join Us Illustration" className="w-full" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Content;
