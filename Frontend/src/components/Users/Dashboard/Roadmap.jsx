import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowDownToLine, Zap } from 'lucide-react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import R1 from "../../../assets/R1.svg";
import R2 from "../../../assets/R2.svg";
import R3 from "../../../assets/R3.svg";
import R4 from "../../../assets/R4.svg";
import R5 from "../../../assets/R5.svg";
import R6 from "../../../assets/R6.svg"; 

// --- Sample Roadmap Data with detailed content ---
const roadmaps = [
  {
    id: 1,
    title: "Cyber Security Architect",
    image: R1, 
    category: "Security",
    levels: ["Networking Fundamentals", "Linux Basics", "Cryptography", "Network Security", "Ethical Hacking", "Cloud Security", "Incident Response"],
    description: "Master the skills to protect organizations from digital threats."
  },
  {
    id: 2,
    title: "Generative AI Engineer",
    image: R2,
    category: "AI / ML",
    levels: ["Python for AI", "Mathematics", "Machine Learning Fundamentals", "Deep Learning (ANN/CNN)", "Natural Language Processing", "Large Language Models (LLMs)", "Generative Models (GANs)"],
    description: "Build cutting-edge AI that creates new content from data."
  },
  {
    id: 3,
    title: "Full-Stack Web Developer",
    image: R3,
    category: "Development",
    levels: ["HTML/CSS/JS", "React.js", "Node.js", "Databases (SQL/NoSQL)", "API Design", "Authentication", "Cloud Deployment"],
    description: "Design and build both front-end and back-end web applications."
  },
  {
    id: 4,
    title: "Senior UI/UX Designer",
    image: R4,
    category: "Design",
    levels: ["Design Principles", "Color Theory", "Typography", "Figma/Sketch Mastery", "User Research", "Wireframing", "High-Fidelity Prototyping"],
    description: "Create intuitive and visually stunning user experiences."
  },
  {
    id: 5,
    title: "Cloud DevOps Architect",
    image: R5,
    category: "Cloud",
    levels: ["Linux Administration", "Infrastructure as Code (Terraform)", "CI/CD Pipelines", "Containerization (Docker)", "Kubernetes Mastery", "AWS/Azure Services", "Serverless Architecture"],
    description: "Design and manage scalable, reliable cloud infrastructure."
  },
  {
    id: 6,
    title: "Data Science Analyst",
    image: R6,
    category: "Data",
    levels: ["Python for Data Science", "Statistics & Probability", "SQL Fundamentals", "Data Cleaning with Pandas", "Data Visualization", "Exploratory Data Analysis", "Tableau/Power BI"],
    description: "Extract insights from complex data to drive business decisions."
  },
];

// --- PDF Document Component ---
const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', backgroundColor: '#f9fafb' },
  title: { fontSize: 28, marginBottom: 15, color: '#111827', fontWeight: 'bold' },
  category: { fontSize: 14, color: '#6b7280', marginBottom: 5 },
  description: { fontSize: 12, color: '#4b5563', marginBottom: 25, lineHeight: 1.5 },
  sectionTitle: { fontSize: 18, color: '#1f2937', marginTop: 10, marginBottom: 10, fontWeight: 'medium' },
  step: { fontSize: 12, color: '#111827', marginVertical: 3, marginLeft: 15 },
});

const RoadmapPDF = ({ roadmap }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.category}>{roadmap.category}</Text>
      <Text style={styles.title}>{roadmap.title} Roadmap</Text>
      <Text style={styles.description}>{roadmap.description}</Text>
      <Text style={styles.sectionTitle}>Key Learning Stages</Text>
      {roadmap.levels.map((level, index) => (
        <Text key={index} style={styles.step}>
          - Step {index + 1}: {level}
        </Text>
      ))}
    </Page>
  </Document>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // Cascade effect
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 12, delay: 0.1 } },
  exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
};

// --- Main Component ---
export default function UltimateRoadmaps() {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      <main className="max-w-7xl mx-auto px-6 py-4 md:py-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter mb-5 leading-tight">
            Accelerate Your <span className="text-violet-600">Growth</span>
          </h1>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-5">
            Discover precision-engineered, comprehensive roadmaps for high-demand technology roles. Step-by-step guidance from beginner to mastery.
          </p>
          <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full mb-4">Launch Your Tech Career</span>
        </motion.div>

        {/* --- VERTICAL SCROLLABLE GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 -mt-20"
        >
          {roadmaps.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8, transition: { type: 'spring', damping: 10 } }}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100 flex flex-col group overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-slate-700">{item.category}</div>
              </div>
              
              <div className="flex-grow">
                <h2 className="text-xl font-extrabold text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-violet-700 transition">
                  {item.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
                <p className="text-slate-500 text-xs">Beginner to Advanced</p>
                <button
                  onClick={() => setSelectedRoadmap(item)}
                  className="ml-auto px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 transition active:scale-95 whitespace-nowrap"
                >
                  View Full Guide
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* --- ROADMAP MODAL with Download --- */}
      <AnimatePresence>
        {selectedRoadmap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRoadmap(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedRoadmap(null)}
                className="absolute top-4 right-4 p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full transition z-10 text-slate-600"
              >
                <X size={18} />
              </button>

              {/* Modal Image Area */}
              <div className="w-full md:w-2/5 p-8 bg-slate-50 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
                <img
                  src={selectedRoadmap.image}
                  alt={selectedRoadmap.title}
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-100"
                />
              </div>

              {/* Modal Details Area */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col overflow-y-auto">
                <span className="text-violet-700 font-semibold text-sm mb-2">{selectedRoadmap.category}</span>
                <h2 className="text-3xl font-black text-slate-950 tracking-tighter mb-5 leading-tight">{selectedRoadmap.title} Blueprint</h2>
                <p className="text-slate-600 leading-relaxed mb-8">{selectedRoadmap.description}</p>
                
                <h3 className="text-lg font-bold text-slate-900 mb-5">Learning Progression:</h3>
                <ol className="space-y-4 mb-12">
                  {selectedRoadmap.levels.map((level, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.08, type: 'spring' }}
                      className="flex items-start gap-4"
                    >
                      <span className="flex-shrink-0 size-8 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm mt-0.5">{index + 1}</span>
                      <p className="text-slate-800 text-sm md:text-base">{level}</p>
                    </motion.li>
                  ))}
                </ol>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  {/* --- PDF DOWNLOAD WORKING SECTION --- */}
                  <PDFDownloadLink
                    document={<RoadmapPDF roadmap={selectedRoadmap} />}
                    fileName={`${selectedRoadmap.title}_Roadmap.pdf`}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-2xl font-semibold hover:bg-slate-800 transition active:scale-95"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? 'Generating PDF...' : (
                        <>
                          <ArrowDownToLine size={19} />
                          Download Free PDF
                        </>
                      )
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}