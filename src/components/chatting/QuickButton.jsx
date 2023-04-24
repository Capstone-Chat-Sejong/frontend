import styled from "styled-components";

const Button = styled.button`
  height: 30px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.lightgray};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function QuickButton({ value, onClick }) {
  return <Button onClick={(e) => onClick(e)}>{value}</Button>;
}
export default QuickButton;
