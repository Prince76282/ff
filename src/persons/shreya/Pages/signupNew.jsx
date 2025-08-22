import { useState } from "react";
import logo from "../../../assets/Shreya_assets/nf 1.png";
import bro from "../../../assets/Shreya_assets/bro.png";
import { axiosInstance } from "@/lib/axiosInstance";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle mobile number input (allow only digits)
  const handleMobileChange = (e) => {
    setMobile(e.target.value.replace(/\D/g, ""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !mobile || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      email,
      client_id: "bh1gcb1dcbup5jspc8h0sd9rs",
      password,
    };

    try {
      console.log("Sending data:", data);
      const res = await axiosInstance.post("/auth/signup", data);
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
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Email ID</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mobile Number Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Mobile No.</label>
              <div className="flex">
                <input
                  type="text"
                  className="w-1/6 p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300 text-center"
                  value={countryCode}
                  disabled
                />
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                  placeholder="Enter your phone no."
                  value={mobile}
                  onChange={handleMobileChange}
                  pattern="[0-9]*"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Create your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Confirm Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex justify-between items-center w-full mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                I agree to the Terms & Conditions.
              </label>
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
