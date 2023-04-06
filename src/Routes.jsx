import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function SerongRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default SerongRoutes;
