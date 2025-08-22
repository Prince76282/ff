import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Content from "./persons/harsh/component/Content";
import Dashboard from "./persons/shreya/Pages/dashboard";
import Onsidebar from "./persons/shreya/Pages/onboarding";
import FansHome from "./persons/harsh/component/FansHome";
import BookSections from "./persons/prince/Booksection";
import Notif from "./persons/srishti/pages/NotificationsContent";
import MkPieChart from "./persons/mozammil/MkPieChart";
import ReviewModal from "./persons/srishti/pmodal";
import ReferralDashboard from "./persons/srishti/pages/ReferralDashboard";
import Otp from "./persons/harsh/component/Otp";
import CartPage from "./persons/prince/cartpage/Cartpage";
import ForgotCredential from "./persons/harsh/component/ForgotCredential";
import Profile from "../src/persons/shreya/Pages/profile";
import MovieCard from "./persons/ayushi/MovieCard";
import AuthComponent from "./persons/harsh/component/AuthComponent";
import PasswordModal from "./persons/harsh/component/PasswordModal";
import Help from "./persons/ayushi/HelpSupport";
import OtpVerification from "../src/persons/shreya/Pages/otpverify";
import Investflow from "../src/persons/shreya/Pages/investflow";
import WalletDashboard from "./persons/ayushi/WalletDashboard";
import HelpandSupport from "./persons/ayushi/HelpSupport";
import NotificationsContent from "./persons/srishti/pages/NotificationsContent";
import PrivateRoute from "./pages/customer/home/PrivateRoute";
import { FaRegFaceSadCry } from "react-icons/fa6";
import ProjectDetails from "./persons/gunjan/Project details/ProjectDetails";
// import OnBoarding from "./persons/shreya/Pages/onboarding"
import MyInPrDe from "./persons/gunjan/Investment/MyInPrDe";
import Funding from "./persons/gunjan/Investment/Funding ";
import InProduc from "./persons/gunjan/Investment/InProduc";
import ProfilePageon from "./persons/prince/new/ProfilePage";
import EarningWithdral from "./persons/gunjan/Investment/EarningWithdral";
import AddReview from "./persons/harsh/component/AddReview";
import OnBording from "./persons/prince/onbording/dashbord";

function App() {
  return (
    <div className="w-screen min-h-screen font-Poppins">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Content />} />
        <Route path="/onsidebar" element={<Onsidebar />} />
        <Route path="/otp-call" element={<ForgotCredential />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/onboarding/find" element={<OtpVerification />} />
        <Route path="/onboarding/investflow" element={<Investflow />} />
        <Route path="/reviewmodal" element={<ReviewModal />} />
        <Route path="/modal" element={<AuthComponent />} />

        {/* <Route path="/onboard" element={<Investflow></Investflow>}></Route> */}

        {/* Protected Routes */}
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/review" element={<AddReview />} />
          <Route path="/Moviecard" element={<MovieCard />} />
          <Route path="/home" element={<FansHome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/graph-pie" element={<MkPieChart />} /> */}
          <Route
            path="/project-details/:productid"
            element={<ProjectDetails />}
          />
          <Route path="/booksection" element={<BookSections />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<MovieCard />} />
          <Route path="/referral" element={<ReferralDashboard />} />
          <Route path="/wallet" element={<WalletDashboard />} />
          <Route path="/onboarding" element={<OnBording />} />
          <Route path="/notif" element={<NotificationsContent />} />
          <Route path="/help" element={<HelpandSupport />} />
          <Route path="/myinvest" element={<MyInPrDe />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/inpro" element={<InProduc />} />
          <Route path="/profilePageon" element={<ProfilePageon />} />
        </Route>

        {/* 404 Not Found Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-richBlack-900 text-white px-4 text-center">
              <FaRegFaceSadCry className="text-7xl text-yellow-300 animate-bounce mb-6" />
              <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
              <p className="text-2xl font-medium text-pure-greys-50 mb-2">
                Oops! Page Not Found
              </p>
              <p className="text-pure-greys-200 max-w-md">
                The page you're looking for doesn’t exist or has been moved.
                Please check the URL or go back to the homepage.
              </p>
              <a
                href="/"
                className="mt-6 inline-block px-6 py-3 bg-yellow-300 text-richBlack-900 rounded-xl font-semibold shadow-md transition-transform hover:scale-105"
              >
                Go to Homepage
              </a>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
