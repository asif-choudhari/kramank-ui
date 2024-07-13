import AppRoutes from "@/routes/app-routes";
import useScrollToTop from "./area/common/useScrollToTop";

function App() {
  useScrollToTop();

  return <AppRoutes />;
}

export default App;
