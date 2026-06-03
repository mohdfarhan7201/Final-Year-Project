import { createContext, useState, useContext } from "react";
import axios from "axios";
import { API_BASE_URL } from "../Api/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const stored = localStorage.getItem("auth");
    return stored
      ? JSON.parse(stored)
      : {
          accessToken: null,
          refreshToken: null,
          userRole: null,
          user: null,
        };
  });

  // 🔥 SAVE TO LOCAL STORAGE
  const saveAuth = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuthState(data);
  };

  // 🔥 LOGIN
  const setAuthData = (data) => {
    const newState = {
      accessToken: data.access,
      refreshToken: data.refresh,
      userRole: data.user?.role,
      user: data.user,
    };
    saveAuth(newState);
  };

  // 🔥 PROFILE UPDATE SAFE MERGE
  const updateUserData = (newData) => {
    setAuthState((prev) => {
      const updated = {
        ...prev,
        user: {
          ...prev.user,
          ...newData,
        },
      };
      localStorage.setItem("auth", JSON.stringify(updated));
      return updated;
    });
  };

  // 🔥 LOGOUT
  const logoutUser = async (navigate) => {
    try {
      if (authState.refreshToken) {
        await axios.post(
          `${API_BASE_URL}auth/logout/`,
          { refresh: authState.refreshToken },
          {
            headers: {
              Authorization: `Bearer ${authState.accessToken}`,
            },
          }
        );
      }
    } catch (error) {
      console.error("Logout API failed:", error.response?.data);
    } finally {
      localStorage.removeItem("auth");
      setAuthState({
        accessToken: null,
        refreshToken: null,
        userRole: null,
        user: null,
      });
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthData,
        updateUserData,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);