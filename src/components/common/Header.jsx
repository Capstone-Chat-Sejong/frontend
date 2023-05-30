import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 0 0 10px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.red};
  color: white;
`;

const Left = styled.div`
  //TODO 로고?
  width: 52px;
`;
const Center = styled.div`
  font-weight: 600;
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
`;

function Header({ onClickMenu }) {
  return (
    <Container>
      <Left></Left>
      <Center>Serong</Center>
      <Right>
        <Icon
          icon="pajamas:hamburger"
          width="23"
          height="23"
          onClick={() => onClickMenu()}
        />
      </Right>
    </Container>
  );
}

export default Header;
