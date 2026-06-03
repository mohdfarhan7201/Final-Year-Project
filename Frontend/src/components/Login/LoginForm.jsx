import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../Api/config";

export default function LoginForm({ switchMode, preSavedRole, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}auth/login/`, formData);
      
      // Console log for debugging (Optional)
      console.log("Login full response:", response.data);

      if (response.status === 200 || response.data.success) {
        // Tumhare JSON response ke according data nikalna
        const backendData = response.data.data; 

        // 1. AuthPage (Global Context) mein tokens bhej rahe hain
        onLoginSuccess(backendData);

        // 2. Navigation Logic (Exact Path: backendData.user.role)
        const roleFromBackend = backendData.user?.role;
        const finalRole = roleFromBackend || preSavedRole;

        console.log("Determined Role:", finalRole);

        if (finalRole === "job_seeker") {
          navigate("/user");
        } else if (finalRole === "hr") {
          navigate("/hr");
        } else {
          // Agar koi role na mile toh fallback dashboard
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data);
      const errorMsg = error.response?.data?.message || "Login failed. Check your credentials.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[40%] mr-10 text-black">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="Email" 
          autoComplete="email"
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})} 
          className="px-4 py-3 rounded-xl bg-white/30 outline-none" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          autoComplete="current-password"
          value={formData.password}
          onChange={e => setFormData({...formData, password: e.target.value})} 
          className="px-4 py-3 rounded-xl bg-white/30 outline-none" 
        />
        <button 
          type="submit"
          disabled={loading}
          className="py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold active:scale-95 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Login"}
        </button>
      </form>
      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <span onClick={switchMode} className="underline cursor-pointer">
          Sign up
        </span>
      </p>
    </div>
  );
}