import React, { useState } from 'react';
import filmyLogo from "../../../assets/harsh_assets/nf 1.png";
import SiginForm from '../common/SiginForm';
import SignupForm from '../common/SignupForm';
import { ImCancelCircle } from "react-icons/im";

const AuthComponent = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleForm = () => setIsSignUp(!isSignUp);
   
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="relative w-full max-w-[960px] bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
        >
          <ImCancelCircle className="text-3xl text-white" />
        </button>

        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 bg-white">
          {isSignUp ? (
            <SignupForm toggleForm={toggleForm} />
          ) : (
            <SiginForm toggleForm={toggleForm} />
          )}
        </div>

        {/* Right Side: Branding */}
        <div className="hidden lg:flex w-1/2 bg-[#0C8281] items-center justify-center p-6">
          <div className="flex flex-col gap-4 text-center">
            <div className="w-[200px] lg:w-[300px] bg-white p-5 rounded-xl mx-auto">
              <img
                src={filmyLogo}
                alt="FilmyFunds Logo"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className='text-white text-lg'>
            {
                isSignUp ? (
                    <p>Back the Stories You Love. Earn While They Stream.</p>


                ):(<p>Invest, Watch & Earn from your favorite projects.</p>)
            }
              
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
