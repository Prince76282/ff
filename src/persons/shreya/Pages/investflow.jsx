import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Sidebar, { steps } from "./sidebaron";
import { MdOutlineNavigateNext } from "react-icons/md";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const HandleHome = () => {

    navigate("/home");


  }

  return (
    <div className="min-h-screen bg-gray-50 flex ">
      <Sidebar />

      <div className="ml-auto flex-1 p-4 md:p-2">
        <div className="mb-3 rounded-xl bg-white p-3 shadow-sm font-semibold text-center">
          <span className="block sm:inline text-xl">
            Welcome to <span className="text-emerald-600">FilmyFunds</span>!
          </span>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">Investment Flow</h2>
          <p className="mb-6 text-gray-600">
            Your First Investment Made Easy!
          </p>

          {/* Video with thumbnail */}
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md">
            {!isPlaying ? (
              <div
                className="relative cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="/images/investment-thumbnail.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="black" />
                    <polygon points="34,26 58,42 34,58" fill="white" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/RCv8cCymLYE"
                  title="Investment Intro Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

        </div>
      <div className="mt-5 flex justify-end mr-[100px]">
  <button
    className="bg-green-500 w-[200px] text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 flex items-center justify-center gap-2"
    onClick={HandleHome}
  >
    Next
    <MdOutlineNavigateNext size={20} />
  </button>
</div>



      </div>

    </div>
  );
}

export default App;
