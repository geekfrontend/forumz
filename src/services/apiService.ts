import { config } from "@/config";
import axios from "axios";

const api = axios.create({
  baseURL: config.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const noAuthRequiredEndpoints = ["login", "register"];

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const requiresAuth = !noAuthRequiredEndpoints.some((endpoint) =>
      config.url?.includes(endpoint)
    );

    if (requiresAuth && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Misalnya untuk handle token expired
    if (error.response && error.response.status === 401) {
      // Redirect ke login, dsb.
    }
    return Promise.reject(error);
  }
);

export default api;
