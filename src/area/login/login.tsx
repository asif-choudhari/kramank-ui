import logo from "@/assets/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RoutePath } from "@/routes/paths";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "./state/login.slice";
import { AppDispatch } from "@/store";
import { errorSelector } from "./state/login.selector";
import { toast, Toaster } from "sonner";

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRemeberCheckboxChecked, setIsRemeberCheckboxChecked] =
    useState<boolean>(false);

  const error = useSelector(errorSelector);

  const handleCheckboxClick = () => {
    setIsRemeberCheckboxChecked((previous) => !previous);
  };

  const handleLogin = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUserThunk({ email, password }));
    if (error && error.length > 0) {
      toast.error("Error:", {
        description: error,
      });
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center sm:bg-slate-200">
      <div className="bg-white h-full w-full sm:w-8/12 sm:h-11/12 md:w-1/2 lg:w-[512px] pl-10 pr-16 pb-10 sm:rounded-2xl sm:shadow-2xl flex flex-col">
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
              type="password"
              id="password"
              autoComplete="true"
              className="mt-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="py-3 items-top flex space-x-2">
            <Checkbox
              id="remember"
              checked={isRemeberCheckboxChecked}
              onCheckedChange={handleCheckboxClick}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </div>
          <Button type="submit" className="mt-5 w-full">
            Log In
          </Button>
        </form>
        <div className="pl-5">
          <span>{`Dont have an account? `}</span>
          <Link to={RoutePath.Signup} className="text-blue-600 hover:underline">
            Register here
          </Link>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}

export default Login;
