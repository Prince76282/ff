import Overview from "../ayushi/components/Overview";
import Story from "../ayushi/components/Story";
import Cast from "../ayushi/components/Cast";
import Poster from "../ayushi/components/Poster";
import { Star } from "lucide-react";
import studios from "../../assets/ayushi_assets/xyz-studios.png";
import { useEffect, useState } from "react";
import MoviePosterCard from "./components/MoviePosterCard";
import useApiHandler from "@/hooks/useApiCall";
import MyInPrDe from "../gunjan/Investment/MyInPrDe";
import { useNavigate } from "react-router-dom";
import { showLoadingToast } from "@/lib/toastUtils";

const MovieCard = ({overviewDetails}) => {
  const [activeTab, setActiveTab] = useState("overview");
  // console.log("overview",overviewDetails);

  const HandleInvestmentfolio = () => {
      const availability_status = overviewDetails?.funding_status;
  
      if (availability_status === "Pre-Production") {
       
        navigate("/funding"); // Change this route to your actual target
  
      } else {
        if(availability_status=="In-Production")
        {
          
          navigate("/inpro")
         
        }
         else
          {
            navigate("/myivest")
          }
  
       
        
      }
    };
  

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview overviewDetails={overviewDetails} />;
      case "story":
        return <Story overviewDetails={overviewDetails} />;
      case "cast":
        return <Cast />;
      case "posters":
        return <Poster />;
      default:
        return <Overview overviewDetails={overviewDetails} />;
    }
  };

  return (
    <div className="flex flex-col   md:flex-col  w-full bg-white min-h-screen text-black px-2 md:px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 bg-white rounded-lg">
        <nav className="sticky">
          <div className="flex flex-wrap  justify-start pl-15 space-x-2.5 md:space-x-8 overflow-x-auto scrollbar-hide">
            {[
              { key: "overview", label: "Overview" },
              { key: "story", label: "Story & Theme" },
              { key: "cast", label: "Cast & Crew" },
              { key: "posters", label: "Posters & Trailers" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-medium text-sm md:text-lg px-3 py-2 ${activeTab === tab.key
                    ? "border-b-2 border-[#0C8281] text-[#37474F]"
                    : "text-[#37474F] hover:text-[#0C8281]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex cursor-pointer lg:flex-row sm:flex-col items-center space-x-3 mt-2 md:mt-0  lg:mr-16"
          onClick={HandleInvestmentfolio}>
          
          <img
            src={overviewDetails?.poster_image}
            alt="XYZ Studios"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          
          />
          <span className="text-base sm:text-lg md:text-xl font-medium">
            XYZ Studios
          </span>
        </div>
      </div>

      {/* Movie Image and Content Section */}
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row bg-white p-4  rounded-md gap-6">
        {/* Movie Poster */}
        <div className="flex flex-col md:flex-col items-center">
          <div>
            <h1 className="text-2xl mb-4 font-medium  pl-4 mt-2"> {overviewDetails?.product_name || "Killer Peter"}</h1>
            {/* Tab Navigation (Fixed Positioning) */}
            <MoviePosterCard overviewDetails={overviewDetails} />
          </div>
          <div className="flex items-center justify-center text-yellow-500 mt-3 md:mt-4">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                fill="currentColor"
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            ))}
            <div className="relative w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6">
              <Star className="absolute text-gray-300" />
              <Star
                className="absolute text-yellow-500"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            </div>
          </div>
        </div>

        <div className=" md:mt-0  ">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default MovieCard;

