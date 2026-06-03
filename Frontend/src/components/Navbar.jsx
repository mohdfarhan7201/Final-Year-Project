import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiLogIn,
  FiArrowLeft,
} from "react-icons/fi";
import logo from "../assets/Logo.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isHRPage = location.pathname.startsWith("/hr") || location.pathname.startsWith("/user");

  const links = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Courses", path: "/courses", icon: <FiBookOpen /> },
    { name: "Career", path: "/career", icon: <FiBriefcase /> },
    { name: "AI Testing", path: "/ai-testing", icon: <FiCpu /> },
  ];

  if (isHRPage) return null;

  if (isLoginPage) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 p-4">
        <div className="bg-white rounded-3xl w-fit px-3 py-1 shadow">
          <motion.button
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-indigo-600 font-semibold"
          >
            <FiArrowLeft />
            Back
          </motion.button>
        </div>
      </header>
    );
  }

  // ✅ NORMAL NAVBAR (ALL OTHER PAGES)
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center mt-4 px-4">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-7xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl rounded-2xl px-8 py-3 flex items-center justify-between"
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <NavLink key={item.name} to={item.path} className="relative group">
                {({ isActive }) => (
                  <>
                    <div
                      className={`flex items-center gap-2 text-sm font-medium transition ${
                        isActive
                          ? "text-indigo-600"
                          : "text-gray-700 group-hover:text-indigo-600"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.name}
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg"
          >
            <FiLogIn />
            Login
          </button>
        </motion.nav>
      </div>
    </header>
  );
}