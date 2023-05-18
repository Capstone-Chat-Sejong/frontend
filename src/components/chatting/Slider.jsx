import styled from "styled-components";

const Slide = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  width: 80%;
  flex: none;
  padding: 15px;
  font-size: 12px;
  border-radius: 5px 35px 35px 35px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 10px;
`;
function Slider({ content }) {
  const result = [];
  const contents = content.split("\n");

  for (let i = 0; i < contents.length; i += 8) {
    result.push(contents.slice(i, i + 8));
  }
  return (
    <Container>
      {result.map((v) => (
        <Slide>
          {v.map((k) => (
            <div>{k}</div>
          ))}
        </Slide>
      ))}
    </Container>
  );
}
export default Slider;
