import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

import Img1 from "../../assets/img1.svg";
import Img2 from "../../assets/img2.svg";
import Img3 from "../../assets/img3.svg";
import Img4 from "../../assets/img4.svg";
import Img5 from "../../assets/img5.svg";
import Img6 from "../../assets/img6.svg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const techIcons = [
  { icon: <FaHtml5 />, color: "text-orange-500", x: "10%", y: "20%" },
  { icon: <FaCss3Alt />, color: "text-blue-500", x: "18%", y: "40%" },
  { icon: <FaJs />, color: "text-yellow-400", x: "8%", y: "60%" },
  { icon: <FaReact />, color: "text-cyan-400", x: "30%", y: "80%" },
  { icon: <FaNodeJs />, color: "text-green-500", x: "10%", y: "85%" },
  { icon: <FaPython />, color: "text-yellow-500", x: "90%", y: "18%" },
  { icon: <FaJava />, color: "text-red-500", x: "80%", y: "36%" },
  { icon: <FaGitAlt />, color: "text-orange-600", x: "85%", y: "55%" },
  { icon: <FaDocker />, color: "text-blue-400", x: "75%", y: "70%" },
  { icon: <SiMongodb />, color: "text-green-600", x: "87%", y: "84%" },
  { icon: <SiTypescript />, color: "text-blue-600", x: "65%", y: "85%" },
];

export default function SkillCarousel() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-pink-50">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-300 opacity-30 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-sky-300 opacity-30 blur-[140px]" />

      {/* Floating Tech Icons */}
      {techIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`hidden lg:block absolute text-4xl ${item.color} opacity-80`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Up Your <span className="text-indigo-600">Skills</span> To{" "}
          <span className="text-indigo-600">Advance</span> Your{" "}
          <span className="text-indigo-600">Career</span> Path
        </h2>

        <p className="mt-3 text-gray-500">
          Empower lives through wellness and mindfulness
        </p>

        <div className="mx-auto mt-4 h-[4px] w-40 rounded-full bg-gradient-to-r from-pink-400 to-indigo-400" />

        {/* Cylindrical Rotation */}
        <div className="relative mt-16 h-[160px] perspective-[1200px] flex justify-center">
          <motion.div
            className="relative w-[600px] h-full"
            animate={{ rotateY: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {images.map((img, i) => {
              const angle = (360 / images.length) * i;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-[180px] h-[120px] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(260px)`,
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        <button className="mt-20 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition">
          Get Start
        </button>
      </div>
    </section>
  );
}
