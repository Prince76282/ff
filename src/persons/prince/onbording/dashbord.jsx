import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import HowYouFoundUs from "./onboarding";

export default function OnBording() {
  return (
    <div className="flex items-start h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {" "}
        {/* flex-1 makes it take remaining space */}
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          <HowYouFoundUs />
        </main>
      </div>
    </div>
  );
}
