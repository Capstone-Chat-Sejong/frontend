import request from "../instance";

const CALENDAR_API = {
  addPlan: async (scheduleObj) => {
    const res = await request.post(
      `${process.env.REACT_APP_SERVER_URL}/button/click/schedule`,
      {
        ...scheduleObj,
        btn_title: "일정 등록",
      }
    );
    return res.data;
  },
};

export default CALENDAR_API;
