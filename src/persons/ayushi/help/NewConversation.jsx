import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import movie from "../../../assets/ayushi_assets/movie.png";
import char from "../../../assets/harsh_assets/checkdummy.png";

const NewConversation = () => {
  return (
    <div className="w-full flex justify-end">
      <div className="flex flex-col min-w-[520px] md:min-w-[350px] min-h-[80vh] md:min-h-[130vh] justify-between bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-[#0C8281] p-4 text-white text-lg font-semibold">
          New Conversation
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex items-start space-x-2">
            <img src={movie} alt="Support" className="w-12 h-12 rounded-full" />
            <div className="bg-[#E6F4F1] p-3 rounded-lg max-w-xs">
              <div className="font-medium text-sm">Support Team</div>
              <p className="text-xs text-gray-700">
                The support team typically replies in under 5 minutes.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-end space-x-2">
            <div className="bg-white border border-gray-300 p-3 rounded-lg w-[290px] h-[80px] text-right">
              <div className="text-sm font-medium text-gray-800">You</div>
              <p className="text-xs text-gray-700">Your query</p>
            </div>
            <img src={char} alt="User" className="w-12 h-12 rounded-full" />
          </div>
        </div>

        <div className="border-t px-4 py-2 flex items-center">
          <input
            type="text"
            placeholder="Type your query..."
            className="flex-1 px-4 py-2 text-sm border rounded-full outline-none"
          />
          <button className="ml-2 p-2 bg-teal-600 text-white rounded-full hover:bg-teal-700">
            <FaPaperPlane size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewConversation;
