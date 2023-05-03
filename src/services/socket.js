import { io } from "socket.io-client";

const URL = `${process.env.REACT_APP_SERVER_URL}/chat`;

export const socket = io(URL, {
  extraHeaders: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});
