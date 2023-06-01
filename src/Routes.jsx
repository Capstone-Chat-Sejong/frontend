import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChattingPage from "./pages/ChattingPage";
import NoticePage from "./pages/NoticePage";

function SerongRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/chat" element={<ChattingPage />} />
      <Route path="/notice" element={<NoticePage />} />
    </Routes>
  );
}

export default SerongRoutes;
