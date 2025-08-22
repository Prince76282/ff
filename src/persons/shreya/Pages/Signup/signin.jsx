import { axiosInstance } from "@/lib/axiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useApiHandler from "@/hooks/useApiCall";

import { showErrorToast } from "@/lib/toastUtils";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { changeUserState } from "../../../../redux/slices/authSlice";

=======
import { changeUserState } from "@/redux/slices/authSlice";
>>>>>>> 3df098db79cad768e74666302056600906ccddf0

const ToggleAuthForm = () => {
  const navigate = useNavigate();
  const apiCaller = useApiHandler();
  const dispatch = useDispatch();
  // loginData.email
  const [isRegister, setIsRegister] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  loginData.email;

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isdCode: "+91",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    passwordMismatch: false,
    showPasswordError: false,
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [mobileForOtp, setMobileForOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
    setErrors({
      passwordMismatch: false,
      showPasswordError: false,
    });
    setShowForgotPassword(false);
    setOtpSent(false);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    // Debugging Log
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        passwordMismatch: false,
        showPasswordError: false,
      }));
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setOtpSent(false);

    apiCaller("/auth/forgot-password", axiosInstance.post, {});
  };
  // forgot password  handling page
  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    console.log("OTP sent to:", mobileForOtp);

    const otpPayload = {
      email: mobileForOtp,
    };

    console.log("email", otpPayload);

    const res = await apiCaller(
      "/auth/forgot-password",
      axiosInstance.post,
      otpPayload
    );

    if (res?.data?.status_code === 200 || res?.data?.success) {
      navigate("/otp-call");
    } else {
      showErrorToast("Failed to send OTP. Please try again.");
      console.warn("OTP request failed", res);
    }
  };

  // handling sigup api
  const handleSignupSubmit = async (e) => {
    e.preventDefault(); // default

    // Validate required fields
    if (
      !registerData.firstName ||
      !registerData.lastName ||
      !registerData.email ||
      !registerData.mobile ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      toast.error("All fields are required!");
      return;
    }

    // Check if passwords match
    if (registerData.password !== registerData.confirmPassword) {
      setErrors?.((prev) => ({
        ...prev,
        passwordMismatch: true,
        showPasswordError: true,
      }));
      toast.error("Passwords do not match!");
      return;
    }

    // Construct the payload
    const payload = {
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      mobile: registerData.mobile,
      password: registerData.password,
    };
    // const toastID = toast.loading("...loading");
    try {
      console.log("Sending signup data:", payload);
      const res = await apiCaller("/auth/signup", "post", payload);
      console.log("Signup Response:", res.data);

      // Show success message
      if (res.status === 201 || res.data?.success) {
        const token = res?.data?.data?.AuthenticationResult?.AccessToken;
        console.log("token", token);
        localStorage.setItem("token", token);
        navigate("/otp", {
          state: { email: registerData.email },
        });

        // Reset form fields
        setRegisterData({
          firstName: "",
          lastName: "",
          email: "",
          isdCode: "+91",
          mobile: "",
          password: "",
          confirmPassword: "",
        });

        // Wait for the success toast to show before switching to login form
        setTimeout(() => setIsRegister(false), 1500);
      } else {
        // toast.error(res.data?.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      // toast.error(
      //   error.response?.data?.message || "Signup failed. Please try again."
      // );
    }
    toast.dismiss(toastID);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please enter both email and password");
      return;
    }

    const payload = {
      email: loginData.email,
      password: loginData.password,
    };

    console.log("Payload", payload);
    const toastId = toast.loading("...loading");

<<<<<<< HEAD


=======
>>>>>>> 3df098db79cad768e74666302056600906ccddf0
    const res = await apiCaller("/auth/signin", "post", payload);
    console.log("response", res.data.AuthenticationResult);

    if (res?.data?.success || res.data.status_code === 200) {
      dispatch(changeUserState(true));
      const token = res.data.data.AuthenticationResult.AccessToken;

      // ✅ Store token in localStorage or cookies
      localStorage.setItem("token", token); // Or use cookies if more secure

      // Optional: set axios default header for future requests
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      toast.success("Login successful!");
      navigate("/Home");
    } else {
      showErrorToast(
        "Something went wrong",
        {
          duration: 4000,
          position: "top-center",
          icon: "❌",
          style: {
            background: "#FF4B4B",
            color: "white",
            fontWeight: "bold",
          },
        },
        true
      );
    }

    console.log(res);
    toast.dismiss(toastId);
  };

  return (
    <div className="flex justify-center w-full  items-center min-h-screen ">
      <div className="relative lg:w-full w-full lg:h-[700px] h-[550px] bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700">
        <div className="relative flex w-full h-full">
          {/* Login Form */}
          <div
            className={`absolute w-1/2 h-full flex flex-col justify-center items-center p-10 transition-all duration-700 ${
              isRegister ? "translate-x-[-100%] right-0" : "translate-x-0"
            }`}
          >
            {!showForgotPassword ? (
              <>
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-sm mt-2">Sign in to your account</p>

                <form onSubmit={handleSubmit} className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full p-3 mt-4 bg-gray-200 rounded-md outline-none text-gray-700"
                    required
                  />
                  <div className="relative mt-4">
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      className="w-full p-3 bg-gray-200 rounded-md outline-none text-gray-700 pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-right w-full text-sm text-blue-500 hover:underline mt-2"
                  >
                    Forgot Password?
                  </button>
                  <button
                    type="submit"
                    className="w-full py-3 mt-4 text-black rounded-md shadow-md transition"
                    style={{
                      borderWidth: "6px",
                      borderStyle: "solid",
                      borderImage:
                        "linear-gradient(to left, #FFE655, #9DD4C6) 1",
                    }}
                  >
                    Login
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <p className="text-sm mt-2">Enter your email to receive OTP</p>

                {otpSent ? (
                  <div className="w-full mt-6 text-center">
                    <p className="text-green-600">
                      OTP has been sent to your email address.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="w-full py-3 mt-4 text-gray-600 hover:text-gray-800 transition"
                    >
                      Back to Login
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleMobileSubmit} className="w-full mt-6">
                    <div className="flex w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        value={mobileForOtp}
                        onChange={(e) => setMobileForOtp(e.target.value)}
                        className="w-full p-3 bg-gray-200 rounded-r-md outline-none text-gray-700"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 mt-6 text-black rounded-md shadow-md transition"
                      style={{
                        borderWidth: "6px",
                        borderStyle: "solid",
                        borderImage:
                          "linear-gradient(to left, #FFE655, #9DD4C6) 1",
                      }}
                    >
                      Send OTP
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForgotPassword(false)}
                      className="w-full py-3 mt-4 text-gray-600 hover:text-gray-800 transition"
                    >
                      Back to Login
                    </button>
                  </form>
                )}
              </>
            )}
          </div>

          {/* Register Form */}
          <div
            className={`absolute w-1/2 h-full flex flex-col justify-center items-center p-10 transition-all duration-700 ${
              isRegister ? "translate-x-0 right-0" : "translate-x-[100%]"
            }`}
          >
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-sm mt-2 mb-">Create a new account</p>

            <form onSubmit={handleSignupSubmit} className="w-full">
              <div className="flex flex-col md:flex-row w-full gap-4 md:gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={registerData.firstName}
                  onChange={handleRegisterChange}
                  className="w-full p-3 bg-gray-200 rounded-md outline-none text-gray-700"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={registerData.lastName}
                  onChange={handleRegisterChange}
                  className="w-full p-3 bg-gray-200 rounded-md outline-none text-gray-700"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="w-full p-3 mt-4 bg-gray-200 rounded-md outline-none text-gray-700"
                required
              />

              <div className="flex w-full mt-4">
                <select
                  name="isdCode"
                  value={registerData.isdCode}
                  onChange={handleRegisterChange}
                  className="w-1/4 p-3 bg-gray-200 rounded-l-md outline-none text-gray-700"
                >
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={registerData.mobile}
                  onChange={handleRegisterChange}
                  className="w-3/4 p-3 bg-gray-200 rounded-r-md outline-none text-gray-700"
                  required
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>

              <div className="relative mt-4">
                <input
                  type={showRegisterPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className="w-full p-3 bg-gray-200 rounded-md outline-none text-gray-700 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                >
                  {showRegisterPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative mt-4">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  className={`w-full p-3 bg-gray-200 rounded-md outline-none text-gray-700 pr-10 ${
                    errors.showPasswordError ? "border border-red-500" : ""
                  }`}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.showPasswordError && (
                <p className="text-red-500 text-sm mt-1">
                  Passwords do not match!
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 mt-6 text-black rounded-md shadow-md hover:opacity-90 transition"
                style={{
                  borderWidth: "6px",
                  borderStyle: "solid",
                  borderImage: "linear-gradient(to left, #FFE655, #9DD4C6) 1",
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Toggle Panel with full-width animation */}
        <div
          className={`absolute top-0 h-full flex flex-col justify-center items-center text-white transition-all duration-300 ${
            isTransitioning ? "w-full" : "w-1/2"
          } ${isRegister ? "left-1/2 bg-[#0C8281]" : "left-0 bg-[#0C8281]"}`}
          style={{
            borderRadius: isTransitioning
              ? "0"
              : isRegister
              ? "150px 0 0 150px"
              : "0 150px 150px 0",
          }}
        >
          <div
            className={`transition-opacity duration-300 flex flex-col items-center ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <h2 className="text-2xl font-bold text-center">
              {isRegister ? "Welcome Back!" : "Join FilmyFunds"}
            </h2>
            <p className="text-sm mt-2 text-center w-3/4">
              {isRegister
                ? "Don't have an account? Sign up now."
                : "Already have an account? Sign in here."}
            </p>
            <button
              onClick={toggleForm}
              className="mt-5 px-6 py-3 border-2 border-white rounded-md hover:bg-[#FFC727] hover:text-black transition w-[120px] flex justify-center"
            >
              {isRegister ? "Register" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ToggleAuthForm;
=======
//           {/* Toggle Panel with full-width animation */}
//           <div
//             className={`absolute top-0 h-full flex flex-col justify-center items-center text-white transition-all duration-300 ${
//               isTransitioning ? "w-full" : "w-1/2"
//             } ${isRegister ? "left-1/2 bg-[#0C8281]" : "left-0 bg-[#0C8281]"}`}
//             style={{
//               borderRadius: isTransitioning
//                 ? "0"
//                 : isRegister
//                 ? "150px 0 0 150px"
//                 : "0 150px 150px 0"
//             }}
//           >
//             <div
//               className={`transition-opacity duration-300 flex flex-col items-center ${
//                 isTransitioning ? "opacity-0" : "opacity-100"
//               }`}
//             >
//               <h2 className="text-2xl font-bold text-center">
//                 {isRegister ? "Welcome Back!" : "Join FilmyFunds"}
//               </h2>
//               <p className="text-sm mt-2 text-center w-3/4">
//                 {isRegister
//                   ? "Don't have an account? Sign up now."
//                   : "Already have an account? Sign in here."}
//               </p>
//               <button
//                 onClick={toggleForm}
//                 className="mt-5 px-6 py-3 border-2 border-white rounded-md hover:bg-[#FFC727] hover:text-black transition w-[120px] flex justify-center"
//               >
//                 {isRegister ? "Register" : "Sign In"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ToggleAuthForm;
>>>>>>> 3df098db79cad768e74666302056600906ccddf0
