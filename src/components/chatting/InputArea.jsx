import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import ScheduleButton from "./ScheduleButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 85%;
  position: absolute;
  margin: 0 auto;
  margin-bottom: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  gap: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 5px 15px;

  background: ${({ theme }) => theme.color.lightgray};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.lightgray};
  width: 80%;
  flex-grow: 1;
  padding: 5px;
`;

function InputArea({ onSend }) {
  const inputRef = useRef(null);

  const clickSendHandler = () => {
    onSend(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <Container>
      <ScheduleButton />
      <InputContainer>
        <Input ref={inputRef} />
        <Icon
          icon="streamline:computer-keyboard-return-3-enter-return-keyboard"
          width="20"
          height="20"
          color=" #d0435b"
          onClick={clickSendHandler}
        />
      </InputContainer>
    </Container>
  );
}

export default InputArea;
