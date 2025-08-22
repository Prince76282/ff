import React, { useState } from "react";
import Sidebarcompo from "../../shreya/Components/Sidebarcompo"; // 
import NotificationsContent from "../../../persons/srishti/components/NotificationsContent"; // adjust path


const DashboardLayout = ({ children }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => setShowNotifications(!showNotifications);

  return (
    <>
      <Sidebarcompo onNotificationClick={toggleNotifications} />
      <main className="ml-[250px] p-5">{children}</main>

      {showNotifications && (
        <NotificationsContent onClose={() => setShowNotifications(false)} />
      )}
    </>
  );
};

export default DashboardLayout;
