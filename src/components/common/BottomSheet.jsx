import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

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
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 15px;
  gap: 10px;
  background-color: ${({ theme }) => theme.color.white};
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
  height: 120px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const InfoTitle = styled.div`
  font-size: 18px;
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

function BottomSheet({ onBottomSheet, setOnBottomSheet }) {
  if (!onBottomSheet) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <BackDrop onClick={() => setOnBottomSheet(false)} />
          <Sheet>
            <Info>
              <InfoTitle>로그인 정보</InfoTitle>
              <div>학과 학번 이름</div>
              <div>재학 상태</div>
            </Info>
            <Option>로그아웃</Option>
            <Option>대화 내역 초기화</Option>
            <Option onClick={() => setOnBottomSheet(false)}>취소</Option>
          </Sheet>
        </>,
        document.getElementById("bottom-sheet-root")
      )}
    </>
  );
}
export default BottomSheet;
