import Sidebarcompo from "../../harsh/common/Sidebarcompo";
import InvestmentCards from "../../harsh/component/InvestmentCards";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom"; //
//  Import Link from react-router-dom
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import profile from "../../../assets/Shreya_assets/profile.png";
import useApiHandler from "@/hooks/useApiCall";
import { showErrorToast, showSuccessToast } from "@/lib/toastUtils";
import ResetPasswordModal from "@/persons/harsh/component/ResetPasswordModal";
import ResetPassword from "@/persons/harsh/component/ResetPassword";
import { FiEdit } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/profileSlice";

function App() {
  const apiCaller = useApiHandler();
  const [isEditing, setIsEditing] = useState(false);
  const [updateddetails, setUpdateddetails] = useState();
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const userImage= useSelector((state) => state.profile.userDetails?.image);
  console.log("userImage",userImage);

  // state variable for resetting password

  const [showResetPassword, setShowResetPassword] = useState(false);
 


  // State for toggles
  const [emailNotification, setEmailNotification] = useState(true);
  const [investmentAlerts, setInvestmentAlerts] = useState(true);
  const [userid,setUserid]=useState("");

  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    pan: "*123A",
    place: "",
    gender: "",
    bio: "Hi, I'm Jane! I'm a sucker for romcom and sitcoms. Currently obsessed with Big Bang Theory."
  });

  useEffect(() => {
    const getuserDetails = async () => {
      try {
        const res = await apiCaller("/user/get_user", "GET");
        console.log("response of user", res);
        const data = res?.data?.data?.user_details;
        setUpdateddetails(res?.data?.data?.profile_details);
        const profile_details = res?.data?.data?.profile_details;
          
        // console.log("updated", updateddetails)
        // console.log("data", data);



        setUserData(data);

        if (res.status === 200 || res.data) {
          setUserid(data?.user_id);
          console.log("userId", userid);

        }
      } catch (e) {
        console.log(e.message);
      }
    };

    getuserDetails();
  }, []);

  useEffect(() => {
    dispatch(setUser(userData));
    
  }, [userData]);




  //  image change apiiiiii  

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file); // Use the key your backend expects


  
    try {
      const response = await apiCaller("/profile/upload_profile_pic", "post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Preview for frontend
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
  
      // Optional: update state if needed
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));
  
      console.log("Image uploaded:", response.data);
      showSuccessToast("Image uploaded SUccessfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      setFormData(prev => ({
        ...prev,
        firstName: userData.first_name || "NA",
        lastName: userData.last_name || "Doe",
        email: userData.email || "NA",
        phone: (userData.isd_no || "+") + (userData.phoneNO || "NA")
      }));
    }
  }, [userData]);




  // State for reset password modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata", formData);
    setIsEditing(false);
    console.log("hii");
    // Here you would typically send the data to your backend

    const profilePayload = {

      alt_email: formData?.email,
      alt_phone: formData?.phone,
      alt_isd_no: "+91",
      dob: formData?.dob || null,


      gender: formData?.gender,

    };
    try {
      const updateprofileres = await apiCaller("/profile/update_profile", "post", profilePayload);
      console.log("profile", updateprofileres);

      if (updateprofileres?.status_code === 200 || updateprofileres.success === true) {
        showSuccessToast("Profile Updated Successfully");



      }
      console.log("updated response", updateprofileres);


    }
    catch (e) {
      console.log(e.message);
      showErrorToast("Something Went Wrong");
    }


  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Toggle handlers
  const handleEmailNotificationToggle = () => {
    setEmailNotification((prev) => !prev);
  };

  const handleInvestmentAlertsToggle = () => {
    setInvestmentAlerts((prev) => !prev);
  };

  // Reset Password Modal Handlers
  const handleResetPassword = () => {
    setIsModalOpen(true);

  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEmail("");
    setCode("");
  };

  const handleSendCode = () => {
    // Logic to send the code to the user's email
    console.log(`Sending code to ${email}`);
    handleModalClose();


  };
  console.log("userData",userData);

  return (
    <div className="flex justify-center items-center w-full min-h-screen ">
    <div className="w-full p-2 md:p-7">
      {/* Personal Details */}
      <section className="bg-white mx-auto rounded-xl p-6 mb-4 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <h2 className="text-xl font-semibold">Personal Details</h2>
          <div className="mt-4 md:mt-0">
            {!isEditing ? (
              <button
                onClick={toggleEdit}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                EDIT
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
                >
                  SAVE
                </button>
                <button
                  onClick={toggleEdit}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  CANCEL
                </button>
              </div>
            )}
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3 relative w-fit mx-auto">
  <img
    src={userImage ||  updateddetails?.image|| profile }
    alt="Profile"
    className="rounded-full w-32 h-32 object-cover mx-auto"
  />

  {isEditing && (
    <>
      <label
        htmlFor="profileImage"
        className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-100 transition"
        title="Edit profile picture"
      >
        <FiEdit className="text-gray-700 w-5 h-5" />
      </label>
      <input
        type="file"
        id="profileImage"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </>
  )}

  {isEditing ? (
    <textarea
      name="bio"
      value={formData.bio}
      onChange={handleChange}
      className="mt-4 p-4 border border-yellow-200 bg-yellow-50 rounded-lg w-full"
      rows="4"
    />
  ) : (
    <div className="mt-4 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
      <p className="text-sm text-gray-700">{formData.bio}</p>
    </div>
  )}
</div>
  
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "FIRST NAME", name: "first_name", type: "text" },
              { label: "LAST NAME", name: "last_name", type: "text" },
              { label: "EMAIL ADDRESS", name: "email", type: "email" },
              { label: "PHONE NUMBER", name: "phoneNO", type: "tel" },
              { label: "DOB", name: "dob", type: "date" },
              { label: "PAN NUMBER", name: "pan", type: "text", static: true },
              { label: "PLACE", name: "place", type: "text" },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-teal-600 mb-2">
                  {field.label}
                </label>
  
                {field.static ? (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {userData?.[field.name] || updateddetails?.[field.name] || "NA"}
                  </div>
                ) : isEditing ? (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg w-full"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {field.name === "dob" && updateddetails?.dob ? (
                      new Date(updateddetails.dob).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                    ) : (
                      userData?.[field.name] || updateddetails?.[field.name] || "NA"
                    )}
                  </div>
                )}
              </div>
            ))}
  
            {/* GENDER FIELD */}
            <div>
              <label className="block text-sm font-medium text-teal-600 mb-2">
                GENDER
              </label>
              {isEditing ? (
                <div className="flex space-x-4">
                  {["Female", "Male", "Other"].map((genderOption) => (
                    <label key={genderOption} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={genderOption}
                        checked={formData.gender === genderOption}
                        onChange={handleChange}
                        className="text-teal-600"
                      />
                      <span className="ml-2">{genderOption}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg">
                  {updateddetails?.gender || "NA"}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
  
      
       {/* <section className="mb-8 flex justify-center"> Center the button */}
        {/* <Link to="/dashboard"> {/* Link to My Investments page */}
          
          {/* </button>
        </Link> */}
      {/* </section>  */}
  
      {showResetPassword && (
        <div className="fixed inset-0 z-50 backdrop-blur-xs  flex items-center justify-center">
          <ResetPassword resetPassword={setShowResetPassword} />
        </div>
      )}
  
      {/* Security & Settings */}
      <section className="bg-white rounded-xl p-6 w-full mx-auto">
        <h2 className="text-xl font-semibold mb-6">Security & Settings</h2>
        <div className="space-y-6">
          {/* Change Password */}
          <div className="flex items-center justify-between py-4 border-b">
            <div>
              <h3 className="font-medium mb-1">Change Password</h3>
              <p className="text-sm text-gray-500">
                Reset your password every once in a while for better security
              </p>
            </div>
            <button
              onClick={() => setShowResetPassword(true)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Reset Password
            </button>
          </div>
  
  
          {/* Email Notification */}
          <div className="flex items-center justify-between py-4 border-b">
            <div>
              <h3 className="font-medium mb-1">Email Notification</h3>
              <p className="text-sm text-gray-500">
                Receive updates about your investments
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={emailNotification}
                onChange={handleEmailNotificationToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
            </label>
          </div>
  
          {/* Investment Alerts */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="font-medium mb-1">Investment Alerts</h3>
              <p className="text-sm text-gray-500">
                Get notified about new investment opportunities
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={investmentAlerts}
                onChange={handleInvestmentAlertsToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
            </label>
          </div>
        </div>
      </section>
    </div>
  </div>
  

  );
}

export default App;