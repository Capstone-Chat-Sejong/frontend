import styled from "styled-components";
import { ReactComponent as SendIcon } from "../../assets/sendIcon.svg";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 40px;
  position: fixed;
  margin: 0 auto;
  margin-bottom: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px 15px;

  background: ${({ theme }) => theme.color.lightgray};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.lightgray};
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
      <Input ref={inputRef} />
      <SendIcon width="26px" height="26px" onClick={clickSendHandler} />
    </Container>
  );
}

export default InputArea;
