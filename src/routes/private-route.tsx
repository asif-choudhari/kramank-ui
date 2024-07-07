import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  authorizeUserThunk,
  setAuth,
  setToken,
} from "@/area/login/state/login.slice";
import { AppDispatch } from "@/store";
import { useCookies } from "react-cookie";
import { RoutePath } from "./paths";
import TopNav from "@/area/top-nav/top-nav";
import Spinner from "@/area/common/spinner";
import { Toaster } from "sonner";

const PrivateRoute = (): React.ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies] = useCookies(["token"]);

  const [checkComplete, setCheckComplete] = useState(false);

  const isDashboard: boolean = location.pathname.includes("dashboard");

  useEffect(() => {
    const checkAuthorization = async () => {
      if (cookies.token) {
        setCheckComplete(false);
        await dispatch(authorizeUserThunk({ token: cookies.token })).then(
          (response) => {
            if (response.type.includes("rejected")) {
              navigate(RoutePath.Login);
            } else {
              dispatch(setAuth(response.payload));
              dispatch(setToken(cookies.token));
            }
          }
        );
        setCheckComplete(true);
      } else {
        navigate(RoutePath.Login);
      }
    };

    checkAuthorization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {checkComplete ? (
        <div className="h-dvh w-dvw p-4 bg-slate-200">
          <div className={isDashboard ? "hidden" : ""}>
            <TopNav />
          </div>
          <Outlet />
          <Toaster richColors />
        </div>
      ) : (
        <div className="h-dvh w-svh flex bg-slate-200">
          <Spinner className="h-20 w-20 m-auto" />;
        </div>
      )}
    </>
  );
};

export default PrivateRoute;
