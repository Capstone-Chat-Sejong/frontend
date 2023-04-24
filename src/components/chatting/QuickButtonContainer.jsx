import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;

  gap: 10px;
  & > button {
    flex: none;
  }

  padding: 0 10px;
`;

function QuickButtonContainer({ children }) {
  return <Container>{children}</Container>;
}
export default QuickButtonContainer;
