import React, { useEffect, useState } from 'react';
import useApiHandler from '@/hooks/useApiCall';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const apiCaller = useApiHandler();
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [userEmail,setUserEmail]=useState("");
  

    


useEffect(() => {
  const storedEmail = Cookies.get('user_email');
  setUserEmail(storedEmail);
 
}, []);
console.log("Email:",userEmail);


  const handleSendOtp = async () => {
    if (!email) {
      showErrorToast("Please Enter an email");
      return;
    }
    if(email!=userEmail)
    {
      showErrorToast("Email does not match");
      return ;
    }
    
    

    try {
      const otpPayload = { email };
      console.log("Payload:", otpPayload);

      const response = await apiCaller('/auth/forgot-password', "post", otpPayload);
      console.log("Response:", response);

      if (response?.data?.success) {
       showSuccessToast("Otp sent Successfully");
        onClose(); // Close the modal
        navigate("/otp-call");
      } else {
        showErrorToast("Some error occured");
      }

    } catch (e) {
      console.error("Error sending OTP:", e.message);
     showErrorToast("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-40 backdrop-blur-sm z-50 font-Poppins">
      <div className="bg-white rounded-lg p-6 shadow-md max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold text-[#0C8281]">Forgot your Password?</p>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-lg font-bold">X</button>
        </div>

        <p className="text-sm text-gray-700 mb-4">Please enter your email address to receive an OTP.</p>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-800">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSendOtp}
            className="bg-[#0C8281] hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
