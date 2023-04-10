import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as NoticeIcon } from "../../assets/notice.svg";
import { useContext } from "react";
import ToastContext from "./ToastContext";

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    30% {
        opacity: 1;
        transform: translateZ(0);
    }
    100% {
        opacity: 0;
    }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;

  display: flex;
  max-width: 300px;

  gap: 15px;
  padding: 15px;
  background: ${({ theme }) => theme.color.lightgray};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  animation: 3s ${fadeInUp} ease-out forwards;
`;

function ToastMessage({ message, type }) {
  const ctx = useContext(ToastContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      ctx.removeToast();
    }, 2000);
    return () => clearTimeout(timer);
  }, [ctx]);

  return (
    <>
      {ReactDOM.createPortal(
        <Toast>
          {type === "NOTICE" ? <NoticeIcon /> : <CheckIcon />}
          {message}
        </Toast>,
        document.getElementById("toast-message-root")
      )}
    </>
  );
}

export default ToastMessage;
