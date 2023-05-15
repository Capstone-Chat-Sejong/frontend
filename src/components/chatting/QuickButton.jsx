import styled from "styled-components";
import { Icon } from "@iconify/react";

const Button = styled.button`
  aspect-ratio: calc(1 / 1);
  background-color: ${({ theme }) => theme.color.lightgray};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  margin: 3px;
  display: flex;
  gap: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function QuickButton({ value, onClick }) {
  return (
    <Button onClick={(e) => onClick(e)}>
      <Icon icon="material-symbols:local-cafe" color="#d0435b" width="25" />
      {value}
    </Button>
  );
}
export default QuickButton;
