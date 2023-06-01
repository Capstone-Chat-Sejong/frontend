import styled from "styled-components";

const Box = styled.div`
  width: 95%;
  margin: 0 auto;
  background-color: #ffffffbb;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 2px 2px 2px 1px #6262625b;
  font-size: 13px;
`;

function NoticeBox({ value }) {
  return <Box>📋 {value}</Box>;
}
export default NoticeBox;
