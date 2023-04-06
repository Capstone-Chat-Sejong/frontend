import styled from "styled-components";
import serong from "../../assets/serong.png";

const Box = styled.div`
  background-image: url(${serong});
  background-size: cover;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

function Serong({ size }) {
  return <Box size={size} />;
}

export default Serong;
