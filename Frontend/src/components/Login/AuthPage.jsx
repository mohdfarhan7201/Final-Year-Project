import { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SlidingPanel from "./SlidingPanel";
import OTPModal from "./OTPModal";
import { useAuth } from "../../Context/AuthContext"; // Context import kiya

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  
  // Local state ki jagah context use kar rahe hain
  const { authState, setAuthData } = useAuth();

  const handleTriggerOTP = (email) => {
    setUserEmail(email);
    setShowOTP(true);
  };

  // Jab OTP verify ho jaye
  const handleVerificationSuccess = (role) => {
    // Sirf role update kar rahe hain context mein
    setAuthData({ 
      user: { role: role },
      access: authState.accessToken,
      refresh: authState.refreshToken 
    });
    setShowOTP(false);
    setIsSignup(false); // Slide to Login
  };

  // Jab Login success ho jaye
  const handleLoginSuccess = (data) => {
    // Global context state update kar rahe hain
    setAuthData(data);
    console.log("Tokens stored in Global AuthContext:", data.access);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute w-[600px] h-[600px] bg-pink-400 opacity-30 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-400 opacity-30 blur-[150px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* OTP MODAL */}
      {showOTP && (
        <OTPModal 
          email={userEmail} 
          onClose={() => setShowOTP(false)} 
          onVerified={handleVerificationSuccess} 
        />
      )}

      <div className="relative w-[900px] max-w-[95%] h-[550px] bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden z-10">
        <motion.div
          animate={{ x: isSignup ? "-50%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex w-[200%] h-full"
        >
          <div className="w-1/2 flex items-center justify-end">
            <LoginForm 
              switchMode={() => setIsSignup(true)} 
              preSavedRole={authState.userRole} 
              onLoginSuccess={handleLoginSuccess} 
            />
          </div>

          <div className="w-1/2 flex items-center">
            <SignupForm 
              switchMode={() => setIsSignup(false)} 
              triggerOTP={handleTriggerOTP} 
            />
          </div>
        </motion.div>

        <SlidingPanel isSignup={isSignup} />
      </div>
    </div>
  );
}