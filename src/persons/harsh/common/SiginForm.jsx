import { useRef, useState } from "react";
import Cookies from "js-cookie";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useApiHandler from "@/hooks/useApiCall";
import { changeUserState } from "@/redux/slices/authSlice";
import { showErrorToast } from "@/lib/toastUtils";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import PasswordModal from "../component/PasswordModal";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { setUserDetails } from "@/redux/slices/profileSlice";
import { setOnboarded } from "@/redux/slices/profileSlice";



const SiginForm = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const apiCaller = useApiHandler();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const userEmailRef = useRef(null);
 
 const userDetails = async () => {
  try {
    const res = await apiCaller("/user/get_user", "get");

    if (res.data?.success || res.data?.status_code === 200) {
      const user = res.data?.data;
      const gender = user?.profile_details?.gender;

      // console.log("gender", gender);

      // Dispatch full user details to Redux
      

      // Get existing onboarded value from localStorage
      const onboardedFromStorage = JSON.parse(localStorage.getItem("onboarded"));

      // If user is onboarded (has gender) and not yet stored, persist it
      if (gender && !onboardedFromStorage) {
        dispatch(setOnboarded(true)); // also stores in localStorage via slice
      }

      // If user not onboarded, ensure Redux reflects that (if needed)
      if (!gender) {
        dispatch(setOnboarded(false));
      }

      // Return true if onboarding is required (i.e., gender not present)
      return !gender;
    } else {
      console.error("Failed to fetch user details:", res.data?.message);
      return false;
    }
  } catch (e) {
    console.error("Error fetching user details:", e.message);
    return false;
  }
};





  const onSubmit = async (data) => {
    setLoading(true); // ✅ Start loading
    const payload = {
      email: data?.email,
      password: data?.password,

    };
    // console.log("Payload", payload);
   userEmailRef.current = data?.email;
   console.log("userEmail", userEmailRef.current);

    try {
      const res = await apiCaller("/auth/signin", "post", payload);

      const token = res.data?.data?.AuthenticationResult?.AccessToken;
      dispatch(setUserDetails({ email: data?.email }));


      if (res?.data?.success || res.data?.status_code === 200) {
        dispatch(changeUserState(true));
         Cookies.set('user_email', data?.email, {
          path: '/',
          expires: 7,          // optional: persist for 7 days
          sameSite: 'Lax',     
        });

        // console.log("Login Response:", res.data?.data);

        const token = res.data?.data?.AuthenticationResult?.AccessToken;
        const id_token = res.data?.data?.AuthenticationResult?.IdToken;
        const refreshToken = res.data?.data?.AuthenticationResult?.RefreshToken;

        if (token || id_token || refreshToken) {
          if (token) {
            Cookies.set("access_token", token, {
              expires: 1, // 1 day
               secure: false,
              sameSite: "Lax",
            });
            console.log("Saved?", Cookies.get("access_token"));

          }

          if (id_token) {
            Cookies.set("id_token", id_token, {
              expires: 1,
               secure: false,
              sameSite: "Lax",
            });
          }

          if (refreshToken) {
            Cookies.set("refresh_token", refreshToken, {
              expires: 7, // Typically longer lifespan
               secure: false,
              sameSite: "Lax",
            });
          }

          toast.success("Login successful! 🎉");
          const needsOnboarding = await userDetails();

          if (needsOnboarding) {
            navigate("/onsidebar");
          } else {
            navigate("/home");
          }



        } else {
          toast.error("Token not received.");
        }
      }
      else {
        toast.error(res.data?.message || "Login failed. Please try again.");
      }
    } catch (e) {
      console.log("Login error:", e.message);
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
    } finally {
      setLoading(false); // ✅ End loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 sm:p-6">
      <p className="text-lg sm:text-xl text-black">
        Join the World of Movie Investments!
      </p>

      {!forgotPasswordModal ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 max-w-md w-full  p-6 sm:p-8"
        >
          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required" })}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">
              Password
            </label>
            <div className="relative">
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                {...register("password", { required: "Password is required" })}
                className="px-3 py-2 border flex flex-row justify-between border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-yellow-500 w-full"
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                onClick={() => setShowLoginPassword((prev) => !prev)}
              >
                {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end items-center w-full text-sm sm:text-base">
            <span
              onClick={() => setForgotPasswordModal(true)}
              className="text-[#0C8281] hover:underline cursor-pointer"
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            disabled={loading} // ✅ Disable while loading
            className={`bg-[#0C8281] text-white py-2 sm:py-3 rounded-md transition duration-300 ${loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-yellow-600 cursor-pointer"
              }`}
          >
            {loading ? "Logging in..." : "Log In"} {/* ✅ Show spinner text */}
          </button>

          <div className="flex items-center w-full my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm sm:text-base text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button
            type="button"
            className="border border-black hover:bg-yellow-600 flex flex-row gap-2 text-lg sm:text-xl justify-center items-center text-black py-2 sm:py-3 rounded-sm transition duration-300"
          >
            <FcGoogle className="text-2xl" />
            <span>Log In with Google</span>
          </button>

          <p className="text-black mx-auto">
            Don't have an Account?{" "}
            <span
              onClick={toggleForm}
              className="text-[#0C8281] cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </form>
      ) : (
        <PasswordModal onClose={() => setForgotPasswordModal(false)} Email= {userEmailRef.current} />
      )}
    </div>
  );
};

export default SiginForm;

// import React, { useState } from 'react';
// import Cookies from "js-cookie";
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import useApiHandler from '@/hooks/useApiCall';
// import { changeUserState } from '@/redux/slices/authSlice';
// import { showErrorToast } from '@/lib/toastUtils';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import PasswordModal from '../component/PasswordModal';
// import { FaEye, FaEyeSlash } from 'react-icons/fa6';

