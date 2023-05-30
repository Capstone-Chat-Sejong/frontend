import axios from "axios";

function axiosInstance() {
  const token = localStorage.getItem("access_token");

  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export const request = () => axiosInstance();
