import styled from "styled-components";
import { CHAT_PROCESSOR } from "../../../utils/chat";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function Detail({ content }) {
  return (
    <Container>
      {CHAT_PROCESSOR.quick(content).map((c) => (
        <div>{c}</div>
      ))}
    </Container>
  );
}

export default Detail;
