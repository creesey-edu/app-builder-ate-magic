// src/lib/axios.ts
import axios from "axios";

// Read your auth token from localStorage
const getAuthToken = () => localStorage.getItem("auth_token");

// Create Axios instance
const api = axios.create({
  baseURL: `${import.meta.env.VITE_AUTH_API_BASE_URL}${import.meta.env.VITE_API_VERSION_PREFIX}`, // or your general backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT token to each request
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    console.log("🔐 Attaching token:", token);
    console.log("📡 Base URL:", config.baseURL);
    console.log("➡️ Request URL:", config.url);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: handle 401 responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — logging out.");
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
