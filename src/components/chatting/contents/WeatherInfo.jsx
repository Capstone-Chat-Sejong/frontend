import { useEffect, useState } from "react";
import { QUICK_API } from "../../../services/api/quick";
import { CHAT_PROCESSOR } from "../../../utils/chat";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

function WeatherInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    QUICK_API.getWeather().then((res) => {
      setData(CHAT_PROCESSOR.quick(res.output));
    });
  }, []);

  if (!data) return <Icon icon="eos-icons:three-dots-loading" width={30} />;

  return (
    <Container>
      {data?.map((d) => (
        <div>{d}</div>
      ))}
    </Container>
  );
}
export default WeatherInfo;
