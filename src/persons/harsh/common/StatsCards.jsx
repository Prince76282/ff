import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { TbArrowZigZag } from "react-icons/tb";
import graph from "../../../assets/harsh_assets/Graph.png"
const StatsCards = ({ totaltext, money, percentagedata }) => {
    return (
        <div className='flex flex-col gap-3 w-[242px] h-[180px] font-Poppins  text-black shadow-xl rounded-xl p-3  mx-auto mt-10'>
            <div className='flex flex-row justify-between'>
                <p className='text-sm opacity-90 font-semibold '>Total Investment</p>
                <div className='rounded-full p-2 shadow-md z-10'>
                    <MdNavigateNext className='text-xl font-semibold' />
                </div>

            </div>
            <span className='text-3xl font-semibold'>1500</span>
            <div className='flex flex-row justify-between items-center  '>
                <div className='flex flex-row gap-1  p-2 items-center bg-[#D9D9D9]  rounded-lg '>
                    <TbArrowZigZag className='text-sm' />
                    <span className='text-sm'>10.30</span>

                </div>
                <img src={graph}></img>

            </div>

        </div>

    )
}

export default StatsCards
