import { useContext, useEffect, useState } from "react";
import { QUICK_API } from "../../../services/api/quick";
import styled from "styled-components";
import { ChatContext } from "../ChatProvider";
import Detail from "./Detail";

const MajorBtn = styled.button`
  width: 47%;
  height: 30px;
  min-width: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  font-size: 11px;
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

function SubMajorInfo({ major }) {
  const [data, setData] = useState(null);
  const ctx = useContext(ChatContext);

  useEffect(() => {
    QUICK_API.getButtonClick(major).then((res) => setData(res));
  }, [major]);

  return (
    <Container>
      {data?.content}
      <Buttons>
        {data?.sub.map((s) => {
          return (
            <MajorBtn
              value={s.value}
              onClick={async () => {
                ctx.addChat({
                  isMine: true,
                  component: () => s.value,
                });
                const res = await QUICK_API.getButtonClick(s.value);

                ctx.addChat({
                  isMine: false,
                  component: () => <Detail content={res.output} />,
                });
              }}
            >
              {s.value}
            </MajorBtn>
          );
        })}
      </Buttons>
    </Container>
  );
}

function MajorInfo() {
  const [data, setData] = useState(null);
  const ctx = useContext(ChatContext);

  useEffect(() => {
    QUICK_API.getButtonClick("학과 정보").then((res) => setData(res));
  }, []);

  return (
    <Container>
      {data?.content}
      <Buttons>
        {data?.sub.map((s) => {
          return (
            <MajorBtn
              value={s.value}
              onClick={() => {
                ctx.addChat({
                  isMine: true,
                  component: () => s.value,
                });
                ctx.addChat({
                  isMine: false,
                  component: () => <SubMajorInfo major={s.value} />,
                });
              }}
            >
              {s.value}
            </MajorBtn>
          );
        })}
      </Buttons>
    </Container>
  );
}
export default MajorInfo;
