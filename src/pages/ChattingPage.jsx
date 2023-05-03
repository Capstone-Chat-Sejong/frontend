import styled from "styled-components";
import ChatBallon from "../components/chatting/ChatBallon";
import InputArea from "../components/chatting/InputArea";
import Header from "../components/common/Header";
import { PageContainer } from "../styles/common";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BottomSheet from "../components/common/BottomSheet";
import { socket } from "../services/socket";
import { Icon } from "@iconify/react";
import { CHAT_PROCESSOR } from "../utils/chat";

const ChatPageContainer = styled(PageContainer)`
  margin-bottom: 85px;
  height: calc(100vh - 50px - 85px);
  padding-bottom: 20px;
`;

const IconArea = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 150px;
`;

function ChattingPage() {
  const containerRef = useRef(null);
  const [onBottomSheet, setOnBottomSheet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [chatData, setChatData] = useState([
    {
      isMine: false,
      content: CHAT_PROCESSOR.greeting(
        JSON.parse(localStorage.getItem("user")).name
      ),
    },
  ]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chatData]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect");
    });

    socket.emit("loggedin", {});
    socket.on("reply", (data) => {
      setIsLoading(false);
      setChatData((prevData) => [
        ...prevData,
        { isMine: false, content: CHAT_PROCESSOR.general(data.msg) },
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("reply");
      socket.off("loggedin");
    };
  }, []);

  return (
    <>
      <Header onClickMenu={() => setOnBottomSheet(true)} />
      <ChatPageContainer ref={containerRef}>
        {chatData.map((data) => (
          <ChatBallon isMine={data.isMine} content={data.content} />
        ))}
        {isLoading && (
          <IconArea>
            <Icon
              icon="svg-spinners:gooey-balls-1"
              width={60}
              height={60}
              color="#D0435B"
            />
          </IconArea>
        )}
        <InputArea
          onSend={(data) => {
            setChatData((prevData) => [
              ...prevData,
              { isMine: true, content: data },
            ]);
            setIsLoading(true);
            socket.emit("sendreply", { input: data });
          }}
        />
      </ChatPageContainer>
      <BottomSheet
        onBottomSheet={onBottomSheet}
        setOnBottomSheet={setOnBottomSheet}
        onLogout={() => navigate("/login")}
      />
    </>
  );
}

export default ChattingPage;
