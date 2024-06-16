import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { authorizeUserThunk } from "@/area/login/state/login.slice";
import { AppDispatch } from "@/store";
import { useCookies } from "react-cookie";
import { tokenSelector } from "@/area/login/state/login.selector";
import { RoutePath } from "./paths";

const PrivateRoute = (): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["token"]);

  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (cookies.token) {
      dispatch(authorizeUserThunk(cookies.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token?.length === 0) {
    return <Navigate to={RoutePath.Login} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
