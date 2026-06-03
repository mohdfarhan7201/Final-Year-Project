import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function PremiumCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      if (e.target.closest("button, a")) {
        setHover(true);
      } else {
        setHover(false);
      }
    };

    const handleClick = () => {
      setClick(true);
      setTimeout(() => setClick(false), 300);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <>
      {/* OUTER RING */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex justify-center items-center"
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
        animate={{
          width: hover ? 50 : 40,
          height: hover ? 50 : 40,
          scale: click ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-full h-full rounded-full border border-black/20 dark:border-white/30 backdrop-blur-md" />
      </motion.div>

      {/* INNER DOT */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
        animate={{
          width: hover ? 14 : 10,
          height: hover ? 14 : 10,
          scale: click ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
}
