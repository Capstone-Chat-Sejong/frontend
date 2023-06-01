import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import useToast from "../../hooks/useToast";

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    100% {
        opacity: 1;
        transform: translateZ(0);
    }

`;

const Sheet = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  margin: auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  gap: 10px;
  background-color: ${({ theme }) => theme.color.lightpink};
  font-size: 13px;

  border-radius: 20px 20px 0 0;

  animation: ${fadeInUp} 1s forwards;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray}99;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  border-radius: 20px;
`;

const InfoTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  height: 50px;
`;

const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const Book = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Value = styled.div`
  width: 150px;
  text-align: center;
`;
const Line = styled.div`
  background-color: #bfbbbb;
  height: 1px;
  width: 100%;
  margin-top: 10px;
`;
const Title = styled.div`
  font-weight: 600;
  padding: 5px 0;
`;
function BottomSheet({
  onBottomSheet,
  setOnBottomSheet,
  onLogout,
  onResetChattting,
  mode,
}) {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { addToast } = useToast();

  if (!onBottomSheet) return null;
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <BackDrop onClick={() => setOnBottomSheet(false)} />
          <Sheet>
            <Info>
              <InfoTitle>로그인 정보</InfoTitle>
              <div>{`${userInfo.id} ${userInfo.name}`}</div>
              <div>{`${userInfo.major} ${userInfo.grade}학년 ${userInfo.status}중`}</div>
              <Line />
              <Title>고전 독서 인증 현황</Title>
              <Book>
                {Object.keys(userInfo.read_certification).map((key) => (
                  <Value>{`${key.slice(0, -4)} : ${
                    userInfo.read_certification[key]
                  }`}</Value>
                ))}
              </Book>
            </Info>
            <Option onClick={onLogout}>로그아웃</Option>
            {mode === "CHAT" && (
              <Option
                onClick={() => {
                  onResetChattting();
                  setOnBottomSheet(false);
                  addToast("초기화되었습니다", "NOTICE");
                }}
              >
                대화 내역 초기화
              </Option>
            )}

            <Option onClick={() => setOnBottomSheet(false)}>취소</Option>
          </Sheet>
        </>,
        document.getElementById("bottom-sheet-root")
      )}
    </>
  );
}
export default BottomSheet;
