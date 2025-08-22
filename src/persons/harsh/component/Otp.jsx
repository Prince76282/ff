import { useState } from 'react';
import { IoIosMail } from "react-icons/io";
import { axiosInstance } from '@/lib/axiosInstance';
import OtpInput from 'react-otp-input';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import useApiHandler from '@/hooks/useApiCall';
import AuthComponent from './AuthComponent';
// Adjust the path as needed

const Otp = ({email}) => {
  const [otp, setOtp] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  // const email = location?.state?.email || "";
  const apiCaller = useApiHandler();

  const handleResendCode = async () => {
    if (!email) {
      toast.error("Please enter an email before resending.");
      return;
    }

    try {
      const payload = { email };
      const response = await apiCaller('/auth/resend_confirmation_code', 'post', payload); // update endpoint if needed
      console.log("response", response);
      if (response?.data?.success) {
        toast.success("Confirmation code resent!");
      } else {
        toast.error(response?.data?.message || "Failed to resend code.");
      }

    } catch (error) {
      console.error("Resend error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || !email) {
      toast.error("OTP or email is missing.");
      return;
    }

    try {
      const payload= {
        email:email,
        confirmation_code: otp,
      }
      const res = await apiCaller("/auth/confirm-signup","post", 
        payload
        
      );

      if (res.status === 201 || res.data?.success) {
        toast.success("Signup confirmed. Please Login.");
        setShowLoginModal(true);
        setOtp("");
      } else {
        toast.error(res.data?.message || "Signup failed. Please try again.");
      }

    } catch (e) {
      console.error("Signup error:", e);
      setShowLoginModal(true);
      toast.error(e.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div  className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-blur">
      {/* OTP Verification UI */}
      <div className="flex flex-col items-center bg-blur backdrop-blur-lg justify-center w-full max-w-md mx-auto mt-12 p-6 mb-4 shadow-lg z-20 rounded-lg font-Poppins bg-white relative">
        <div className="text-4xl text-yellow-500 mb-4">
          <IoIosMail />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Verify Your Email</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please enter the 6-digit code sent to your email.
        </p>

        {!email && (
          <p className="text-red-500 text-sm mb-2 text-center">
            ⚠ No email provided. Please return to the signup page.
          </p>
        )}

        <form onSubmit={HandleSubmit} className="flex flex-col items-center gap-4 w-full">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus
            inputType="tel"
            renderSeparator={<span className="w-2" />}
            renderInput={(props) => (
              <input
                {...props}
                className="w-[50px] h-[50px] border border-gray-300 text-xl text-center text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
              />
            )}
          />

          <button
            type="submit"
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition duration-300"
          >
            Confirm
          </button>
          <button
            className='text-[#0C8281] text-sm cursor-pointer'
            onClick={handleResendCode}
          >
            Resend Confirmation Code
          </button>
        </form>
      </div>

      {/* Login Modal */}
      {/* Login Modal */}
      <div className='h-[50%]'>
      <AuthComponent isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    </div>
      
    
  );
};

export default Otp;