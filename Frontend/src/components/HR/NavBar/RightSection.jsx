// import { useNavigate } from "react-router-dom";

// export default function RightSection() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex items-center gap-3">
      
//       {/* notification */}
//       <div className="relative">
//         <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
//           🔔
//         </div>
//         <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//       </div>

//       {/* profile */}
//       <img
//       src="https://randomuser.me/api/portraits/women/44.jpg"
//       className="w-10 h-10 rounded-full cursor-pointer"
//       onClick={() => navigate("profile")}
//       alt="profile"
//     />
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { API_BASE_URL } from "../../../Api/config";
import { useAuth } from "../../../Context/AuthContext";

export default function RightSection() {
  const navigate = useNavigate();

  const { authState } = useAuth();
  const token = authState?.accessToken;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH PROFILE =================

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_BASE_URL}profiles/me/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data?.data || res.data;

      setProfile(data);
    } catch (error) {
      console.log("Profile fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchProfile();
  }, [token]);

  const name = profile?.displayName || "User";

  const avatar = profile?.profile_photo_url;

  // 👉 FIRST LETTER AVATAR
  const firstLetter = name?.charAt(0)?.toUpperCase();

  // ================= UI =================

  return (
    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-3 py-2 rounded-2xl shadow-sm border border-slate-200">

      {/* NAME PILL */}
      {!loading && (
        <span className="text-lg font-bold text-slate-700 hidden sm:block px-4">
          {name}
        </span>
      )}

      {/* PROFILE BUTTON */}
      <div
        onClick={() => navigate("profile")}
        className="cursor-pointer relative group"
      >

        {/* AVATAR */}
        {avatar ? (
          <img
            src={avatar}
            alt="profile"
            className="w-10 h-10 rounded-full border border-slate-300 group-hover:scale-110 transition duration-300 shadow-md"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition duration-300">
            {firstLetter}
          </div>
        )}

        {/* ONLINE DOT (optional cool touch) */}
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>

      </div>

    </div>
  );
}