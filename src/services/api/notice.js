import { request } from "../instance";

const NOTICE_API = {
  getNotices: async () => {
    const res = await request().get(
      `${process.env.REACT_APP_SERVER_URL}/announcement`
    );

    const data = {};
    data.general = Object.values(res.data["공지"]);
    data.univ = Object.values(res.data["학사공지"]);

    return data;
  },
};

export default NOTICE_API;
