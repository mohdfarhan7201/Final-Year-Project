import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Hero1 from "../../assets/hero1.svg";
import Hero2 from "../../assets/hero2.svg";
import Hero3 from "../../assets/hero3.svg";
import Hero4 from "../../assets/hero4.svg";

const slides = [
  {
    title: "Smart AI Checks Your Resume",
    subtitle: "Instantly Job Ready",
    desc: "A sample resume designed to test layout, readability, and overall presentation and for demonstration purposes.",
    btn: "Analyze Resume",
    path: "/login",
    image: Hero1,
    width: "320px",
    initialX: 100,
    exitX: -100,
  },
  {
    title: "Get Hired Through A Skill",
    subtitle: "Focused Hiring Process",
    desc: "At Uphirex, we believe great products are built by passionate people.",
    btn: "Find Jobs",
    path: "/login",
    image: Hero2,
    width: "380px",
    initialX: -120,
    exitX: 120,
  },
  {
    title: "Skill Focused Courses Designed",
    subtitle: "To Build Job Ready Expertise",
    desc: "These courses focus on building practical, real-world skills.",
    btn: "Browse Courses",
    path: "/login",
    image: Hero3,
    width: "300px",
    initialX: 80,
    exitX: -80,
  },
  {
    title: "AI-Based Platform for",
    subtitle: "End-to-End Career Growth",
    desc: "Skill-first hiring platform powered by intelligent AI technology.",
    btn: "Explore Platform",
    path: "/login",
    image: Hero4,
    width: "400px",
    initialX: 80,
    exitX: -80,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  /* =========================
     ORBIT RINGS WITH DOTS
  ========================== */

  const ringSizes = [420, 500, 580];

  const rings = useMemo(() => {
    return ringSizes.map((size) => {
      const dotsCount = Math.floor(Math.random() * 2) + 3;

      const dots = Array.from({ length: dotsCount }).map(() => ({
        angle: Math.random() * 360,
      }));

      return { size, dots };
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f3f6ff] to-[#ffeef6] ">

      {/* ===== RIGHT SIDE BLOB ===== */}
      <motion.div
        key={index}
        initial={{ scale: 0.9, opacity: 0, rotateZ: 40 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 bottom-0 w-[35%] h-[55%] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-[60px] z-20 "
      />

      {/* ===== ORBIT RINGS ===== */}
      <div className="absolute right-[18%] bottom-0 -translate-y-1/2 z-10">

        {rings.map((ring, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-pink-400/40"
            style={{
              width: ring.size,
              height: ring.size,
              left: -ring.size / 2,
              top: -ring.size / 1,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* DOTS */}
            {ring.dots.map((dot, index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_12px_rgba(236,72,153,0.8)]"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `
                    rotate(${dot.angle}deg)
                    translateX(${ring.size / 2}px)
                    translate(-50%, -50%)
                  `,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container mx-auto px-10 relative z-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SIDE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              {slides[index].title}
              <br />
              <span className="text-indigo-600">
                {slides[index].subtitle}
              </span>
            </h1>

            <p className="mt-6 text-gray-500 max-w-md leading-relaxed">
              {slides[index].desc}
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(slides[index].path)}
              className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-xl"
            >
              {slides[index].btn}
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* IMAGE SIDE */}
        <div className="relative flex  items-center ">

          <div className="absolute bottom-0 w-72 h-16 bg-purple-600/30 blur-2xl rounded-full " />

          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index].image}
              src={slides[index].image}
              alt=""
              initial={{
                opacity: 0,
                x: slides[index].initialX,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: slides[index].exitX,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                width: slides[index].width,
              }}
              className="relative z-20 drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
