import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import SidebarCompo from "./persons/shreya/Pages/SidebarCompo";
import NavbarCompo from "./persons/harsh/common/NavbarCompo";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  
   

  // Toggle Sidebar & Navbar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen  w-full   relative">
      {/* Sidebar (Fixed on Large Screens, Toggles on Small Screens) */}
      <div
        className={`fixed left-0 top-0 h-screen w-60 bg-white shadow-md transition-transform duration-300 z-20
  ${isOpen ? "translate-x-0" : "-translate-x-full"} 
  md:translate-x-0 md:w-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100`}
      >
        <SidebarCompo isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Overlay when menu is open on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 backdrop-blur-md md:hidden z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex  flex-col w-full    md:ml-60 transition-all duration-300">
        {/* Navbar Section */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FiMenu />
        </button>
        <NavbarCompo isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Main Content Area */}
        <div className="w-full  flex   mx-auto  overflow-x-hidden lg:mt-[20px] mt-[40px]">
          <Outlet />
        </div>


      </div>
    </div>
  );
};

export default Layout;
