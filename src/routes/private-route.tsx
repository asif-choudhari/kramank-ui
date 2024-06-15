import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { authorizeUserThunk } from "@/area/login/state/login.slice";
import { AppDispatch } from "@/store";
import { useCookies } from "react-cookie";

type PrivateRoutePropsType = {
  children?: React.ReactNode;
};

const PrivateRoute = ({
  children,
}: PrivateRoutePropsType): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      dispatch(authorizeUserThunk(cookies.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children ? children : <Outlet />}</>;
};

export default PrivateRoute;
