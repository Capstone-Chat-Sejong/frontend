import { useEffect, useState } from "react";
import CALENDAR_API from "../../services/api/calendar";
import MyCalendar from "../../utils/calendar";
import styled from "styled-components";

const DateContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 100%;
  height: 160px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;
const DayContainer = styled.div`
  margin: 20px 0 10px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;
const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.mark ? "aliceblue" : "white")};
  border-radius: 5px;
`;

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function Calendar() {
  const today = new Date();
  const calendar = new MyCalendar(today.getFullYear(), today.getMonth());
  const [plans, setPlans] = useState();

  useEffect(() => {
    const today = new Date();
    CALENDAR_API.getUnivPlan().then((plans) => {
      setPlans(plans[today.getMonth()]);
    });
  }, []);

  return (
    <>
      📅 이번 달 학사 일정입니다!
      <DayContainer>
        {calendar.days.map((day) => (
          <StyledDay>{day}</StyledDay>
        ))}
      </DayContainer>
      <DateContainer>
        {calendar.getDates().map((date) => (
          <StyledDate
            mark={plans?.find(
              (e) => e.start.getDate() <= date && e.end.getDate() >= date
            )}
          >
            {date}
          </StyledDate>
        ))}
      </DateContainer>
      <Info>
        {plans?.map((p) => (
          <div>
            {`📌 ${p.start.toLocaleDateString()}~${p.end.toLocaleDateString()} ${
              p.title
            }`}
          </div>
        ))}
      </Info>
      전체 학사 일정 확인하러 가기 👉🏻
      <a href="http://www.sejong.ac.kr/unilife/program_01.html">
        세종대 학사일정
      </a>
    </>
  );
}

export default Calendar;
