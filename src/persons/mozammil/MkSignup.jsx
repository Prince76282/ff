import React from "react";
import { useForm } from "react-hook-form";
import logo from "./../../assets/Shreya_assets/nf 1.png";
import bro from "./../../assets/Shreya_assets/bro.png";
import { axiosInstance } from "@/lib/axiosInstance";

export default function MkSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    const payload = {
      email: data.email,
      client_id: "bh1gcb1dcbup5jspc8h0sd9rs",
      password: data.password,
    };

    try {
      const res = await axiosInstance.post("/auth/signup", payload);
      console.log("Response:", res.data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-7xl relative overflow-hidden flex-col md:flex-row">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-8 relative z-10 flex flex-col justify-center">
          <img src={logo} alt="Logo" className="h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-center md:text-left">Get Started</h2>
          <p className="text-gray-500 text-center md:text-left">
            Welcome to FilmyFunds - Let's create your account
          </p>

          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Email ID</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Mobile No.</label>
              <div className="flex">
                <input
                  type="text"
                  className="w-1/6 p-3 border rounded-lg mt-2 text-center bg-gray-100"
                  value="+91"
                  disabled
                />
                <input
                  type="tel"
                  {...register("mobile", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your phone no."
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                    message:
                      "Password must contain 1 uppercase, 1 number, and 1 special character",
                  },
                })}
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Create your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm password to proceed",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Re-enter your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex justify-between items-center w-full mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("terms", { required: "You must agree to the Terms" })}
                />
                I agree to the Terms & Conditions.
              </label>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms.message}</p>
               )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                className="w-3/4 bg-yellow-500 text-white p-2 rounded-3xl font-bold hover:bg-yellow-600"
              >
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-4 text-center text-gray-600">
              Already have an Account?{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Log In
              </a>
            </p>
          </form>
        </div>

        {/* Right Side */}
        <div className="w-1/2 hidden md:flex items-center justify-center relative bg-[#e2f3ee]">
          <img src={bro} alt="Overlay" className="absolute w-5/6 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}