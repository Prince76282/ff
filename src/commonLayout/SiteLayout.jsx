import Navbarcompo from "@/persons/harsh/common/Navbarcompo";
import Sidebarcompo from "@/persons/harsh/common/Sidebarcompo";
import { Outlet } from "react-router-dom";

const SiteLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (Fixed on the Left) */}
      <Sidebarcompo />

      {/* Main Section (Takes Remaining Space) */}
      <div className="flex flex-col flex-1">
        {/* Navbar (Fixed at the Top and Centered) */}
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <Navbarcompo />
        </div>

        {/* Spacer to prevent content from going under the navbar */}
        <div className="mt-[80px] p-4 bg-gray-100 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SiteLayout;
