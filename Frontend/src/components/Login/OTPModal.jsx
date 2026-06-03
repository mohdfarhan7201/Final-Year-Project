import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_BASE_URL } from "../../Api/config";

export default function OTPModal({ onClose, email, onVerified }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);
    
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    
    if (otpString.length < 6) {
      alert("Please enter all 6 digits.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}auth/verify_signup/`, {
        email: email,
        otp: otpString,
      });

      console.log("Verification full response:", response.data);

      if (response.data.success || response.status === 200) {
        // FIXED PATH: Aapke login res jaisa hi structure yahan bhi hoga
        const roleFromBackend = response.data.data?.user?.role; 
        
        console.log("Verification Success. Role identified:", roleFromBackend);
        
        alert("Account verified successfully!");
        
        // Parent (AuthPage) ko role bhej rahe hain taaki login page par wo role yaad rahe
        onVerified(roleFromBackend); 
      }
    } catch (error) {
      console.error("Verification Error:", error.response?.data);
      const backendMessage = error.response?.data?.message || "Invalid or expired OTP.";
      alert(backendMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      // API call for resend if needed:
      // await axios.post(`${API_BASE_URL}auth/resend_otp/`, { email });
      setTimer(60);
      setOtp(new Array(6).fill(""));
      alert("A new code has been sent to your email.");
    } catch (error) {
      alert("Could not resend OTP.");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl w-[90%] max-w-md text-white text-center"
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-7 text-white/50 hover:text-white text-2xl transition"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-2">Verify OTP</h2>
        <p className="text-white/60 text-sm mb-10">
          We sent a code to <br/> 
          <span className="text-white/90 font-medium">{email}</span>
        </p>

        <div className="flex justify-center gap-3 mb-10">
          {otp.map((data, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-14 bg-white/10 border border-white/30 rounded-2xl text-center text-xl font-bold focus:ring-2 focus:ring-pink-500 outline-none transition"
            />
          ))}
        </div>

        <div className="mb-10 text-sm font-medium">
          {timer > 0 ? (
            <span className="text-white/40 italic">Resend OTP in <b className="text-white not-italic">{timer}s</b></span>
          ) : (
            <button onClick={handleResend} className="text-pink-400 font-bold hover:underline">
              Resend OTP
            </button>
          )}
        </div>

        <button 
          onClick={handleVerify}
          disabled={loading}
          className={`w-full py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 font-bold shadow-xl hover:scale-105 transition active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Verifying..." : "Verify & Join UPHIREX"}
        </button>
      </motion.div>
    </div>
  );
}