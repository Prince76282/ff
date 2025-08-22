import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { MdArrowOutward, MdLocalMovies } from 'react-icons/md'
import CardComponent from './CardComponent'
import { motion } from "framer-motion";
import nftimg from "../../../assets/dashboard/nf 1.png"
import studyimo from "../../../assets/creatorsasstets/people-working.png"
import { GiFilmSpool } from 'react-icons/gi'
import moviecut from "../../../assets/creatorsasstets/movie-cut.png"
import CardsWorkflow from '../common/CardsWorkflow'
import image1 from "../../../assets/dashboard/ci1.png"
import image2 from "../../../assets/dashboard/ci2.png"
import image3 from "../../../assets/dashboard/ci3.png"
import image4 from "../../../assets/dashboard/ci4.png"

const cardflowData= [
  {
    nums:"1",
    image:image1,
    text1:"Investor Protection",
    text2:"Your funds are secured through a legally binding agreement with production houses."
  },
  {
    nums:"2",
    image:image2,
    text1:"Verified projects",
    text2:"Only vetted and credible projects are listed for funding."
  },
  {
    nums:"3",
    image: image3,
    text1:"Performance tracking",
    text2:"Regular updates on project progress, revenue forecasts, and earnings distribution."
  },
  {
    nums:"3",
    image: image4,
    text1:"Performance tracking",
    text2:"Regular updates on project progress, revenue forecasts, and earnings distribution."
  },
 
]


const CreatorsContent = () => {
    return (
        <div className=' w-full flex flex-col  mx-auto items-center  font-poppins overflow-hidden min-h-screen text-black max-w-maxContent '>
            <Navbar></Navbar>
            <div className='w-full  my-element flex flex-row justify-center items-center mx-auto  lg:h-[450px] h-auto p-8 shadow-md rounded-3xl lg:gap-32 gap-3'>
                <div className='lg:w-[25%] w-full  flex flex-col gap-4 -500 lg:ml-16 -ml-4 '>
                    <p className='text-black lg:text-4xl text-xl font-bold'>Unlock the Funding Your Creative Vision Deserves!</p>
                    <p className='lg:text-sm text-[15px] lg:w-full opacity-80'>Bringing your masterpiece to life just got easier! FilmyFunds connects you with a community of passionate investors eager to support groundbreaking projects through NFT-backed investments.</p>
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-8 w-full">
                        {/* Join Now Button */}
                        <Link to="/signup">
                            <button className="bg-yellow-300 flex flex-row text-sm  gap-2 lg:text-lg items-center font-semibold px-2 py-2 rounded-lg hover:bg-slate-400 hover:text-whiteCustom min-w-[120px]">
                                Join Us
                                <MdArrowOutward className="text-2xl" />
                            </button>
                        </Link>

                        {/* Explore Button */}
                        <button className="bg-slate-300 font-semibold flex flex-row text-sm lg:text-lg items-center gap-2  rounded-lg border-2 px-2 py-2 border-blue-500 w-[140px] lg:w-[200px] hover:bg-yellow-300 min-w-[80px]">
                            Explore Projects
                            <MdLocalMovies className="text-2xl" />
                        </button>
                    </div>

                </div>

                <CardComponent></CardComponent>



            </div>
            <div className="w-full flex items-center gap-3 overflow-hidden mt-20">
                {/* Fixed Text on the left */}
                <p className="font-semibold text-2xl whitespace-nowrap ml-16">
                    Our Partners
                </p>

                {/* Scrolling Images - Each moves independently (keeping your animation) */}
                <div className="w-full overflow-hidden py-4 ">
                    <div className="flex flex-row gap-6 flex-nowrap">
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="h-[60px] sm:h-[75px] bg-white   flex items-center justify-center flex-shrink-0"
                                style={{ width: "100px" }} // Fixed width for consistent spacing
                            >
                                <motion.img
                                    src={nftimg}
                                    alt={`NFT ${index + 1}`}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    animate={{
                                        x: ["100%", "-100%"], // Moves image from right to left
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 5, // Adjust speed
                                        ease: "linear",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
                {/* study-imo section say goodbye to section */}
             <section className='flex flex-col lg:flex-row w-full justify-center items-center mx-auto lg:gap-24 gap-6 mt-10 '>
                    <div className='w-full lg:w-auto flex justify-center'>
                      <img className='w-[80%] lg:w-[80%]' src={studyimo} alt='Study Emoji' />
                    </div>
                    <div className='flex flex-col gap-5 w-full lg:w-[470px] text-center justify-center items-center lg:text-left'>
                      <p className='text-2xl lg:text-3xl font-semibold'>Say goodbye to funding hurdles & hello to creative freedom!</p>
                      <div className='flex flex-row justify-start lg:justify-start lg:-translate-x-10 items-center gap-4'>
                        <img src={moviecut}  className='  w-16 h-16 lg:ml-5' />
                        <p className='font-semibold text-lg'>Unlock New Funding Avenues for Your Films</p>
                      </div>
            
                      <p className='text-sm lg:text-[16px] opacity-80'>Whether you're an independent filmmaker or a major production house, FilmyFunds provides an innovative way to finance movies while directly involving your audience.</p>
                      <button className='bg-yellow-300 flex flex-row justify-center lg:w-[190px] w-[80%] p-2 rounded-lg font-semibold gap-2  text-lg items-center'>Know More
                        <GiFilmSpool className='text-xl' />
                      </button>
                    </div>
            
            
                  </section>

                  {/* <section style={{ backgroundColor: '#FFF7CB' }} className='lg:w-[87%] lg:h-[480px] flex flex-col items-center mx-auto rounded-lg z-10 shadow-lg  '>
                    <p className='font-semibold text-3xl mt-6'>How it Works</p>
                    {
                        cardflowData.map((val,index)=>
                            <CardsWorkflow cardnum={val.nums} cardimg={val.image} text1={val.text1} text2={val.text2}></CardsWorkflow>

                        ))
                    }
                    
                  </section> */}
        </div>
    )
}

export default CreatorsContent
