import logo from "@/assets/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RoutePath } from "@/routes/paths";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authorizeUserThunk,
  clearError,
  loginUserThunk,
} from "./state/login.slice";
import { AppDispatch } from "@/store";
import { errorSelector, tokenSelector } from "./state/login.selector";
import { toast, Toaster } from "sonner";
import { useCookies } from "react-cookie";

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowPasswordCheckboxChecked, setIsShowPasswordCheckboxChecked] =
    useState<boolean>(false);

  const error = useSelector(errorSelector);
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (cookies.token) {
      dispatch(authorizeUserThunk(cookies.token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (error?.length > 0 && error !== "Invalid token") {
      toast.error("Error:", {
        description: error,
      });
    }
  }, [error]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  useEffect(() => {
    if (token?.length > 0 && !cookies.token) {
      setCookies("token", token, { maxAge: 60 * 60 * 3 });
      navigate(RoutePath.DashboardHome);
    }
  }, [cookies.token, navigate, setCookies, token]);

  if (token?.length > 0) {
    return <Navigate to={RoutePath.DashboardHome} />;
  }

  const handleCheckboxClick = () => {
    setIsShowPasswordCheckboxChecked((previous) => !previous);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUserThunk({ email, password }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center sm:bg-slate-200">
      <div className="bg-white w-full sm:w-8/12 sm:h-11/12 md:w-1/2 lg:w-[512px] pl-10 pr-16 pb-10 sm:rounded-2xl sm:shadow-2xl flex flex-col">
        <img src={logo} alt="logo" className="h-18 w-72 my-4" />
        <div className="flex flex-col pl-5">
          <span className="text-2xl">Login</span>
          <span className="py-2">Happy to See You! Log In Here</span>
        </div>
        <form onSubmit={handleLogin} className="pl-5 pt-4 pb-8">
          <div className="py-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              className="mt-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="py-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type={isShowPasswordCheckboxChecked ? "text" : "password"}
              id="password"
              autoComplete="true"
              minLength={3}
              className="mt-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="py-3 items-top flex space-x-2">
            <Checkbox
              id="remember"
              checked={isShowPasswordCheckboxChecked}
              onCheckedChange={handleCheckboxClick}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Password
              </label>
            </div>
          </div>
          <Button
            type="submit"
            disabled={email === "" || password === ""}
            className="mt-5 w-full"
          >
            Log In
          </Button>
        </form>
        <div className="pl-5">
          <span>{`Dont have an account? `}</span>
          <Link
            to={RoutePath.Waitlist}
            className="text-blue-600 hover:underline"
          >
            Register here
          </Link>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}

export default Login;
