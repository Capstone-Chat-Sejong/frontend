import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
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
    }, 3000);
    return () => clearTimeout(timer);
  }, [ctx]);

  return (
    <>
      {ReactDOM.createPortal(
        <Toast>
          <Icon
            icon={
              type === "NOTICE"
                ? "material-symbols:check-circle"
                : "material-symbols:error"
            }
            color={type === "NOTICE" ? "#4ecc71" : "#D81F1F"}
            width="26"
            height="26"
          />

          {message}
        </Toast>,
        document.getElementById("toast-message-root")
      )}
    </>
  );
}

export default ToastMessage;
