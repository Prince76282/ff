import React from "react";
import Chat from "../ayushi/help/Chat";
import TutorialPage from "../ayushi/help/TutorialPage";
import Help from "../ayushi/help/helpsupport";

const HelpSupport = () => {
  return (
    <div className="flex flex-col lg:flex-row p-2 w-full">
      <div className="flex flex-col w-full lg:w-2/3">
        <div className="w-full">
          <TutorialPage />
        </div>
        <div className="w-full p-2">
          <Help />
        </div>
      </div>

      <div className="w-full h-full lg:w-1/3">
        <Chat />
      </div>
    </div>
  );
};

export default HelpSupport;