import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authorizeUserThunk } from "@/area/login/state/login.slice";
import { AppDispatch } from "@/store";
import { useCookies } from "react-cookie";
import {
  statusSelector,
  tokenSelector,
} from "@/area/login/state/login.selector";
import { RoutePath } from "./paths";
import TopNav from "@/area/top-nav/top-nav";

const PrivateRoute = (): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [cookies] = useCookies(["token"]);

  const isDashboard: boolean = location.pathname.includes("dashboard");

  const token = useSelector(tokenSelector);
  const status = useSelector(statusSelector);

  if (cookies.token) {
    dispatch(authorizeUserThunk({ token: cookies.token }));
  }

  if (token.length === 0 && status != "loading") {
    return <Navigate to={RoutePath.Login} />;
  }

  return (
    <div className="h-dvh w-dvw p-4 bg-slate-100">
      <div className={isDashboard ? "hidden" : ""}>
        <TopNav />
      </div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
