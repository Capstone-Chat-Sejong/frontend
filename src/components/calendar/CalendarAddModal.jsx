import ReactDOM from "react-dom";
import styled from "styled-components";
import CALENDAR_API from "../../services/api/calendar";
import { useRef } from "react";
import useToast from "../../hooks/useToast";

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

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.lightpink};
  padding: 3px;
  border-radius: 10px;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  padding: 5px;

  width: 50px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.red}99;
  border-radius: 15px;
  color: black;
  font-size: 13px;
  box-shadow: 0px 4px 0px #ce6375db;
`;
function CalendarModal({ setIsRegistering }) {
  const startDayRef = useRef();
  const endDayRef = useRef();
  const titleRef = useRef();
  const { addToast } = useToast();

  return ReactDOM.createPortal(
    <>
      <BackDrop />
      <Container>
        <Title>일정 등록</Title>
        <Row>
          시작일 <Input type="date" ref={startDayRef} />
        </Row>
        <Row>
          종료일 <Input type="date" ref={endDayRef} />
        </Row>
        <Row>
          제목 <Input type="text" ref={titleRef} />
        </Row>
        <Row>
          <Button
            onClick={() => {
              if (
                !startDayRef.current?.value ||
                !endDayRef.current?.value ||
                !titleRef.current?.value
              ) {
                addToast("모두 입력해주세요.");
                return;
              }
              CALENDAR_API.addPlan({
                btn_title: "일정 등록",
                start: startDayRef.current.value,
                end: endDayRef.current.value,
                schedule: titleRef.current.value,
              });
              console.log("here");
              /**푸시 알림 */
              window.ReactNativeWebView?.postMessage(
                JSON.stringify({
                  type: "SCHEDULE",
                  data: {
                    date: new Date(startDayRef.current.value),
                    title: titleRef.current?.value,
                  },
                })
              );
              addToast("등록되었습니다", "NOTICE");
              setIsRegistering(false);
            }}
          >
            등록
          </Button>
          <Button onClick={() => setIsRegistering(false)}>취소</Button>
        </Row>
      </Container>
    </>,
    document.getElementById("bottom-sheet-root")
  );
}
export default CalendarModal;
