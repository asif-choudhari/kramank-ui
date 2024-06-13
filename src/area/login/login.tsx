import logo from "@/assets/logo-no-bg.png"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RoutePath } from "@/routes/paths";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRemeberCheckboxChecked, setIsRemeberCheckboxChecked] = useState<boolean>(false);

  const handleCheckboxClick = () => {
    setIsRemeberCheckboxChecked((previous) => !previous);
  }

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center sm:bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white h-11/12 w-full sm:w-8/12 md:w-1/2 lg:w-[512px] pl-10 pr-16 pb-10 sm:rounded-2xl sm:shadow-2xl flex flex-col">
        <img 
          src={logo} 
          alt="logo" 
          className="h-18 w-72 my-4" />
        <div className="flex flex-col pl-5">
          <span className="text-2xl">Login</span>
          <span className="py-2">Happy to See You! Log In Here</span>
        </div>
        <div className="pl-5 pt-4 pb-8">
          <div className="py-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" className="mt-2" value={email} onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <div className="py-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" autoComplete="true" className="mt-2" value={password} onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className="py-3 items-top flex space-x-2">
            <Checkbox id="remember" checked={isRemeberCheckboxChecked} onCheckedChange={handleCheckboxClick} />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </div>
          <Button 
            type="submit" 
            onClick={handleLogin}
            className="mt-5 w-full">
              Log In
          </Button>
        </div>
        <div className="pl-5">
          <span>{`Dont have an account? `}</span>
          <Link to={RoutePath.Signup} className="text-blue-600 hover:underline">Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;