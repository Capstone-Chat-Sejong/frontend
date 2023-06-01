import styled from "styled-components";
import { useState } from "react";
import CalendarModal from "../calendar/CalendarAddModal";
import MySchedule from "../calendar/ScheduleCheckModal";

const Container = styled.div`
  width: 100%;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  & > button {
    flex: none;

    height: 30px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.lightgray};
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Button = styled.button`
  color: black;
`;

function ScheduleButton({ onClickRegister, onClickCheck }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const clickRegisterHandler = () => {
    setIsRegistering(true);
  };
  const clickCheckHandler = () => {
    setIsChecking(true);
  };
  return (
    <Container>
      <Button onClick={clickRegisterHandler}>내 일정 등록</Button>
      <Button onClick={clickCheckHandler}>내 일정 확인</Button>
      {isRegistering && <CalendarModal setIsRegistering={setIsRegistering} />}
      {isChecking && <MySchedule setIsChecking={setIsChecking} />}
    </Container>
  );
}
export default ScheduleButton;
