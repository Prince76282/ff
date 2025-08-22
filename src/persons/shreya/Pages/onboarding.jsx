import React, { useEffect, useRef, useState } from "react";
import { Cookie, Pencil } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar, { steps } from "./sidebaron";
import useApiHandler from "@/hooks/useApiCall";
import { useDispatch, useSelector } from "react-redux";
import { setOnboarded, setUser } from "@/redux/slices/profileSlice";
import { setUserDetails } from "@/redux/slices/profileSlice";
import { showErrorToast, showLoadingToast, showSuccessToast } from "@/lib/toastUtils";
import axios from "axios";
import Cookies from "js-cookie";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const apiCaller = useApiHandler();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.profile?.userDetails) || {};
  const [userEmail,setUserEmail]=useState("");
    
  
      
  
  
  useEffect(() => {
    const storedEmail = Cookies.get('user_email');
    setUserEmail(storedEmail);
   
  }, []);
  console.log("Email:",userEmail);

  console.log("User from Redux:", user);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

 const handleImageClick = () => {
  fileInputRef.current.click();
};

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
      console.log("Image upload response:", response);
      if (response?.data?.success) {

      dispatch(setUserDetails({profile_image:response?.data }));

      const userImage= useSelector((state => state.profile?.userDetails?.profile_image));
      console.log("User Image from Redux:", userImage);
      }
      

  
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




  
  const [formData, setFormData] = useState({
  bio: user.bio || "",
  firstName: user.firstName || "",
  lastName: user.lastName || "",
  email:  userEmail ||user?.email  ,
  phone: user.phone || "",
  dob: user.dob || "",
  place: user.place || "",
  pan: user.pan || "",
  gender: user.gender || "",
});



  const currentIndex = steps.findIndex((step) => step.path === location.pathname);
  const requiredFields = ['firstName', 'lastName', 'phone', 'dob', 'place', 'pan', 'gender'];
  const isAllFilled = requiredFields.every(field => formData[field].trim() !== '');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent numbers in name fields
    if (['firstName', 'lastName', 'place'].includes(name)) {
      if (/\d/.test(value)) return;
    }
    
    // Allow only numbers in phone field
    if (name === 'phone' && !/^\d*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: value
    });
  };

 const updateUserDetails = async () => {
  try {
    const payload = {
      alt_email: formData.email,
      alt_phone: formData.phone,
      alt_isd_no: "+91",
      dob: formData.dob,
      gender: formData.gender,
      bio: formData.bio,
      firstName: formData.firstName,
      lastName: formData.lastName,
      place: formData.place,
      pan: formData.pan,
    };

    // console.log("Payload for updateUserDetails:", payload);

    const response = await apiCaller("/profile/update_profile", "post", payload);
    // console.log("Response from updateUserDetails:", response);

    if (response?.data?.success) {
      // Update redux with latest user details
      dispatch(setUserDetails(payload));

     
      const onboardedFromStorage = JSON.parse(localStorage.getItem("onboarded"));

      // If gender exists and onboarded not yet stored, mark as onboarded
      if (formData.gender && !onboardedFromStorage) {
        dispatch(setOnboarded(true)); // this also sets it in localStorage via reducer
      }

      console.log("User details updated successfully");
      showSuccessToast("You Have Successfully Updated Your Onboarding Details");
      navigate(steps[currentIndex + 1].path);
    } else {
      console.error("Error updating user details:", response?.data?.message);
    }
  } catch (error) {
    console.error("Error in updateUserDetails:", error);
  }
};





 const handleNext = async () => {
  if (!isAllFilled) return;

  await updateUserDetails(); // ✅ actually call the update

  
};


  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="ml-auto flex-1 p-4 md:p-2">
        <div className="mb-3 rounded-xl bg-white p-3 shadow-sm font-semibold text-center">
          <span className="block sm:inline text-xl">
            Welcome to <span className="text-emerald-600">FilmyFunds</span>!
          </span>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">Complete Your Profile!</h2>
          <p className="mb-6 text-gray-600">
            Let's get to know you better – personalize your investment experience!
          </p>

          <div className="mb-8 flex items-center">
     <>
  <div className="relative w-16 h-16 rounded-full bg-emerald-50 overflow-hidden cursor-pointer flex items-center justify-center">
    {preview ? (
      <img src={preview} alt="Profile" className="h-full w-full object-cover rounded-full" />
    ) : (
      <span className="text-3xl text-emerald-500">+</span>
    )}

    <label
      htmlFor="profileImage"
      className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-100 transition"
      title="Edit profile picture"
    >
      <Pencil className="text-emerald-600 w-5 h-5" />
    </label>
  </div>

  <input
    type="file"
    id="profileImage"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />
</>

            <div className="ml-4 flex-1">
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                YOUR BIO
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Type your Bio..."
                className="w-full h-16 rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
                rows={4}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                FIRST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                LAST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
  <label className="mb-1 block text-sm font-medium text-emerald-600">
    EMAIL ADDRESS <span className="text-red-500">*</span>
  </label>
  <input
    type="email"
    name="email"
    value={userEmail ||formData.email}
    onChange={handleInputChange}
    className={`w-full rounded-lg p-3 ${
      formData.email ? "bg-gray-50 cursor-not-allowed" : "border border-gray-200 focus:border-emerald-500 focus:outline-none"
    }`}
    // disabled={!!formData.email}
    placeholder="Enter your email"
  />
</div>


            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                PHONE NUMBER <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
                pattern="[0-9]*"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                DOB <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                AADHAR NUMBER <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleInputChange}
                placeholder="Enter aadhar number"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                PLACE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleInputChange}
                placeholder="Enter address"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-emerald-600">
                GENDER <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                {["Female", "Male", "Other"].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={formData.gender === option}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <label className="mb-1 block text-sm font-medium text-emerald-600 p-7 px-1">
              <span className="text-red-500">* </span>
              <span className="text-black">Fields are mandatory. </span>
            </label>
          </div>

          <div className="flex justify-end">
            <button 
              className={`flex items-center rounded-lg px-6 py-2 text-white ${
                isAllFilled 
                  ? "bg-emerald-600 hover:bg-emerald-700" 
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!isAllFilled}
            >
              Next
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;