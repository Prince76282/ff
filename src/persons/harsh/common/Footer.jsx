import React, { useState } from "react";

import { AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa6";
import nftimg from "../../../assets/dashboard/nf 1.png";

import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <footer className="flex flex-col items-center w-full bg-black text-white font-poppins   p-6">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row justify-between text-white gap-6 md:gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full md:w-[300px]">
          <img src={nftimg} className="w-[126px] h-[50px]" alt="Logo" />
          <p className="text-xs leading-relaxed">
            Empowering fans and filmmakers through decentralized funding,
            transparent investments, and fair revenue sharing.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center md:text-left">
          <p className="text-lg font-semibold">Quick Links</p>
          <ul className="text-xs flex flex-col gap-2 mt-2">
            <Link to="/Booksection">
              <li className="hover:underline">About us</li>
            </Link>
            <Link to="/PublicAndFans">
              <li className="hover:underline">Public and fans</li>
            </Link>
            <Link to="/Creators">
              <li className="hover:underline">Creators</li>
            </Link>
           
            <ScrollLink
              to="working"
              smooth={true}
              duration={500}
              className="w-full cursor-pointer text-xs text-white "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li className="hover:underline">How it works</li>
            </ScrollLink>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-lg font-semibold">Contact Us</p>
          <p className="text-xs">Email: support@filmyfunds.com</p>
          <p className="text-xs">Phone: +9199233993</p>

          {/* Social Media */}
          <p className="mt-4 text-lg font-semibold">Follow Us</p>
          <div className="flex flex-row gap-4 text-lg">
            <a
              href="https://www.linkedin.com/company/filmyfunds/posts/?feedView=all" // Replace with your actual X/Twitter link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/filmyfunds/" // Replace with your actual X/Twitter link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
            </a>
            <a
              href="http://youtube.com/@FilmyFunds_official" // Replace with your actual X/Twitter link
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="cursor-pointer hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center text-xs mt-6 border-t border-gray-700 pt-4">
        © Copyright 2022 Metatoken Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
