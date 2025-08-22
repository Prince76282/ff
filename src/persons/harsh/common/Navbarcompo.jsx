import useApiHandler from "@/hooks/useApiCall";
import NotificationsContent from "@/persons/srishti/pages/NotificationsContent";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useSelector } from "react-redux";
import NftCards from "../../prince/NftCard";
import SearchItems from "../component/SearchItems";

const Navbarcompo = ({ accountname, onSearch}) => {
  const apicaller= useApiHandler();
  const [query, setQuery] = useState("");
  const [isNotifOpen,setIsNotifOpen] = useState(false);
  const userState= useSelector((state)=>state.profile);
  console.log("state",userState);
  const FirstName=userState?.userDetails?.firstName;
  const LastName= userState?.userDetails?.lastName;
  const [debouncedQuery, setDebouncedQuery] = useState("");
  // animate slider using motion.div
  const [searcharray,setsearchArray]= useState([]);
 
  const [showSearchResults, setShowSearchResults] = useState(false);

 

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Actual API call triggered after debounce
 useEffect(() => {
  const fetchSearchResults = async () => {
    if (debouncedQuery.trim() === "") return;

    try {
      const response = await apicaller(
        `/product/pro_search?product_query=${debouncedQuery}`,
        "GET"
      );
      setsearchArray(response?.data?.data?.products);
      if (response?.data?.data?.products?.length > 0) {
        setShowSearchResults(true);
      }
      if (onSearch) onSearch(debouncedQuery);
    } catch (e) {
      console.error("Search failed", e);
    }
  };

  fetchSearchResults();
}, [debouncedQuery]);


  // Handle input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
   <>
  {/* Navbar */}
  <div className="lg:w-full lg:h-[75px] w-auto lg:p-10 flex lg:flex-row flex-col gap-3.5 items-center p-7 justify-between font-Poppins rounded-lg shadow-md">
    {/* Account Name */}
    <span className="text-xl font-semibold">{FirstName} {LastName}</span>

    {/* Search Input */}
    <div className="flex flex-row lg:gap-3 gap-3 lg:w-1/3 w-full items-center">
      <div className="w-full flex flex-col">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Notification Icon */}
      <div onClick={() => setIsNotifOpen(true)} className="bg-gray-300 rounded-full p-2">
        <MdOutlineNotificationsActive className="text-3xl" />
      </div>

      {/* Notification Modal */}
      {isNotifOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl p-5 shadow-lg relative">
            <NotificationsContent setIsNotifOpen={setIsNotifOpen} />
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Search Results Overlay */}
  {showSearchResults && (
    <SearchItems
      searcharray={searcharray}
      onClose={() => setShowSearchResults(false)}
    />
  )}
</>

  );
};

export default Navbarcompo;
