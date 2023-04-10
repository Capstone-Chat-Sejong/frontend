import { useContext } from "react";
import ToastContext from "../components/common/ToastContext";

function useToast() {
  return useContext(ToastContext);
}

export default useToast;
