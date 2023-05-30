import { useEffect, useState } from "react";
import { QUICK_API } from "../../../services/api/quick";
import mapImage from "../../../assets/map.JPG";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
function MapInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    QUICK_API.getButtonClick("교내 지도").then((res) => setData(res));
  }, []);
  return (
    <Container>
      세종대학교의 지도입니다.
      <StyledImg src={mapImage} alt="지도" />
    </Container>
  );
}
export default MapInfo;
