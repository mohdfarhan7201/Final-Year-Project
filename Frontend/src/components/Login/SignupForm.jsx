import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../Api/config";

export default function SignupForm({ switchMode, triggerOTP }) {
  const [userType, setUserType] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const options = [
    { label: "Job Seeker", value: "job_seeker" },
    { label: "HR", value: "hr" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!userType || !formData.fullName || !formData.email || !formData.password) {
      alert("Please fill all the details.");
      return;
    }

    setLoading(true);

    try {
      // Username generation logic intact
      const payload = {
        username: formData.email.split('@')[0] + Math.floor(Math.random() * 1000),
        email: formData.email,
        password: formData.password,
        displayName: formData.fullName,
        role: userType, 
      };

      const response = await axios.post(`${API_BASE_URL}auth/signup/`, payload);

      if (response.data.success || response.status === 201 || response.status === 200) {
        console.log("Signup Success:", response.data);
        // OTP Modal trigger kar rahe hain email ke saath
        triggerOTP(formData.email); 
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      const errorMsg = error.response?.data?.message || "Signup failed. Email might already exist.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[40%] ml-10 text-black relative">
      <h2 className="text-3xl font-bold mb-6">Create Account</h2>

      {/* Custom Dropdown UI intact */}
      <div className="relative mb-4">
        <div
          onClick={() => setOpen(!open)}
          className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 cursor-pointer flex justify-between items-center hover:bg-white/30 transition shadow-md"
        >
          <span className={`${userType ? "text-black" : "text-black/70"}`}>
            {userType ? options.find((o) => o.value === userType)?.label : "Select User Type"}
          </span>
          <span>▼</span>
        </div>
        {open && (
          <div className="absolute w-full mt-2 rounded-xl bg-gray-700/70 backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden z-20">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setUserType(option.value);
                  setOpen(false);
                }}
                className="px-4 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-pink-600/70 hover:to-purple-600/70 transition"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="mb-4 w-full px-4 py-3 rounded-xl bg-white/30 placeholder-black/70 backdrop-blur-md focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="mb-4 w-full px-4 py-3 rounded-xl bg-white/30 placeholder-black/70 backdrop-blur-md focus:outline-none"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="mb-6 w-full px-4 py-3 rounded-xl bg-white/30 placeholder-black/70 backdrop-blur-md focus:outline-none"
      />

      <button
        onClick={handleSignup}
        disabled={loading}
        className={`w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 font-semibold shadow-lg hover:scale-105 transition active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>

      <p className="mt-6 text-sm">
        Already have an account?{" "}
        <span onClick={switchMode} className="underline cursor-pointer">
          Login
        </span>
      </p>
    </div>
  );
}