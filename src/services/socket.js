import { io } from "socket.io-client";

const URL = `${process.env.REACT_APP_SERVER_URL}/chat`;

export const serongSocket = {
  socket: io(URL, {
    autoConnect: false,
    extraHeaders: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }),
};
