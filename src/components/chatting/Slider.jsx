import styled from "styled-components";
import { useState, useRef } from "react";
import { useMemo } from "react";

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

  ::-webkit-scrollbar {
    display: none;
  }
`;

function Slider({ content }) {
  const containerRef = useRef(null);
  const contents = content.split("\n");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const result = [];
  for (let i = 0; i < contents.length; i += 8) {
    result.push(contents.slice(i, i + 8));
  }

  // 가로 스크롤 드래그 앤 드롭
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX + containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    containerRef.current.scrollLeft = startX - event.pageX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Container
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={isDragging ? handleMouseMove : null}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
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
