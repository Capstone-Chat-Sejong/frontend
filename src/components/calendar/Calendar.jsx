import MyCalendar from "../../utils/calendar";
import styled from "styled-components";

const DateContainer = styled.div`
  margin: 10px 0 10px 0;
  width: 230px;
  height: 160px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;
const DayContainer = styled.div`
  margin: 20px 0 10px 0;
  width: 230px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
`;
const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

function Calendar() {
  const today = new Date();
  const calendar = new MyCalendar(today.getFullYear(), today.getMonth());
  return (
    <>
      <DayContainer>
        {calendar.days.map((day) => (
          <StyledDay>{day}</StyledDay>
        ))}
      </DayContainer>
      <DateContainer>
        {calendar.getDates().map((date) => (
          <StyledDate>{date}</StyledDate>
        ))}
      </DateContainer>
    </>
  );
}

export default Calendar;
