import { useCallback, useMemo, useState } from "react";
import ToastContext from "./ToastContext";
import ToastMessage from "./ToastMessage";

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const addToast = useCallback((msg, type) => {
    setToast({ msg, type });
  }, []);

  const removeToast = useCallback(() => {
    setToast(null);
  }, []);

  const ctxValue = useMemo(() => {
    return { addToast, removeToast };
  }, [addToast, removeToast]);

  return (
    <ToastContext.Provider value={ctxValue}>
      {children}
      {toast && <ToastMessage message={toast.msg} type={toast.type} />}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
