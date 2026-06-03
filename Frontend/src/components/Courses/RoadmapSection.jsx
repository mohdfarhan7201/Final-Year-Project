import { motion } from "framer-motion";
import Roadmap1 from "../../assets/Roadmap1.svg";
import Roadmap2 from "../../assets/Roadmap2.svg";
import Roadmap3 from "../../assets/Roadmap3.svg";
import Roadmap4 from "../../assets/Roadmap4.svg";

const roadmaps = [
  {
    id: 1,
    img: Roadmap1,
    rotate: "-8deg",
    delay: 0,
  },
  {
    id: 2,
    img: Roadmap2,
    rotate: "6deg",
    delay: 0.3,
  },
  {
    id: 3,
    img: Roadmap3,
    rotate: "-5deg",
    delay: 0.6,
  },
  {
    id: 4,
    img: Roadmap4,
    rotate: "8deg",
    delay: 0.9,
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-[#f7f7fb] py-20 overflow-hidden -mt-20">
      <div className="max-w-8xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent"
        >
          Some Popular Roadmap
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-gray-500 mt-3"
        >
          Follow curated roadmaps to master in-demand skills step by step.
        </motion.p>

        {/* Roadmap Cards */}
        <div className="mt-16 flex justify-center items-center gap-10 flex-wrap">

          {roadmaps.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: false }}
              className="relative"
            >
              <motion.img
                src={item.img}
                alt="roadmap"
                className="w-64 md:w-72 rounded-2xl shadow-xl cursor-pointer"
                style={{ rotate: item.rotate }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                whileHover={{
                  scale: 1.0,
                }}
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
