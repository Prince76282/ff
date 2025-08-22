import React, { useEffect, useState } from "react";
import { IoHome, IoNotificationsSharp, IoLogOut } from "react-icons/io5";
import { BsBarChartLineFill } from "react-icons/bs";
import { MdExplore, MdWifiCalling3 } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/Shreya_assets/FilmyFundsGreen.svg";
import checkdummy from "../../../assets/harsh_assets/checkdummy.png";
import { FaRegCopy } from "react-icons/fa";

import useApiHandler from "@/hooks/useApiCall";
import { showErrorToast, showLoadingToast, showSuccessToast } from "@/lib/toastUtils";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { changeUserState } from "@/redux/slices/authSlice";
import { setUserDetails } from "@/redux/slices/profileSlice";
import { MdOutlineNavigateNext } from "react-icons/md";
import NotificationsContent from "@/persons/srishti/pages/NotificationsContent";


/* --------------------------------------*/

const SidebarCompo = ({ isOpen, toggleMenu }) => {

  const apiCaller = useApiHandler();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.profile.userDetails);

  const [isNotifOpen, setIsNotifopen] = useState(false);

  const dispatch = useDispatch();
  // calling userdetails api and storing in redux state
  useEffect(() => {
    const getuserDetailsapi = async () => {
      try {
        const res = await apiCaller("/user/get_user", "GET");
        console.log("duce", res);
        const data = res?.data?.data?.user_details;
        const userimage = res?.data?.data?.profile_details?.image


        dispatch(setUserDetails({
          firstName: data?.first_name || "",
          lastName: data?.last_name || "",
          email: data?.email || "",
          gender: data?.gender || "",
          image: userimage || "",
        }));
      } catch (e) {
        console.log("Error fetching user details:", e.message);
      }
    };

    getuserDetailsapi();
  }, [dispatch]);
  console.log("Redux userDetails:", userDetails);



  const HandleLogout = async () => {
    const toastId = showLoadingToast("Loading..");

    try {

      const res = await apiCaller('/auth/logout', "get");
      console.log("resposes", res);
      if (res || res.status_code === 200) {
        Cookies.remove("access_token");


        dispatch(changeUserState(false));

        navigate("/");
      } else {

        showErrorToast("Logout failed. Please try again.");

      }
    }
    catch (e) {
      console.log("Some error occured while Logging out ", e.message);
      showErrorToast(e.message);

    } finally {
      // Ensure the loading toast is dismissed regardless of the outcome
      toast.dismiss(toastId);

    }
  }




  const [link, setLink] = useState("");
  const [copied, setCopied] = useState(false);
  const location = useLocation(); // Get current path

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5 sec
    });
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col gap-10 overflow-y-auto">
      <aside
        className={`fixed top-0 left-0 h-auto w-60 bg-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-1.5" : "-translate-x-full"
          } md:translate-x-0 md:flex md:flex-col overflow-y-auto`}
      >
        {/* Logo */}
        <Link to="/">
          <div className="mb-5">
            <img src={logo} alt="FilmyFunds Logo" className="h-12" />
          </div>
        </Link>

        {/* Menu */}
        <div className="mb-8">
          <h2 className="text-black mb-4">MENU</h2>
          <nav>
            <Link
              to="/home"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/home") ? "bg-teal-600 text-white" : "text-black hover:bg-teal-600 hover:text-white"}`}
              onClick={toggleMenu}
            >
              <IoHome className="mr-3" size={20} />
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/dashboard")
                  ? "bg-teal-600 text-white"
                  : "text-black hover:bg-teal-600 hover:text-white"
                }`}
              onClick={toggleMenu}
            >
              <BsBarChartLineFill className="mr-3" size={20} />
              My Investments
            </Link>
            <Link
              to="/BookSection"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/BookSection")
                  ? "bg-teal-600 text-white"
                  : "text-black hover:bg-teal-600 hover:text-white"
                }`}
              onClick={toggleMenu}
            >
              <MdExplore className="mr-3" size={20} />
              Explore
            </Link>
            <Link
              to="/cart"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/cart")
                  ? "bg-teal-600 text-white"
                  : "text-black hover:bg-teal-600 hover:text-white"
                }`}
              onClick={toggleMenu}
            >
              <FaShoppingCart className="mr-3" size={20} />
              Cart
            </Link>
            <Link
              to="/wallet"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/wallet")
                  ? "bg-teal-600 text-white"
                  : "text-black hover:bg-teal-600 hover:text-white"
                }`}
              onClick={toggleMenu}
            >
              <IoWallet className="mr-3" size={20} />
              Wallet
            </Link>
          </nav>
        </div>

        {/* General Section */}
        <div className="mb-8">
          <h2 className="text-black mb-4">GENERAL</h2>
          <nav>
            <Link to="/referral"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/referral")
                  ? "bg-teal-600 text-white"
                  : "text-black hover:bg-teal-600 hover:text-white"
                }`} onClick={toggleMenu}
            >
              <IoIosGift className="mr-2" size={22} />
              Rewards Program
            </Link>
            <a
              href="/notif"
              className="flex items-center p-2 font-medium text-black hover:text-white hover:bg-teal-600 rounded-lg mb-2"
              onClick={toggleMenu}
            >
              <IoNotificationsSharp className="mr-2" size={22} />
              Notifications
            </a>
            <Link to="/help"
              className={`flex items-center p-2 font-medium rounded-lg mb-2 
                ${isActive("/help")
                  ? "bg-teal-600 text-white"
                  : "text-black hover:bg-teal-600 hover:text-white"
                }`} onClick={toggleMenu}
            >
              
              <MdWifiCalling3 className="mr-2" size={22} />
              Help & Support
            </Link>
            <a

              className="flex items-center p-2 font-medium cursor-pointer text-black hover:text-white hover:bg-teal-600 rounded-lg mb-2"
              onClick={HandleLogout}
            >
              <IoLogOut className="mr-2" size={24} />
              Logout
            </a>
          </nav>
        </div>

        {/* User Profile Section */}
        <div className="mb-8 flex flex-col gap-0.5 items-center justify-center">
          <Link to="/profile">
            <div className="w-[120px] h-[120px] relative rounded-full overflow-hidden">
              <img
                src={userDetails?.image || checkdummy}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="relative flex flex-col items-center  justify-center text-center">
            <span className="text-lg font-semibold mr-[16px]">
              {userDetails?.firstName} {userDetails?.lastName}
            </span>

            <span className="text-black text-sm pt-3">
              {userDetails?.email || "NA"}
            </span>

            <div className="w-full mt-5 h-[2px] bg-black opacity-45"></div>

            <span className="text-[10px] mt-1.5 font-semibold">
              Invite Your Friends to join FilmyFunds
            </span>
            <Link to="/profile">
              <div className="absolute cursor-pointer right-[-10px] z-20 bg-teal-500 shadow-md bg-amber-50 top-0.5 w-[24px] h-[24px] rounded-full  flex items-center justify-center">
                <MdOutlineNavigateNext className="text-2xl text-black  rounded-xl  " />
              </div>
            </Link>
          </div>


          {/* Copy Link Box */}
          <div className="relative w-full">
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-[206px] p-0.5 text-black bg-gray-100 border border-white rounded-md outline-none"
            />
            <button
              onClick={handleCopy}
              className="absolute top-1/2 -right-3 text-sm -translate-y-1/2 flex items-center gap-2 p-0.5 pr-0.5 bg-black opacity-85 text-white rounded-md hover:bg-blue-700 transition"
            >
              <FaRegCopy className="text-xs" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Know More Link */}
          <Link to="/referral">
            <u>
              <span className="text-sm">Know More</span>
            </u>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SidebarCompo;
