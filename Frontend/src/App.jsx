import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/home";
import Courses from "./components/Courses/courses";
import Careers from "./components/Careers/carrers";
import AITesting from "./components/AI-Testing/AITesting";
import Login from "./components/Login/AuthPage";
import HRApp from "./components/HR/Hrapp";
import UserApp from "./components/Users/UserApp";
import CustomCursor from "./components/Cursor";

const Page = ({ title }) => (
  <div className="h-screen flex items-center justify-center text-3xl font-bold">
    {title}
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* <CustomCursor /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/ai-testing" element={<AITesting />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ Nested Routing */}
        <Route path="/hr/*" element={<HRApp />} />
        <Route path="/user/*" element={<UserApp />} />
      </Routes>
    </BrowserRouter>
  );
}