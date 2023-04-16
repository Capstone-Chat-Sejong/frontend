import styled from "styled-components";
import Serong from "../components/common/Serong";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Notice = styled.p`
  padding: 10px 50px;
  text-align: center;
  font-size: 15px;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin: auto 0;
`;

const Input = styled.input`
  width: 230px;
  height: 33px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
`;

const Button = styled.button`
  width: 180px;
  height: 35px;
  background-color: ${({ theme }) => theme.color.red}99;
  border-radius: 15px;
  font-size: 13px;
`;

const Message = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: 12px;
`;

function LoginPage() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwdRef = useRef(null);
  const [message, setMessage] = useState(null);
  const { addToast } = useToast();

  const loginHandler = () => {
    if (!idRef.current.value || !pwdRef.current.value) {
      setMessage("학번과 비밀번호를 모두 입력해 주세요.");
      return;
    }

    // TODO 로그인
    addToast("로그인이 완료되었습니다.");
    navigate("/chat");
  };

  return (
    <Wrapper>
      <Box>
        <Serong size="50px" />
        <Notice>
          세종대 홈페이지 로그인을 위한 학번과 비밀번호를 사용해 로그인 하실 수
          있습니다.
        </Notice>
        <Input type="text" ref={idRef} placeholder="학번" />
        <Input type="password" ref={pwdRef} placeholder="비밀번호" />
        <Message>{message}</Message>
        <Button type="submit" onClick={loginHandler}>
          로그인
        </Button>
      </Box>
    </Wrapper>
  );
}

export default LoginPage;
