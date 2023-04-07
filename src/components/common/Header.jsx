import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../assets/profileIcon.svg";
import { ReactComponent as HamburgerIcon } from "../../assets/hamburgerIcon.svg";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  background-color: ${({ theme }) => theme.color.white};
`;

const Left = styled.div`
  //TODO 로고?
`;

const Right = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px;
`;

function Header() {
  return (
    <Container>
      <Left></Left>
      <Right>
        <ProfileIcon width="28px" height="28px" />
        <HamburgerIcon width="32px" height="32px" />
      </Right>
    </Container>
  );
}

export default Header;
