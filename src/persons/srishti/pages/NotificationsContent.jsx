import { useState } from "react";
import logo from "../../../assets/srishti/FilmyFundsGreen.svg";
import { ImCancelCircle } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const NotificationsContent = ({ setIsNotifOpen }) => {
  const [activeTab, setActiveTab] = useState("All");
  const location = useLocation();
  const navigate= useNavigate();

 const HandleNavigate = ()=>{
  navigate(-1);
 }
  const isNotificationPage= location?.pathname==='/notif'
  const [todayNotifications, setTodayNotifications] = useState([
    {
      id: 1,
      text: "Your investment in [Movie X] is now live! Track its progress in your dashboard.",
      time: "Updated 5 hours ago",
      type: "My Investment Alerts",
      read: false,
    },
    {
      id: 2,
      text: "You’ve earned [amount] from [Movie X]! Check your updated balance.",
      time: "Now",
      type: "My Investment Alerts",
      read: false,
    },
    {
      id: 3,
      text: "[Movie X] has started production! Stay tuned for exclusive updates.",
      time: "3h ago",
      type: "Explore & Invest",
      read: false,
    },
  ]);

  const [yesterdayNotifications, setYesterdayNotifications] = useState([
    {
      id: 4,
      text: "New investment opportunity: [Movie Y] is now open! Be among the first to invest.",
      time: "Now",
      type: "Explore & Invest",
      read: false,
    },
    {
      id: 5,
      text: "Behind-the-scenes exclusive: Meet the cast of [Movie X]!",
      time: "05:15 PM",
      type: "Explore & Invest",
      read: false,
    },
    {
      id: 6,
      text: "Your investment in [Movie X] was successful! Thank you for investing.",
      time: "3h ago",
      type: "My Investment Alerts",
      read: false,
    },
  ]);

  const tabs = ["All", "My Investment Alerts", "Explore & Invest"];

  const markAllAsRead = () => {
    setTodayNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
    setYesterdayNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
    setActiveTab("All");
  };

  const filterNotifications = (notifications) => {
    if (activeTab === "All") return notifications;
    return notifications.filter((n) => n.type === activeTab);
  };

  const handleExploreClick = (id) => {
    setTodayNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    setYesterdayNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const filteredToday = filterNotifications(todayNotifications);
  const filteredYesterday = filterNotifications(yesterdayNotifications);

  const renderNotification = (note) => (
    <div key={note.id} className="flex items-start py-3">
      <div>
        <div className="w-[52px] h-[52px] mr-3 relative rounded-full overflow-hidden bg-white border-1 border-black flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full object-contain rounded-full"
          />
          {!note.read && (
            <span className="absolute bottom-2 right-1 translate-x-1/8 translate-y-1/6 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <p className="text-sm text-gray-800">{note.text}</p>
        <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
          <button
            className="w-[92px] h-[26px] text-xs font-bold text-black border-2 border-transparent bg-white border-gradient hover:shadow-md hover:scale-105 transition-transform"
            style={{
              borderImageSlice: 1,
              borderImageSource: "linear-gradient(to right, #9DD4C6, #FFE655)",
              background:
                "linear-gradient(white, white) padding-box rounded-2xl, linear-gradient(to right, #9DD4C6, #FFE655) border-box",
            }}
            onClick={() => handleExploreClick(note.id)}
          >
            EXPLORE
          </button>
          <span className="text-xs text-gray-500">{note.time}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl p-5 shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between mt-5 items-center flex-wrap">
          <h2 className="text-lg font-bold">Notifications</h2>
          <button
            onClick={markAllAsRead}
            className="lg:px-4 md:px-4 lg:py-2 mr-2.5 lg:text-[13px] md:py-4 lg:text-md font-semibold bg-[#D9EDE8] rounded mt-2"
          >
            Mark all as read
          </button>
        </div>
        {
          !isNotificationPage&& (
           
           <button
           onClick={() => setIsNotifOpen(false)} // Close modal when clicked
           className="absolute top-0.5 right-1 text-2xl font-bold text-gray-600 hover:text-black"
         >
           <ImCancelCircle className="text-3xl" />
         </button>
            


          )
            
          
        }
        <button
            onClick={HandleNavigate} // Close modal when clicked
            className="absolute top-0.5 left-2 p-1.5 rounded-md  bg-[#D9EDE8] text-2xl font-bold text-gray-600 hover:text-black"
          >
            <IoMdArrowBack  className="text-3xl" />
          </button>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-8 mt-6 text-[11px] md:text-lg font-bold">
          {tabs.map((tab) => {
            const totalCount =
              todayNotifications.length + yesterdayNotifications.length;
            return (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer pb-1 transition-colors ${activeTab === tab
                    ? "border-b-2 border-[#0C8281] text-[#0C8281]"
                    : "text-black hover:text-[#0C8281]"
                  }`}
              >
                {tab === "All" ? (
                  <>
                    <span className="block md:hidden">
                      All ({totalCount})
                    </span>
                    <span className="hidden md:block">All {totalCount}</span>
                  </>
                ) : (
                  tab
                )}
              </span>
            );
          })}
        </div>

        {/* Today Section */}
        <h4 className="mt-6 text-[#0C8281] font-semibold">Today</h4>
        {filteredToday.length > 0 ? (
          filteredToday.map(renderNotification)
        ) : (
          <p className="text-sm text-gray-500">No new notifications today.</p>
        )}

        {/* Yesterday Section */}
        <h4 className="mt-6 text-[#0C8281] font-semibold">Yesterday</h4>
        {filteredYesterday.length > 0 ? (
          filteredYesterday.map(renderNotification)
        ) : (
          <p className="text-sm text-gray-500">
            No notifications from yesterday.
          </p>
        )}
      </div>
    </div>
  );
};

export default NotificationsContent;
