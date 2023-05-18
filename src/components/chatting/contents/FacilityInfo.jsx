import { useContext, useEffect, useState } from "react";
import { QUICK_API } from "../../../services/api/quick";
import styled from "styled-components";
import QuickButton from "../QuickButton";
import { ChatContext } from "../ChatProvider";
import Slider from "../Slider";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > button {
    width: 43%;
  }

  padding: 10px 0;
`;

function FacilityInfo() {
  const [data, setData] = useState(null);
  const ctx = useContext(ChatContext);

  useEffect(() => {
    QUICK_API.getButtonClick("편의 시설").then((res) => setData(res));
  }, []);

  return (
    <>
      {data?.content}
      <Container>
        {data?.sub.map((v) => (
          <QuickButton
            value={v.value}
            key={v.id}
            onClick={async () => {
              ctx.addChat({
                isMine: true,
                component: () => v.value,
              });
              const result = await QUICK_API.getButtonClick(v.value);
              ctx.addChat({
                type: "SLIDER",
                isMine: false,
                component: () => <Slider content={result.content} />,
              });
            }}
          />
        ))}
      </Container>
    </>
  );
}
export default FacilityInfo;
