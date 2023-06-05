import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import { USER_API } from "../services/api/user";
import { Icon } from "@iconify/react";
import serongMoving from "../assets/serong_move.gif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.lightpink};
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
  color: black;
  font-size: 13px;
  box-shadow: 0px 4px 0px #ce6375db;
`;

const Message = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: 12px;
`;
const LoadingBallon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  background-color: white;
  border-radius: 20px 20px 20px 0;
  margin-left: 80px;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
`;
function LoginPage() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwdRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const loginHandler = () => {
    if (!idRef.current.value || !pwdRef.current.value) {
      setMessage("학번과 비밀번호를 모두 입력해 주세요.");
      return;
    }

    setLoading(true);
    USER_API.login(idRef.current.value, pwdRef.current.value)
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        addToast("로그인이 완료되었습니다.", "NOTICE");
        navigate("/chat");
        setLoading(false);
      })
      .catch((err) => {
        if (err.response?.status === 401)
          setMessage("아이디와 비밀번호가 일치하지 않습니다.");
        setLoading(false);
        setMessage("네트워크에 문제가 있는 것 같습니다.");
      });
  };

  return (
    <Wrapper>
      <Box>
        {loading && (
          <LoadingBallon>
            <Icon icon="eos-icons:three-dots-loading" width={35} height={35} />
          </LoadingBallon>
        )}
        <Img src={serongMoving} />
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
