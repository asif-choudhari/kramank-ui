import React, { useEffect, useState } from "react";
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
import Spinner from "@/area/common/spinner";
import { Toaster } from "sonner";

const PrivateRoute = (): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [cookies] = useCookies(["token"]);

  const [checkComplete, setCheckComplete] = useState(false);

  const isDashboard: boolean = location.pathname.includes("dashboard");

  const token = useSelector(tokenSelector);
  const status = useSelector(statusSelector);

  useEffect(() => {
    const checkAuthorization = async () => {
      if (cookies.token) {
        await dispatch(authorizeUserThunk({ token: cookies.token }));
      }
      setCheckComplete(true);
    };

    checkAuthorization();
  }, [cookies.token, dispatch]);

  if (!checkComplete || status === "loading") {
    return (
      <div className="h-dvh w-svh flex bg-slate-100">
        <Spinner className="h-20 w-20 m-auto" />;
      </div>
    );
  }

  if (!token) {
    return <Navigate to={RoutePath.Login} />;
  }

  return (
    <div className="h-dvh w-dvw p-4 bg-slate-200">
      <div className={isDashboard ? "hidden" : ""}>
        <TopNav />
      </div>
      <Outlet />
      <Toaster richColors />
    </div>
  );
};

export default PrivateRoute;
