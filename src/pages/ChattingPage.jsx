import styled from "styled-components";
import ChatBallon from "../components/chatting/ChatBallon";
import InputArea from "../components/chatting/InputArea";
import Header from "../components/common/Header";
import { PageContainer } from "../styles/common";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BottomSheet from "../components/common/BottomSheet";
import { serongSocket } from "../services/socket";
import { Icon } from "@iconify/react";
import { ChatContext } from "../components/chatting/ChatProvider";
import { CHAT_PROCESSOR } from "../utils/chat";
import Greeting from "../components/chatting/contents/Greeting";

const ChatPageContainer = styled(PageContainer)`
  margin-bottom: 85px;
  height: calc(100vh - 50px - 85px);
  padding-bottom: 250px;
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
      props: {
        content: CHAT_PROCESSOR.greeting(
          JSON.parse(localStorage.getItem("user")).name
        ),
      },
      component: (props) => <Greeting {...props} />,
    },
  ]);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chatData]);

  useEffect(() => {
    serongSocket.socket.on("connect", () => {
      console.log("connect");
    });

    serongSocket.socket.emit("loggedin", {});
    serongSocket.socket.on("reply", (data) => {
      setIsLoading(false);
      setChatData((prevData) => [
        ...prevData,
        { isMine: false, component: () => CHAT_PROCESSOR.general(data.msg) },
      ]);
    });

    return () => {
      serongSocket.socket.on("disconnect");
      serongSocket.socket.off("connect");
      serongSocket.socket.off("reply");
      serongSocket.socket.off("loggedin");
    };
  }, []);

  return (
    <>
      <Header onClickMenu={() => setOnBottomSheet(true)} />
      <ChatPageContainer ref={containerRef}>
        <ChatContext.Provider
          value={{
            chats: chatData,
            addChat: (chat) => setChatData((chats) => [...chats, chat]),
          }}
        >
          {chatData.map((data) => (
            <ChatBallon isMine={data.isMine} type={data.type}>
              {data.component(data.props)}
            </ChatBallon>
          ))}
        </ChatContext.Provider>
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
              { isMine: true, component: () => data },
            ]);
            setIsLoading(true);
            serongSocket.socket.emit("sendreply", { input: data });
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
