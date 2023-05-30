import { useEffect, useState } from "react";
import { QUICK_API } from "../../../services/api/quick";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function GraduateInfo() {
  const [data, setData] = useState(null);
  useEffect(() => {
    QUICK_API.getButtonClick("졸업 요건 확인").then((res) => setData(res));
  }, []);

  return (
    <Container>
      졸업요건을 검사해볼 수 있는 사이트입니다!
      <a href={data?.output}>{data?.output.split("\n")[1]}</a>
    </Container>
  );
}
export default GraduateInfo;
