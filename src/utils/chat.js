export const CHAT_PROCESSOR = {
  greeting: (name) =>
    `안녕하세요! 스마트 어시스턴트 "세롱이" 입니다. ${name}님의 학교생활을 도와드리겠습니다. 세종대학교에 관한 것이라면 무엇이든 물어보세요.`,
  general: (reply) => reply.split("\n"),
  quick: (reply) => {
    const arr = reply.split("\n");
    return arr;
  },
};
