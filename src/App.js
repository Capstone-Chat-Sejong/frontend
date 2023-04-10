import SerongRoutes from "./Routes";
import ToastProvider from "./components/common/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <SerongRoutes />
    </ToastProvider>
  );
}

export default App;
