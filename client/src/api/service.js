import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 100000,
});

service.interceptors.request.use(
  (config) => {
    console.log(config);
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
    Promise.reject(error);
  }
);

export { service };
