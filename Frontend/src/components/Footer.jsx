import { motion, noop } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import Logo from "../assets/Logo.svg"; // 👈 apna logo path yahan lagao

export default function Footer() {
  return (
    <footer className="bg-[#f5f3f7] pt-16 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Animated Logo Image ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex justify-center mb-12"
        >
          <motion.img
            src={Logo}
            alt="Uphirex Logo"
            className="h-14 md:h-16 object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* ===== Footer Grid ===== */}
        <div className="grid md:grid-cols-5 gap-10 pb-12">

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold  mb-4">UPHIREX</h3>
            <p className="text-sm text-gray-500 mb-4">
              Uphirex is a global job-searching platform dedicated to connecting talent with opportunity.
            </p>

            <div className="flex gap-4 text-indigo-600 text-lg">
              <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="cursor-pointer hover:scale-110 transition" />
              <FaGithub className="cursor-pointer hover:scale-110 transition" />
            </div>
          </motion.div>

          {/* Company */}
          <FooterColumn
            title="Company"
            links={["About Us", "Careers", "Blog", "Pricing"]}
          />

          {/* Product */}
          <FooterColumn
            title="Product"
            links={["Invoicing", "Contract", "Accounting", "Proposal"]}
          />

          {/* Resources */}
          <FooterColumn
            title="Your Team"
            links={[
              "Aditi Srivastava",
              "Rishika Chaudhary",
              "Mohd Farhan",
              "Punkesh Gupta",
              "Vashu Verma",
            ]}
          />

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-semibold mb-4">Contact Us</h3>

            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <HiOutlineMail />
              <span className="text-sm">uphirex0010@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <HiOutlinePhone />
              <span className="text-sm">+91 8303877102</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Animated Bottom Bar ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-linear-to-r from-purple-800 via-purple-700 to-purple-800 text-white text-center py-4 text-sm relative overflow-hidden"
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-1/3 h-full bg-white/10 blur-xl"
        />
        © 2026 Uphirex — Empowering Careers with AI.
      </motion.div>
    </footer>
  );
}

/* ===== Reusable Column Component ===== */
function FooterColumn({ title, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-purple-600 cursor-pointer hover:font-bold transition duration-300 hover:translate-x-1"
          >
            {link}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
