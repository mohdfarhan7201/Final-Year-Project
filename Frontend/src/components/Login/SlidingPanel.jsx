// import { motion } from "framer-motion";

// export default function SlidingPanel({ isSignup }) {
//   return (
//     <motion.div
//       animate={{ x: isSignup ? "100%" : "0%" }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//       className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center rounded-4xl"
//     >
//       <div className="absolute w-[300px] h-[300px] bg-pink-400 blur-[120px] opacity-40 rounded-full" />

//       <motion.img
//         src="https://cdn-icons-png.flaticon.com/512/2909/2909765.png"
//         alt="plant"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="w-52 relative z-10 drop-shadow-2xl "
//       />
//     </motion.div>
//   );
// }









import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fallingIcons from "../../assets/fallingIcons.json";
import logo from "../../assets/logo.svg";

export default function SlidingPanel({ isSignup }) {
  return (
    <motion.div
      animate={{ x: isSignup ? "100%" : "0%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center rounded-2xl overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute w-[300px] h-[300px] bg-pink-400 blur-[120px] opacity-40 rounded-full" />

      {/* Falling animation background */}
      <div className="absolute inset-0 opacity-40">
        <Lottie animationData={fallingIcons} loop={true} />
      </div>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="logo"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-52 relative z-10 drop-shadow-2xl"
      />
    </motion.div>
  );
}