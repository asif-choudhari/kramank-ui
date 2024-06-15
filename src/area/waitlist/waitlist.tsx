import logo from "@/assets/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RoutePath } from "@/routes/paths";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";

function Waitlist() {
  // const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  const [fullName, setFullName] = useState<string>("");
  const [businessEmail, setBusinessEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [website, setWebsite] = useState<string>("");

  const handleJoinWaitlist = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center sm:bg-slate-200">
      <div className="bg-white w-full sm:w-8/12 sm:h-11/12 md:w-1/2 lg:w-[512px] pl-10 pr-16 pb-10 sm:rounded-2xl sm:shadow-2xl flex flex-col">
        <img src={logo} alt="logo" className="h-12 w-48 my-4" />
        <div className="flex flex-col pl-5">
          <span className="py-2">
            Fill out the form and the representative from KRAMANK will contact
            you
          </span>
        </div>
        <form onSubmit={handleJoinWaitlist} className="pl-5 pt-4 pb-8">
          <div className="py-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              className="mt-2"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div className="py-2">
            <Label htmlFor="email">Business Email</Label>
            <Input
              type="email"
              id="email"
              className="mt-2"
              value={businessEmail}
              onChange={(event) => setBusinessEmail(event.target.value)}
            />
          </div>
          <div className="py-2">
            <Label htmlFor="password">Location</Label>
            <Input
              type="text"
              id="location"
              autoComplete="true"
              minLength={3}
              className="mt-2"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div className="py-2">
            <Label htmlFor="name">Business Website</Label>
            <Input
              type="text"
              id="name"
              className="mt-2"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={
              fullName === "" || businessEmail === "" || location === ""
            }
            className="mt-5 w-full"
          >
            Join the Waitlist
          </Button>
        </form>
        <div className="pl-5">
          <span>{`Already have an account? `}</span>
          <Link to={RoutePath.Login} className="text-blue-600 hover:underline">
            Login here
          </Link>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}

export default Waitlist;
