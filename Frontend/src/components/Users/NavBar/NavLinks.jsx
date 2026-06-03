import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FiHome, 
  FiBriefcase, 
  FiBookOpen, 
  FiFileText, 
  FiSettings 
} from "react-icons/fi";

export default function NavLinks() {
  const location = useLocation();

  const base = "/user";

  const links = [
    { name: "Dashboard", path: "", icon: <FiHome /> },
    { name: "Jobs", path: "jobs", icon: <FiBriefcase /> },
    { name: "Courses", path: "courses", icon: <FiBookOpen /> },
    { name: "Resume Assistant", path: "resume-assistant", icon: <FiFileText /> },
    { name: "Settings", path: "settings", icon: <FiSettings /> },
  ];

  return (
    <div className="flex items-center gap-4 ">
      {links.map((item) => {
        const fullPath = item.path ? `${base}/${item.path}` : base;

        const isActive =
          location.pathname === fullPath;

        return (
          <NavLink key={item.name} to={fullPath}>
            <div className="relative">
              
              {/* TAB */}
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-mb font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-purple-50 text-purple-600 shadow-sm"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {item.icon}
                {item.name}
              </div>

              {/* ACTIVE LINE */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-2 right-2 h-[2px] bg-purple-600 rounded-full"
                />
              )}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}