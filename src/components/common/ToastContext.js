import React from "react";

const toastContext = {
  addToast: () => {},
  removeToast: () => {},
};

const ToastContext = React.createContext(toastContext);

export default ToastContext;
