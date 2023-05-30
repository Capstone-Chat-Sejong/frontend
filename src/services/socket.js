import { io } from "socket.io-client";

const URL = `${process.env.REACT_APP_SERVER_URL}/chat`;

const socket = (token) =>
  io(URL, {
    autoConnect: false,
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getSocket = () => socket(localStorage.getItem("access_token"));
