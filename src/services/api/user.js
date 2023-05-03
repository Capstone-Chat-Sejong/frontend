import axios from "axios";

export const USER_API = {
  login: async (id, pw) => {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
      id,
      pw,
    });
    return res.data;
  },
};
