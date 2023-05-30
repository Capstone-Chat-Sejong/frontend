import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CALENDAR_API from "../../services/api/calendar";

const Container = styled.div`
  background-color: white;
  width: 70%;
  height: 200px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  border-radius: 20px;
  font-size: 14px;
`;
const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray}99;
`;

const Title = styled.div`
  padding: 15px;
  font-size: 15px;
  font-weight: 800;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  position: absolute;
  bottom: 25px;

  width: 100px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.red}99;
  border-radius: 15px;
  color: black;
  font-size: 13px;
  box-shadow: 0px 4px 0px #ce6375db;
`;

function MySchedule({ setIsChecking }) {
  const [plans, setPlans] = useState();

  useEffect(() => {
    const today = new Date();
    CALENDAR_API.getPlans(today).then((res) => setPlans(res));
  }, []);

  return ReactDOM.createPortal(
    <>
      <BackDrop />
      <Container>
        <Title>오늘의 일정입니다.</Title>
        {plans?.map((plan, i) => (
          <Row key={`${plan}${i}`}>✔️{plan.slice(11)}</Row>
        ))}
        <Button onClick={() => setIsChecking(false)}>확인</Button>
      </Container>
    </>,
    document.getElementById("bottom-sheet-root")
  );
}
export default MySchedule;
