// src/lib/axios.ts
import axios from "axios";
import { toast } from "@/components/ui/use-toast"; // or "@/lib/toast" or wherever your toast lives

const getAuthToken = () => localStorage.getItem("auth_token");

const api = axios.create({
  baseURL: `${import.meta.env.VITE_AUTH_API_BASE_URL}${import.meta.env.VITE_API_VERSION_PREFIX}`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — logging out.");

      // 🔔 Show toast before logout
      toast({
        title: "Session Expired",
        description: "Your session has timed out. Please sign in again.",
        variant: "destructive", // You can also use "warning" or custom
        duration: 5000,
      });

      // 💾 Clear session data
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");

      // ⏳ Wait a moment before redirecting to show toast
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1500);
    }

    return Promise.reject(error);
  }
);

export default api;
