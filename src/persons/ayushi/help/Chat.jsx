import React, { useState } from "react";
import chatIcon from "../../../assets/ayushi_assets/img.png";
import NewConversation from "./NewConversation";

const Chat = () => {
  const [showNewConversation, setShowNewConversation] = useState(false);

  const handleNewConversation = () => {
    setShowNewConversation(true); // Show the component within same layout
  };

  return (
    <div className="w-full flex justify-center md:justify-end">
      <div className="w-full sm:w-[90%] md:w-[400px] bg-white m-2 sm:m-4 p-4 sm:p-6 rounded-lg shadow-md min-h-[80vh] md:min-h-[140vh] flex flex-col justify-between">
        {!showNewConversation ? (
          <>
            {/* Greeting and Info */}
            <div className="flex flex-col items-center lg:mt-24 sm:mt-12">
              <img
                src={chatIcon}
                className="w-48 sm:w-64 md:w-72 object-contain"
                alt="Chat Icon"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mt-2">
                Hello Jane Doe!
              </h2>
              <div className="text-center mt-4">
                <p className="text-md text-gray-800">
                  Welcome to live chat support
                </p>
                <p className="mt-2 text-sm text-gray-600 text-justify px-2 mb-2">
                  Remember to share all details so we can be more effective at
                  answering your questions.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="bg-white p-4 rounded-lg border-2 shadow-lg lg:mb-48 sm:mb-8">
              <h2 className="text-md text-gray-700 mb-1 font-medium">
                Start a conversation
              </h2>
              <p className="text-xs text-gray-500 mb-4">
                The support team typically replies in under 5 minutes.
              </p>
              <button
                onClick={handleNewConversation}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-sm transition duration-200"
              >
                New Conversation
              </button>
            </div>
          </>
        ) : (
          <NewConversation />
        )}
      </div>
    </div>
  );
};

export default Chat;
