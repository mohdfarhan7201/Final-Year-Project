import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MoreVertical,
  CheckCircle2,
  Bot,
  Paperclip,
  X,
  FileText,
  Sparkles,
  Download
} from "lucide-react";
import axios from "axios";
import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import jsPDF from "jspdf";

/* ✅ 🔥 ADVANCED PDF FORMATTER */
const generateFormattedPDF = (text) => {
  const doc = new jsPDF();

  const margin = 15;
  let y = 20;
  const lineHeight = 7;
  const maxWidth = 180;

  const lines = text.split("\n");

  lines.forEach((line, index) => {
    line = line.trim();

    if (!line) {
      y += 4;
      return;
    }

    let isHeading = false;

    // 🔥 HEADINGS (**TEXT**)
    if (line.startsWith("**") && line.endsWith("**")) {
      line = line.replace(/\*\*/g, "");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      isHeading = true;
      y += 4;
    }
    // 🔥 NAME (FIRST LINE)
    else if (index === 0) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
    }
    // 🔥 BULLETS
    else if (line.startsWith("*")) {
      line = "• " + line.replace("*", "").trim();
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
    }
    else {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
    }

    // 🔥 HANDLE INLINE **BOLD**
    const parts = line.split(/(\*\*.*?\*\*)/g);

    let x = margin;

    parts.forEach((part) => {
      let isBold = false;

      if (part.startsWith("**") && part.endsWith("**")) {
        part = part.replace(/\*\*/g, "");
        isBold = true;
      }

      doc.setFont("helvetica", isBold || isHeading ? "bold" : "normal");

      const splitText = doc.splitTextToSize(part, maxWidth);

      splitText.forEach((chunk, i) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
          x = margin;
        }

        doc.text(chunk, x, y);

        if (i !== splitText.length - 1) {
          y += lineHeight;
          x = margin;
        } else {
          x += doc.getTextWidth(chunk);
        }
      });
    });

    y += lineHeight;
  });

  doc.save("resume.pdf");
};

/* 💬 Chat Bubble */
const ChatBubble = ({ type, text, time, highlights, resume }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.25 }}
    className={`flex flex-col ${type === "user" ? "items-end" : "items-start"
      } mb-5`}
  >
    <div
      className={`max-w-[80%] px-5 py-4 rounded-3xl text-sm backdrop-blur-md ${type === "user"
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
          : "bg-white/80 text-gray-700 border border-gray-100 shadow"
        }`}
    >
      {type === "bot" ? (
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {text}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="whitespace-pre-line">{text}</p>
      )}

      {/* ✅ PDF BUTTON */}
      {resume && (
        <button
          onClick={() => generateFormattedPDF(resume)}
          className="mt-3 flex items-center gap-2 text-xs bg-indigo-500 text-white px-3 py-2 rounded-lg"
        >
          <Download size={14} />
          Download PDF
        </button>
      )}

      {highlights?.length > 0 && (
        <div className="mt-3 space-y-1">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-2 text-indigo-500 font-semibold">
              <CheckCircle2 size={14} /> {h}
            </div>
          ))}
        </div>
      )}
    </div>

    <span className="text-[10px] text-gray-400 mt-1">{time}</span>
  </motion.div>
);

/* ⏳ Typing */
const TypingBubble = () => (
  <div className="flex items-start mb-5">
    <div className="bg-white px-4 py-3 rounded-2xl shadow flex gap-1">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
    </div>
  </div>
);

/* 🔥 MAIN */
const AIChat = () => {
  const { authState } = useAuth();

  const [input, setInput] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "✨ Hey! Upload your resume or ask anything. I’m here to help.",
      time: "Now",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const getTime = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
  };

  const removeFile = () => setFile(null);

  const handleSend = async () => {
    if (!input.trim() && !file) return;

    const currentInput = input;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: currentInput || `📄 ${file?.name}`,
        time: getTime(),
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      let res;

      if (file) {
        const formData = new FormData();

        const finalMsg =
          currentInput.trim() ||
          "Rewrite my resume and make it ATS optimized";

        formData.append("message", finalMsg);
        formData.append("resume_file", file);
        formData.append("job_title", jobTitle || "");

        res = await axios.post(`${API_BASE_URL}ai/assistant/`, formData, {
          headers: {
            Authorization: `Bearer ${authState.accessToken}`,
          },
        });
      } else {
        res = await axios.post(
          `${API_BASE_URL}ai/assistant/`,
          {
            message: currentInput,
            job_title: jobTitle || "",
          },
          {
            headers: {
              Authorization: `Bearer ${authState.accessToken}`,
            },
          }
        );
      }

      const data = res.data?.data || {};
      const botMsgs = [];

      if (data.message) {
        botMsgs.push({
          type: "bot",
          text: data.message,
          time: getTime(),
        });
      }

      if (data.resume_text) {
        botMsgs.push({
          type: "bot",
          text: data.resume_text,
          resume: data.resume_text,
          time: getTime(),
        });
      }

      if (data.intent === "resume_improve") {
        botMsgs.push({
          type: "bot",
          text: "💡 Suggestions:",
          highlights: data.corrections || [],
          time: getTime(),
        });
      }

      setMessages((prev) => [...prev, ...botMsgs]);
      setFile(null);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: " Something went wrong",
          time: getTime(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl h-[600px] flex flex-col rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#eef2ff] to-[#faf5ff] shadow-2xl border border-slate-200 ">

      {/* HEADER */}
      <div className="p-5 bg-white/70 backdrop-blur-xl flex justify-between items-center border-b border-slate-200">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-indigo-500 p-2 rounded-xl text-white"
          >
            <Bot size={18} />
          </motion.div>
          <h4 className="font-bold text-sm flex items-center gap-1">
            Uphirex AI <Sparkles size={14} className="text-yellow-400" />
          </h4>
        </div>
        <MoreVertical size={18} />
      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-5">
        <AnimatePresence>
          {messages.map((m, i) => (
            <ChatBubble key={i} {...m} />
          ))}
        </AnimatePresence>

        {loading && <TypingBubble />}
        <div ref={chatEndRef} />
      </div>

      {/* INPUT */}
      <div className="p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200">

        {file && (
          <motion.div className="mb-3 flex justify-between items-center bg-gray-100 px-3 py-2 rounded-xl text-xs">
            <div className="flex items-center gap-2">
              <FileText size={14} />
              {file.name}
            </div>
            <button onClick={removeFile}>
              <X size={14} />
            </button>
          </motion.div>
        )}

        <input
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title "
          className="w-full mb-2 bg-white border rounded-xl py-2 px-3 text-xs shadow-sm"
        />

        <div className="relative flex items-center">
          <label className="absolute left-3 cursor-pointer text-gray-400 hover:text-indigo-500">
            <Paperclip size={18} />
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-full bg-white border rounded-xl py-3 pl-10 pr-14 text-sm shadow-sm focus:ring-2 focus:ring-indigo-200"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleSend}
            className="absolute right-2 bg-indigo-500 text-white p-2 rounded-lg shadow-md"
          >
            <Send size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;