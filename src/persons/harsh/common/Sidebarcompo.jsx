import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/dashboard/nf 1.png";
import { FaBars, FaTimes, FaHome, FaShoppingCart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { MdExplore, MdOutlineWifiCalling3 } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";



const Sidebarcompo = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state

  return (
    <div>
      {/* Toggle Button for Small Screens */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#0C8281] p-2 rounded-md text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-3 top-2 w-[241px] h-[560px] bg-white text-black font-Poppins rounded-xl p-4 flex flex-col lg:gap-5 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <img src={logo} className="lg:w-[163px]" alt="Logo" />

        <h1 className="text-xl">Menu</h1>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <FaHome className="text-md" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <VscGraph className="text-md" />
              About
            </Link>
          </li>
          <li>
            <Link to="/MovieCard" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <MdExplore className="text-md" />
              Explore
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <FaShoppingCart className="text-md" />
              Cart
            </Link>
          </li>
        </ul>

        <h1 className="text-xl mt-5">GENERAL</h1>
        <ul className="space-y-2">
          <li>
            <link to="/notifications" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <IoIosNotifications className="text-md" />
              Notification
            </link>
          </li>
          <li>
            <Link to="/help" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <MdOutlineWifiCalling3 className="text-md" />
              Help and Support
            </Link>
          </li>
          <li>
            <Link to="/logout" className="flex flex-row gap-2 items-center p-2 text-md hover:bg-[#0C8281] hover:rounded-md cursor-pointer">
              <RiLogoutBoxRFill className="text-md" />
              Log Out
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebarcompo;
