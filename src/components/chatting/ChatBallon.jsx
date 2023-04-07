import styled from "styled-components";
import Serong from "../common/Serong";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  padding: 10px;
  gap: 5px;
`;

const Ballon = styled.div`
  background-color: ${(props) =>
    props.isMine ? `${props.theme.color.red}99` : props.theme.color.gray};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 60px;
  padding: 12px;
  max-width: 80%;
  word-break: break-all;
`;

function ChatBallon({ isMine, content }) {
  return (
    <Container isMine={isMine}>
      {!isMine && <Serong size="45px" />}
      <Ballon isMine={isMine}>{content}</Ballon>
    </Container>
  );
}

export default ChatBallon;
