import { request } from "../instance";

const CALENDAR_API = {
  addPlan: async (scheduleObj) => {
    const res = await request().post(
      `${process.env.REACT_APP_SERVER_URL}/button/click/schedule`,
      {
        ...scheduleObj,
        btn_title: "일정 등록",
      }
    );
    return res.data;
  },
  getPlans: async (today) => {
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const res = await request().post(
      `${process.env.REACT_APP_SERVER_URL}/button/click/schedule`,
      {
        btn_title: "일정 확인",
        start: `${year}-${month >= 10 ? month : "0" + month}-${
          date >= 10 ? date : "0" + date
        }`,
      }
    );
    const output = res.data.output.split("\n");

    return output.slice(1);
  },
  getUnivPlan: async () => {
    const res = await request().post(
      `${process.env.REACT_APP_SERVER_URL}/button/click/univschedule`,
      {
        btn_title: "학사 일정",
      }
    );
    const monthArr = Array.from({ length: 12 }, () => []);
    const schedules = Object.values(res.data.schedule);

    schedules.forEach((v) => {
      const start = new Date(v.start);
      const end = new Date(v.end);
      const m = start.getMonth();

      monthArr[m].push({
        start,
        end,
        title: v.schedule,
      });
    });

    return monthArr;
  },
};

export default CALENDAR_API;
