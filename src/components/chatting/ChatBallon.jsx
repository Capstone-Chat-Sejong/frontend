import styled from "styled-components";
import Serong from "../common/Serong";
import { Icon } from "@iconify/react";

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  padding: 8px 10px;
  gap: 5px;
  font-size: 14px;
  align-items: baseline;
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
`;

const Feedback = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  padding: 0 5px;
`;
const SlideContainer = styled.div`
  width: calc(100% - 45px);
`;
function ChatBallon({ isMine, type, children }) {
  return (
    <Container isMine={isMine}>
      {!isMine && <Serong size="45px" />}
      {type === "SLIDER" && <SlideContainer>{children}</SlideContainer>}
      <BallonBox>
        {type !== "SLIDER" && (
          <Ballon isMine={isMine}>
            {children}
            {!isMine &&
              false && ( // TODO 피드백 받을 만한 정보일 때만, 클릭시 fill
                <Feedback>
                  <Icon
                    icon="bi:hand-thumbs-up"
                    color="red"
                    width="14"
                    height="14"
                  />
                  <Icon
                    icon="bi:hand-thumbs-down"
                    color="blue"
                    width="14"
                    height="14"
                  />
                </Feedback>
              )}
          </Ballon>
        )}
      </BallonBox>
    </Container>
  );
}

export default ChatBallon;
