import styled from "styled-components";
import Serong from "../common/Serong";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  padding: 8px 10px;
  gap: 5px;
  font-size: 14px;
  align-items: baseline;

  position: relative;
`;

const BallonBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;
const Ballon = styled.div`
  background-color: ${(props) =>
    props.isMine ? `${props.theme.color.red}99` : props.theme.color.gray};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) =>
    props.isMine ? "35px 5px 35px 35px" : "5px 35px 35px 35px"};
  padding: 10px 15px;
  word-break: break-all;
  font-size: 12px;

  max-width: 250px;
`;

const Feedback = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 3px;
  padding: 5px 0 2px 0;
`;
const SlideContainer = styled.div`
  width: calc(100% - 45px);
`;

function ChatBallon({ isMine, type, children }) {
  const [feedbackState, setFeedbackState] = useState();

  return (
    <Container isMine={isMine}>
      {!isMine && <Serong size="45px" />}
      {type === "SLIDER" && <SlideContainer>{children}</SlideContainer>}
      <BallonBox>
        {type !== "SLIDER" && <Ballon isMine={isMine}>{children}</Ballon>}
      </BallonBox>
      {!isMine && type === "GENERAL" && (
        <Feedback>
          <Icon
            icon="fluent:thumb-like-16-filled"
            color={feedbackState === "GOOD" ? "pink" : "gray"}
            width="14"
            height="14"
            onClick={() => setFeedbackState("GOOD")}
          />
          <Icon
            icon="fluent:thumb-dislike-20-filled"
            color={feedbackState === "BAD" ? "skyblue" : "gray"}
            width="14"
            height="14"
            onClick={() => setFeedbackState("BAD")}
          />
        </Feedback>
      )}
    </Container>
  );
}

export default ChatBallon;
