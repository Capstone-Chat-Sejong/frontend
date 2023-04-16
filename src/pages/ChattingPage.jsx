import styled from "styled-components";
import ChatBallon from "../components/chatting/ChatBallon";
import InputArea from "../components/chatting/InputArea";
import Header from "../components/common/Header";
import { PageContainer } from "../styles/common";
import { useEffect, useState, useRef } from "react";
import BottomSheet from "../components/common/BottomSheet";

const dummyData = [
  {
    isMine: false,
    content: "안녕하세dsffs dfsgaer gaegar gad fs ffew g요. 세롱이 입니다.",
  },
  { isMine: true, content: "안녕" },
  { isMine: false, content: "안녕" },
  { isMine: true, content: "센b110이 어디야?" },
  { isMine: false, content: "ai 센터 지하 1층 110호야" },
  { isMine: false, content: "안녕하세요. 세롱이 입니다." },
  { isMine: true, content: "안녕" },
  { isMine: false, content: "안녕" },
  { isMine: true, content: "센b110이 어디야?" },
  { isMine: false, content: "ai 센터 지하 1층 110호야" },
  { isMine: false, content: "안녕하세요. 세롱이 입니다." },
  { isMine: true, content: "안녕" },
  { isMine: false, content: "안녕" },
  { isMine: true, content: "센b110이 어디야?" },
  { isMine: false, content: "ai 센터 지하 1층 110호야" },
];

const ChatPageContainer = styled(PageContainer)`
  margin-bottom: 50px;
  height: calc(100vh - 50px - 50px);
  padding-bottom: 20px;
`;

function ChattingPage() {
  const containerRef = useRef(null);
  const [onBottomSheet, setOnBottomSheet] = useState(false);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, []); // TODO scroll 이동

  return (
    <>
      <Header onClickMenu={() => setOnBottomSheet(true)} />
      <ChatPageContainer ref={containerRef}>
        {dummyData.map((data) => (
          <ChatBallon isMine={data.isMine} content={data.content} />
        ))}
        <InputArea
          onSend={(data) => {
            console.log(data);
            //TODO 채팅 전송
          }}
        />
      </ChatPageContainer>
      <BottomSheet
        onBottomSheet={onBottomSheet}
        setOnBottomSheet={setOnBottomSheet}
      />
    </>
  );
}

export default ChattingPage;
