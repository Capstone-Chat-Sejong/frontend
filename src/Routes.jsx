import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChattingPage from "./pages/ChattingPage";

function SerongRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chat" element={<ChattingPage />} />
    </Routes>
  );
}

export default SerongRoutes;
