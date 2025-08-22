import { useState } from "react";
import logo from "../../../assets/Shreya_assets/nf 1.png";
import overlay from "../../../assets/Shreya_assets/cuate.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-7xl h-[100vh] relative overflow-hidden flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 p-8 relative z-10 flex flex-col justify-center">
          <img src={logo} alt="Logo" className="h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-center md:text-left">Welcome back!</h2>
          <p className="text-gray-500 text-center md:text-left">Please enter your details</p>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Email ID</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Marked as mandatory
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg mt-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Marked as mandatory
              />
            </div>
            
            {/* Remember Me and Forgot Password in the same line */}
            <div className="flex justify-between items-center w-full mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
              <a href="#" className="text-yellow-500 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Centered Buttons */}
            <div className="flex flex-col items-center space-y-4">
              <button className="w-3/4 bg-yellow-500 text-white p-2 rounded-3xl font-bold hover:bg-yellow-600">
                Sign In
              </button>
              <button className="w-3/4 border p-2 rounded-3xl font-bold flex justify-center items-center hover:bg-gray-100">
                Sign In with Google
              </button>
            </div>
            <p className="mt-4 text-center text-gray-600">
              Don’t have an Account? <a href="/pages/signupNew" className="text-yellow-500 hover:underline">Sign Up</a>
            </p>
          </form>
        </div>

        {/* Right Side */}
        <div className="w-1/2 hidden md:flex items-center justify-center relative bg-[#e2f3ee]">
          <img src={overlay} alt="Overlay" className="absolute w-5/6 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}