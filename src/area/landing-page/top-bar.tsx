import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-no-bg.png";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="h-20 w-full p-4 fixed top-0 flex items-center justify-between shadow-xl bg-white z-10">
      <div
        onClick={() => navigate(RoutePath.LandingPage)}
        className="w-48 cursor-pointer"
      >
        <img src={logoImage} alt="kramank logo" />
      </div>
      <Button
        className="bg-black"
        onClick={() => {
          navigate(RoutePath.Waitlist);
        }}
      >
        Register
      </Button>
    </div>
  );
}

export default TopBar;
