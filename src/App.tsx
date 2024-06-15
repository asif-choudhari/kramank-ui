import { BrowserRouter } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import AppRoutes from "@/routes/app-routes";
import { AppDispatch } from "./store";
import { useEffect } from "react";
import { setToken } from "@/area/login/state/login.slice";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      dispatch(setToken(cookies.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <AppRoutes />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
