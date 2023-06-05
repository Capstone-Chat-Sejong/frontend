import styled from "styled-components";
import ChatBallon from "../components/chatting/ChatBallon";
import InputArea from "../components/chatting/InputArea";
import Header from "../components/common/Header";
import { PageContainer } from "../styles/common";
import { useEffect, useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import BottomSheet from "../components/common/BottomSheet";
import { getSocket } from "../services/socket";
import { Icon } from "@iconify/react";
import { ChatContext } from "../components/chatting/ChatProvider";
import { CHAT_PROCESSOR } from "../utils/chat";
import Greeting from "../components/chatting/contents/Greeting";
import { USER_API } from "../services/api/user";
import useToast from "../hooks/useToast";

const ChatPageContainer = styled(PageContainer)`
  margin-bottom: 85px;
  height: calc(100vh - 50px - 55px);
  padding-bottom: 220px;
  margin-top: 45px;
`;

const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 600px;
  background-color: #f1e9e9;
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
  const { addToast } = useToast();
  const socket = useMemo(() => getSocket(), []);

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
    socket.connect();
    socket.on("connect", () => {
      console.log("connect");
      socket.emit("loggedin", {});
    });
    socket.on("reply", (data) => {
      setIsLoading(false);
      setChatData((prevData) => [
        ...prevData,
        {
          type: "GENERAL",
          isMine: false,
          component: () =>
            CHAT_PROCESSOR.general(data.msg).map((line) => <div>{line}</div>),
        },
      ]);
    });
    return () => {
      socket.off("connect");
      socket.off("reply");
      socket.off("loggedin");
    };
  }, [socket]);

  return (
    <Page>
      <Header onClickMenu={() => setOnBottomSheet(true)} mode="CHAT" />
      <ChatPageContainer ref={containerRef}>
        <ChatContext.Provider
          value={{
            chats: chatData,
            addChat: (chat) => setChatData((chats) => [...chats, chat]),
          }}
        >
          {chatData.map((data, i) => (
            <ChatBallon
              isMine={data.isMine}
              type={data.type}
              key={`${data.props}${i}`}
            >
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
            socket.emit("sendreply", { input: data });
          }}
        />
      </ChatPageContainer>
      <BottomSheet
        onBottomSheet={onBottomSheet}
        setOnBottomSheet={setOnBottomSheet}
        onResetChattting={() =>
          setChatData([
            {
              isMine: false,
              props: {
                content: CHAT_PROCESSOR.greeting(
                  JSON.parse(localStorage.getItem("user")).name
                ),
              },
              component: (props) => <Greeting {...props} />,
            },
          ])
        }
        onLogout={() => {
          USER_API.logout();
          addToast("로그아웃 되었습니다.", "NOTICE");
          navigate("/login");
        }}
        mode="CHAT"
      />
    </Page>
  );
}

export default ChattingPage;
