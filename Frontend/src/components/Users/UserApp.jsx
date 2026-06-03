import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Jobs from "./Job/OpportunityBoard";
import Courses from "./Courses/Courses";
import ResumeAssistant from "./Resume-Assistant/ResumeAssistant"; 
import Settings from "./Settings/Setting";
import ProfilePage from "./NavBar/Profile/ProfilePage";

// 🔥 Layout wrapper
function Layout() {
  const location = useLocation();
  const isProfilePage = location.pathname.includes("/profile");

  return (
    <div className="relative min-h-screen bg-[#f5f6fa]">
      {!isProfilePage && <Navbar />}

      <div className={isProfilePage ? "pt-0" : "pt-4"}>
        <Outlet />
      </div>
    </div>
  );
}

export default function UserApp() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<Layout />}>

        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Main pages */}
        <Route path="jobs" element={<Jobs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="resume-assistant" element={<ResumeAssistant />} />
        <Route path="settings" element={<Settings />} />

        {/* 🔥 ONE SINGLE PROFILE ROUTE */}
        <Route path=":section?/profile" element={<ProfilePage />} />

      </Route>
    </Routes>
  );
}