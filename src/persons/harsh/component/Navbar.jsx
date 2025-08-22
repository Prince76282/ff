import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/dashboard/nf 1.png";
import { FiMenu, FiX } from "react-icons/fi";
import LoginModal from "./LoginModal";
import AuthComponent from "./AuthComponent";

import LogoutModal from "./LogoutModal";
import { useSelector } from "react-redux";

const Navbar = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  console.log("login", isLoggedIn);
  const handleClick = () => {
    navigate("/login");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  // console.log("changeuserState",changeUserState);
  return (
    <div className="w-full bg-[#9DD4C6] bg-opacity-25 px-6 lg:px-12 py-4 relative flex justify-between items-center">
      {/* Logo */}
      <img src={logo} className="w-[170px] mt-2 h- lg:w-[150px]" alt="Logo" />

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex gap-6 text-lg font-semibold text-black">
        <Link
          to="/Booksection"
          className="cursor-pointer border-b-3 border-transparent hover:border-black transition"
        >
          Discover
        </Link>

        <ScrollLink
          to="working"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-3 border-transparent hover:border-black transition"
        >
          How it Works
        </ScrollLink>
        <ScrollLink
          to="review"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-3 border-transparent hover:border-black transition"
        >
          Success Stories
        </ScrollLink>
        <ScrollLink
          to="faqs"
          smooth={true}
          duration={500}
          className="cursor-pointer border-b-3 border-transparent hover:border-black transition"
        >
          FAQs
        </ScrollLink>
      </div>

      {/* Login Button (Desktop Only) */}
      {isLoggedIn === false ? (
        <button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:block bg-yellow-400 lg:text-xl rounded-3xl lg:w-[180px] px-4 py-2 font-semibold hover:bg-yellow-500 border border-black transition"
        >
          LOG IN
        </button>
      ) : (
        <button
          onClick={() => setLogoutModal(true)}
          className="hidden lg:block bg-yellow-400 lg:text-xl rounded-3xl lg:w-[182px] px-4 py-2 font-semibold hover:bg-yellow-500 border border-black transition"
        >
          LOG OUT
        </button>
      )}

      {isModalOpen && (
        <AuthComponent
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {logoutModal && (
        <LogoutModal
          onCancel={() => setLogoutModal(false)} // This hides the modal
          onConfirm={() => setLogoutModal(false)} // Also hides the modal after logout
        />
      )}

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-start gap-4 py-6 px-6 lg:hidden">
          <Link
            to="/Booksection"
            smooth={true}
            duration={500}
            className="w-full cursor-pointer text-lg text-black font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Discover
          </Link>
          <ScrollLink
            to="working"
            smooth={true}
            duration={500}
            className="w-full cursor-pointer text-lg text-black font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How it Works
          </ScrollLink>
          <ScrollLink
            to="success-stories"
            smooth={true}
            duration={500}
            className="w-full cursor-pointer text-lg text-black font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Success Stories
          </ScrollLink>
          <ScrollLink
            to="faqs"
            smooth={true}
            duration={500}
            className="w-full cursor-pointer text-lg text-black font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </ScrollLink>

          {/* Mobile Login / Logout Button */}
          {isLoggedIn === false ? (
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-yellow-400 rounded-lg py-2 font-semibold text-center mt-4"
            >
              LOG IN
            </button>
          ) : (
            <button
              onClick={() => {
                setLogoutModal(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-yellow-400 rounded-lg py-2 font-semibold text-center mt-4"
            >
              LOG OUT
            </button>
          )}

          {/* Modals */}
          {isModalOpen && (
            <AuthComponent
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          )}

          {logoutModal && (
            <LogoutModal
              onCancel={() => setLogoutModal(false)}
              onConfirm={() => setLogoutModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
