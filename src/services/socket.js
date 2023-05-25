import { io } from "socket.io-client";

const URL = `${process.env.REACT_APP_SERVER_URL}/chat`;

export const serongSocket = {
  getSocket: (token) =>
    io(URL, {
      autoConnect: false,
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
