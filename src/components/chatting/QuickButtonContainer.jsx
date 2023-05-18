import styled from "styled-components";
import QuickButton from "./QuickButton";
import { useContext } from "react";
import { ChatContext } from "./ChatProvider";
import Calendar from "../calendar/Calendar";
import MajorInfo from "./contents/MajorInfo";
import GraduateInfo from "./contents/GraduateInfo";
import MapInfo from "./contents/MapInfo";
import FacilityInfo from "./contents/FacilityInfo";
import WeatherInfo from "./contents/WeatherInfo";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > button {
    width: 30%;
  }

  padding: 10px 0;
`;

function QuickButtonContainer({ children }) {
  const ctx = useContext(ChatContext);
  const addMyChat = (v) => {
    ctx.addChat({
      isMine: true,
      props: {},
      component: () => v,
    });
  };
  return (
    <Container>
      {children}
      <QuickButton
        value="학사 일정"
        onClick={() => {
          addMyChat("학사일정");
          ctx.addChat({
            props: {},
            component: () => <Calendar />,
          });
        }}
      />
      <QuickButton
        value="학과 정보"
        onClick={() => {
          addMyChat("학과 정보");
          ctx.addChat({
            props: {},
            component: () => <MajorInfo />,
          });
        }}
      />
      <QuickButton
        value="졸업 요건"
        onClick={() => {
          addMyChat("졸업 요건");
          ctx.addChat({
            props: {},
            component: () => <GraduateInfo />,
          });
        }}
      />
      <QuickButton
        value="교내 지도"
        onClick={() => {
          addMyChat("교내 지도");
          ctx.addChat({ props: {}, component: () => <MapInfo /> });
        }}
      />
      <QuickButton
        value="편의 시설"
        onClick={() => {
          addMyChat("편의 시설");
          ctx.addChat({
            props: {},
            component: () => <FacilityInfo />,
          });
        }}
      />
      <QuickButton
        value="오늘 날씨"
        onClick={() => {
          addMyChat("오늘 날씨");
          ctx.addChat({
            props: {},
            component: () => <WeatherInfo />,
          });
        }}
      />
    </Container>
  );
}
export default QuickButtonContainer;
