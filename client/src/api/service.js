import axios from "axios";
import { getToken } from "./Cookies/cookie";

const service = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 100000,
  headers: {
    "content-type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
      Authorization: getToken("Auth-Token")
        ? `Bearer ${getToken("Auth-Token")}`
        : undefined,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
    // Promise.reject(error);
  }
);

export { service };
