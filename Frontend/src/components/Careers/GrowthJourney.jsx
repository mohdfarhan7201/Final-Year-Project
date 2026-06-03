import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiTrendingUp, FiFileText, FiBriefcase } from "react-icons/fi";

const cards = [
  {
    icon: <FiUsers size={26} />,
    title: "Working with A.I",
    desc: "AI Role Playbots\nLearners enhance their understanding and gain valuable knowledge",
    bg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: <FiTrendingUp size={26} />,
    title: "Build your career while earning",
    desc: "Learners enhance their understanding and gain valuable knowledge",
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: <FiFileText size={26} />,
    title: "Mock with Industry Mentors",
    desc: "Learners enhance their understanding and gain valuable knowledge",
    bg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    icon: <FiBriefcase size={26} />,
    title: "Funding Live Opportunities",
    desc: "Learners enhance their understanding and gain valuable knowledge",
    bg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

export default function GrowthJourney() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ===== Title ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-purple-700"
        >
          Your Growth Journey at Uphirex
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-2 text-sm"
        >
          Where your ambition transforms into meaningful growth and
          lasting success.
        </motion.p>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`${card.bg} p-6 rounded-xl shadow-sm text-center cursor-pointer`}
            >

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white shadow ${card.iconColor}`}
                >
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-sm">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                {card.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* ===== Bottom Features ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            AI CV Screening
          </span>

          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            AI CV Screening
          </span>

          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            AI CV Screening
          </span>

          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            AI CV Screening
          </span>
        </motion.div>

      </div>

    </section>
  );
}