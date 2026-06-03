import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import RightSection from "./RightSection";
import logo from "../../../assets/Logo.svg";

export default function Navbar() {
  return (
    <header className="w-full bg-[#f5f6fa] py-2 flex justify-center ">
      
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-6"
      >

        {/* 🔹 BOX 1: LOGO */}
        <div className="bg-white border border-gray-200 rounded-xl   shadow-sm">
         <div
               className="flex items-center gap-2 py-1 rounded-md cursor-pointer"
             >
               <img src={logo} className="w-32 h-10" />
             </div>
        </div>

        {/* 🔹 BOX 2: NAV LINKS */}
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
          <NavLinks />
        </div>

        {/* 🔹 BOX 3: RIGHT SECTION */}
        <div className="bg-white rounded-2xl  flex items-center ">
          <RightSection />
        </div>

      </motion.div>
    </header>
  );
}