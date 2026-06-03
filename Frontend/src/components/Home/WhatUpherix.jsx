import React from 'react';
import { motion } from 'framer-motion';
import What1 from '../../assets/What1.svg';
import What2 from '../../assets/What2.svg';
import What3 from '../../assets/What3.svg';

const aboutItems = [
  {
    title: 'Resume Analyzer (AI)',
    description:
      'Upload your resume and get instant AI-driven feedback, skill gap analysis, and improvement suggestions.',
    image: What1,
    align: 'left',
  },
  {
    title: 'Hiring & Internships',
    description:
      'Discover job and internship opportunities matched to your skills, interests, and career goals.',
    image: What2,
    align: 'right',
  },
  {
    title: 'Online Courses',
    description:
      'Upgrade your skills through practical learning. Courses designed for real industry needs.',
    image: What3,
    align: 'left',
  },
];

const itemVariants = {
  hidden: (align) => ({
    opacity: 0,
    x: align === 'right' ? 120 : -120,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <section className="px-4 sm:px-6 md:px-20 py-10 sm:py-12 overflow-hidden">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-2xl md:text-3xl mb-5 font-bold text-center text-[#3A2A8C]"
      >
        What Can You Do On Uphirex ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center text-xl mb-10"
      >
        Explore AI-powered tools and services designed to support your complete career journey.
      </motion.p>

      <div className="flex flex-col gap-10 px-4 sm:px-30">
        {aboutItems.map((item, idx) => (
          <motion.div
            key={idx}
            custom={item.align}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 ${
              item.align === 'right' ? 'sm:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.12, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 180 }}
              className="w-24 h-24 sm:w-48 sm:h-28 rounded-md object-cover"
            />

            {/* Text */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-[#7C0080] lg:text-3xl">
                {item.title}
              </h3>
              <p className="text-mb text-gray-600 mt-1">
                {item.description}
              </p>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
