import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import useApiHandler from '@/hooks/useApiCall';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '@/lib/axiosInstance';
import { showErrorToast } from '@/lib/toastUtils';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { setUser } from '@/redux/slices/profileSlice';
import Otp from "../component/Otp"
import Cookies from 'js-cookie';


const SignupForm = ({ toggleForm }) => {
  const apiCaller = useApiHandler();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();






  const onSubmit = async (data) => {
    console.log("data", data);
    const registerPayload = {
      first_name: data?.firstName,
      last_name: data?.lastName,
      isd_no: "+91",
      email: data?.email,
      phone: data?.mobile,
    };

    const signupPayload = {
      email: data.email,
      password: data.password,
      role: "fans"
    };



    try {
      console.log("Sending signup data:", signupPayload);
      const res = await apiCaller('/auth/signup', 'post', signupPayload);
      console.log("Signup Response:", res.data);

      if (res.data?.success || res.data?.status_code === 201) {
        toast.success("Signup done Successfully");
        dispatch(setUser({ email: data.email }));




        try {
          const initialRegistrationRes = await apiCaller(
            'user/initial-Registration',
            'post',
            registerPayload
          );
          console.log("Initial registration response:", initialRegistrationRes.data);

          if (initialRegistrationRes) {
            setUserEmail(data?.email);
            setShowOtp(true);
            reset();
            return ;
           
            // navigate("/otp", {
            //   state: { email: data.email },
            // });
          } else {
            // Handle failed registration if needed
          }
        } catch (regError) {
          console.error("Initial registration error:", regError.message);
        }

        // Reset form fields if you're using react-hook-form
        reset(); // Uncomment if using useForm hook with reset()

        // setTimeout(() => setIsRegister(false), 1500);
      } else {
        toast.error(res.data?.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };


  return (
    <div className="flex flex-col  items-center    p-6 sm:p-6">
      <p className="text-lg sm:text-xl text-black">Join the World of Movie Investments!</p>
      {
        showOtp ? (
         <Otp email={userEmail}></Otp>
      ):(

         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 max-w-md w-full p-6 sm:p-8">
        {/* Name Fields */}
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex flex-col lg:w-[50%] w-full">
            <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              {...register("firstName", { required: "First name is required" })}
              className="px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          <div className="flex flex-col lg:w-[50%] w-full">
            <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
            className="px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter Your Mobile No."
            maxLength={10}
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number"
              }
            })}
            className="px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              autoComplete="new-password"
              {...register("password", { required: "Password is required" })}
              className="px-3 py-2 pr-10 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
            />
            <button
              type="button"
              className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              className="px-3 py-2 pr-10 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
            />
            <button
              type="button"
              className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#0C8281] cursor-pointer hover:bg-yellow-600 text-white py-2 sm:py-3 rounded-md transition duration-300"
        >
          Sign Up
        </button>

        {/* OR Separator */}
        <div className="flex items-center w-full my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => console.log("Google Signup Triggered")}
          className="border border-black cursor-pointer hover:bg-yellow-600 flex flex-row gap-2 text-lg justify-center items-center text-black py-2 rounded-sm transition duration-300"
        >
          <FcGoogle className="text-2xl" />
          <span>Sign Up with Google</span>
        </button>
        <p className="text-black lg:text-lg: text-sm mx-auto">
          Already have an account?{' '}
          <span onClick={toggleForm} className="text-[#0C8281] cursor-pointer">
            Log In
          </span>
        </p>
      </form>
      )
     


      }
      
     

      {/* Footer */}

    </div>
  );
};

export default SignupForm;
