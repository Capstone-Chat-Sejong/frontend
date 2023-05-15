import { createContext, useState } from "react";
import { CHAT_PROCESSOR } from "../../utils/chat";

export const ChatContext = createContext(null);

/**TODO 제거 or 다 여기로 분리해야함 */
export default function ChatProvider({ children }) {
  const [chats, setChats] = useState([
    {
      type: "GREETING",
      isMine: false,
      content: CHAT_PROCESSOR.greeting(
        JSON.parse(localStorage.getItem("user")).name
      ),
    },
  ]);

  return (
    <ChatContext.Provider
      value={{
        chats: chats,
        addChat: (chat) => setChats((chats) => [...chats, chat]),
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
