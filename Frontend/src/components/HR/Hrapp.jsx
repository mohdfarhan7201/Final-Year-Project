import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import JobsPosting from "./JobPosting/JobBoard";
import CreateJobPost from "./JobPosting/CreatePost/CreatePostParent";
import Analytics from "./Analytics/Analytic";
import Settings from "./Settings/Setting";
import ProfilePage from "./NavBar/Profile/ProfilePage";
import Candidates from "./Candidates/CandidatesPage";

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

export default function HRApp() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<Layout />}>

        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Main pages */}
        <Route path="jobs" element={<JobsPosting />} />
        <Route path="jobs/create-post" element={<CreateJobPost />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />

        {/* 🔥 ONE SINGLE PROFILE ROUTE */}
        <Route path=":section?/profile" element={<ProfilePage />} />

      </Route>
    </Routes>
  );
}