// const SiginForm = ({ toggleForm }) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const apiCaller = useApiHandler();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
//     const [showLoginPassword, setShowLoginPassword] = useState(false);

//     const handleGoogleSuccess = async (googleResponse) => {
//         try {
//             const res = await apiCaller('/auth/google', 'post', {
//                 token: googleResponse.access_token
//             });

//             if (res?.data?.success || res.data?.status_code === 200) {
//                 const token = res.data?.data?.AuthenticationResult?.AccessToken;
//                 if (token) {
//                     Cookies.set("access_token", token, {
//                         expires: 1,
//                         secure: true,
//                         sameSite: "strict",
//                     });
//                     dispatch(changeUserState(true));
//                     navigate("/home");
//                 } else {
//                     toast.error("Token not received.");
//                 }
//             } else {
//                 toast.error(res.data?.message || "Google login failed.");
//             }
//         } catch (error) {
//             console.error("Google login error:", error);
//             showErrorToast(
//                 "Google login failed",
//                 {
//                     duration: 4000,
//                     position: "top-center",
//                     icon: "❌",
//                     style: {
//                         background: "#FF4B4B",
//                         color: "white",
//                         fontWeight: "bold",
//                     },
//                 },
//                 true
//             );
//         }
//     };

//     const googleLogin = useGoogleLogin({
//         onSuccess: handleGoogleSuccess,
//         onError: (error) => {
//             console.log('Google Login Failed:', error);
//             toast.error("Google login failed. Please try again.");
//         },
//     });

//     const onSubmit = async (data) => {
//         const payload = {
//             email: data?.email,
//             password: data?.password,
//         };

//         try {
//             const res = await apiCaller('/auth/signin', "post", payload);

//             if (res?.data?.success || res.data?.status_code === 200) {
//                 dispatch(changeUserState(true));
//                 const token = res.data?.data?.AuthenticationResult?.AccessToken;
//                 if (token) {
//                     Cookies.set("access_token", token, {
//                         expires: 1,
//                         secure: true,
//                         sameSite: "strict",
//                     });
//                     navigate("/home");
//                 } else {
//                     toast.error("Token not received.");
//                 }
//             } else {
//                 toast.error(res.data?.message || "Login failed. Please try again.");
//             }
//         } catch (e) {
//             console.log("Login error:", e.message);
//             showErrorToast(
//                 "Something went wrong",
//                 {
//                     duration: 4000,
//                     position: "top-center",
//                     icon: "❌",
//                     style: {
//                         background: "#FF4B4B",
//                         color: "white",
//                         fontWeight: "bold",
//                     },
//                 },
//                 true
//             );
//         }
//     };

//     return (
//         <div className="flex flex-col justify-center items-center gap-4 p-4 sm:p-6">
//             <p className="text-lg sm:text-xl text-black">Join the World of Movie Investments!</p>

//             {!forgotPasswordModal ? (
//                 <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 max-w-md w-full p-6 sm:p-8">
//                     <div className="flex flex-col">
//                         <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Email</label>
//                         <input
//                             type="email"
//                             placeholder="Enter Your Email"
//                             {...register("email", { required: "Email is required" })}
//                             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
//                         />
//                         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//                     </div>

//                     <div className="flex flex-col">
//                         <label className="text-sm sm:text-base font-medium mb-1 text-[#0C8281]">Password</label>
//                         <div className="relative">
//                             <input
//                                 type={showLoginPassword ? "text" : "password"}
//                                 placeholder="Enter Your Password"
//                                 {...register("password", { required: "Password is required" })}
//                                 className="px-3 py-2 border flex flex-row justify-between border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-yellow-500 w-full"
//                             />
//                             <button
//                                 type="button"
//                                 className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
//                                 onClick={() => setShowLoginPassword((prev) => !prev)}
//                             >
//                                 {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>
//                         {errors.password && (
//                             <p className="text-red-500 text-sm mt-1">
//                                 {errors.password.message}
//                             </p>
//                         )}
//                     </div>

//                     <div className="flex justify-end items-center w-full text-sm sm:text-base">
//                         <span
//                             onClick={() => setForgotPasswordModal(true)}
//                             className="text-[#0C8281] hover:underline cursor-pointer"
//                         >
//                             Forgot Password?
//                         </span>
//                     </div>

//                     <button
//                         type="submit"
//                         className="bg-[#0C8281] cursor-pointer hover:bg-yellow-600 text-white py-2 sm:py-3 rounded-md transition duration-300"
//                     >
//                         Log In
//                     </button>

//                     <div className="flex items-center w-full my-4">
//                         <div className="flex-grow h-px bg-gray-300"></div>
//                         <span className="px-4 text-sm sm:text-base text-gray-500">OR</span>
//                         <div className="flex-grow h-px bg-gray-300"></div>
//                     </div>

//                     <button
//                         type="button"
//                         onClick={googleLogin}
//                         className="border border-black hover:bg-yellow-600 flex flex-row gap-2 text-lg sm:text-xl justify-center items-center text-black py-2 sm:py-3 rounded-sm transition duration-300"
//                     >
//                         <FcGoogle className="text-2xl" />
//                         <span>Log In with Google</span>
//                     </button>

//                     <p className="text-black mx-auto">Don't have an Account?
//                         <span onClick={toggleForm} className="text-[#0C8281] cursor-pointer"> Sign up</span>
//                     </p>
//                 </form>
//             ) : (
//                 <PasswordModal onClose={() => setForgotPasswordModal(false)} />
//             )}
//         </div>
//     );
// };

// export default SiginForm;