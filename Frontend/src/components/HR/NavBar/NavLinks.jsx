import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export default function NavLinks() {
  const location = useLocation();

  const base = "/hr";

  const links = [
    { name: "Dashboard", path: "", icon: LayoutDashboard },
    { name: "Job Postings", path: "jobs", icon: Briefcase },
    { name: "Candidates", path: "candidates", icon: Users },
    { name: "Analytics", path: "analytics", icon: BarChart3 },
    { name: "Settings", path: "settings", icon: Settings },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((item) => {
        const fullPath = item.path ? `${base}/${item.path}` : base;
        const isActive = location.pathname === fullPath;

        const Icon = item.icon;

        return (
          <NavLink key={item.name} to={fullPath}>
            <div className="relative">
              
              {/* TAB */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-purple-50 text-purple-600 shadow-sm"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                <Icon size={16} />
                {item.name}
              </motion.div>

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