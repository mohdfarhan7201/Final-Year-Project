import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Agnes Remi",
    role: "Back-end developer at MyDodow",
    text: `"Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"`,
  },
  { id: 2, name: "Agnes Remi", role: "Back-end developer at MyDodow", text: `"Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"` },
  { id: 3, name: "Agnes Remi", role: "Back-end developer at MyDodow", text: `"Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"` },
  { id: 4, name: "Agnes Remi", role: "Back-end developer at MyDodow", text: `"Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!"` },
];

export default function SuccessStories() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const opacity = useSpring(rawOpacity, { stiffness: 50, damping: 20 });

  return (
    <section
      ref={ref}
      className="relative bg-[#f5f7fa] py-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          style={{ y, opacity }}
          className="text-4xl font-bold text-indigo-700"
        >
          Our Success Stories
        </motion.h2>

        <motion.p
          style={{ y, opacity }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          Real success stories from candidates who turned skills into opportunities.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-20 grid md:grid-cols-2 gap-10"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                  },
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              {/* Inner Card */}
              <div className="relative bg-white rounded-2xl p-8 h-full transition duration-300">

                {/* Glow Shadow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 -z-10" />

                {/* Profile */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>

                <div className="mt-6 text-xs text-gray-400">
                  🇺🇸 Dico user, 2021.03.02
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Glow Background */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"
      />
    </section>
  );
}
