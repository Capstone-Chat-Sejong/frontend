import Header from "../components/common/Header";
import styled from "styled-components";
import BottomSheet from "../components/common/BottomSheet";
import { useEffect, useState } from "react";
import { USER_API } from "../services/api/user";
import useToast from "../hooks/useToast";
import { useNavigate } from "react-router-dom";
import NOTICE_API from "../services/api/notice";
import NoticeBox from "../components/notice/NoticeBox";
import { PageContainer } from "../styles/common";
import { Icon } from "@iconify/react";

const NoticePageContainer = styled(PageContainer)`
  height: calc(100vh);
  padding-bottom: 220px;
  margin-top: 45px;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  margin: auto;
`;

const FloatingButton = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0%);

  padding: 15px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.red}99;
  border-radius: 15px;
  color: black;
  font-size: 13px;
  box-shadow: 0px 4px 0px #ce6375db;
`;
const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 600px;
  background-color: #f1e9e9;
`;

const SelectButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0 0 0;
  gap: 5px;
`;
const SelectButton = styled.button`
  padding: 15px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.isClicked ? "#ffffff6e" : "#7575756d")};
  border-radius: 15px 15px 0 0;
  color: black;
  font-size: 15px;
  font-weight: 700;
  /* box-shadow: 0px 4px 0px #ce6375db; */
`;
const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: #ffffff6e;
  padding: 20px;
  border-radius: 20px;
`;

function NoticePage() {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [onBottomSheet, setOnBottomSheet] = useState(false);
  const [notices, setNotices] = useState();
  const [mode, setMode] = useState("general");
  const [isLoading, setIsLodaing] = useState(true);

  useEffect(() => {
    NOTICE_API.getNotices().then((res) => {
      if (mode === "general") {
        setNotices(res.general);
      }
      if (mode === "univ") {
        setNotices(res.univ);
      }
      setIsLodaing(false);
    });
  }, [mode]);

  return (
    <>
      <Page>
        <Header onClickMenu={() => setOnBottomSheet(true)} mode="NOTICE" />
        <NoticePageContainer>
          <SelectButtons>
            <SelectButton
              isClicked={mode === "general"}
              onClick={() => {
                setIsLodaing(true);
                setMode("general");
              }}
            >
              일반 공지
            </SelectButton>
            <SelectButton
              isClicked={mode === "univ"}
              onClick={() => {
                setIsLodaing(true);
                setMode("univ");
              }}
            >
              학사 공지
            </SelectButton>
          </SelectButtons>
          <NoticeContainer>
            {isLoading && (
              <IconWrapper>
                <Icon
                  icon="eos-icons:three-dots-loading"
                  width={50}
                  height={50}
                />
              </IconWrapper>
            )}
            {!isLoading && notices?.map((v) => <NoticeBox value={v} />)}
          </NoticeContainer>
          <FloatingButton>
            <a
              href="http://sejong.ac.kr/community/index.html#none"
              style={{ color: "black" }}
            >
              공지사항 바로가기
            </a>
          </FloatingButton>
        </NoticePageContainer>
      </Page>
      <BottomSheet
        onBottomSheet={onBottomSheet}
        setOnBottomSheet={setOnBottomSheet}
        onLogout={() => {
          USER_API.logout();
          addToast("로그아웃 되었습니다.", "NOTICE");
          navigate("/login");
        }}
      />
    </>
  );
}
export default NoticePage;
