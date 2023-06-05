import { request } from "../instance";

export const QUICK_API = {
  getButtonList: async () => {
    const res = await request().get(
      `${process.env.REACT_APP_SERVER_URL}/button/init`
    );

    const data = res.data;
    const keys = Object.keys(res.data);
    const dataList = keys
      .map((key) => {
        return { id: key, value: data[key] };
      })
      .slice(0, -2);
    dataList.push({ id: "extra001", value: "학교 주요 링크" });

    return dataList;
  },
  getButtonClick: async (title) => {
    const res = await request().post(
      `${process.env.REACT_APP_SERVER_URL}/button/click/info`,
      {
        btn_title: title,
      }
    );

    const data = res.data;

    if (title === "교내 지도") {
      // const blob = await data.blob();
      // const url = URL.createObjectURL(blob);
      return data;
    }

    if (
      title === "학과 정보" ||
      title === "편의 시설" ||
      data?.sub ||
      title === "법학부"
    ) {
      if (title === "법학부") return { content: data.output, sub: [] };
      const keys = Object.keys(res.data.sub);
      const dataList = keys.map((key) => {
        return { id: key, value: data.sub[key] };
      });

      return { content: data.output, sub: dataList };
    } else if (title === "졸업 요건 확인") {
      return data;
    } else return data;
  },
  getWeather: async () => {
    const res = await request().post(
      `${process.env.REACT_APP_SERVER_URL}/button/click/weather`,
      {
        btn_title: "오늘의 날씨",
      }
    );
    return res.data;
  },
};
