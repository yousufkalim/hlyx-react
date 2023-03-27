import axios from "axios";
export const API_BASE_URL: string = process.env.REACT_APP_API_URL || "";

const api = axios.create({
  baseURL: API_BASE_URL,
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => error
);

export { api };
