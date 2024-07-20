import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-no-bg.png";
import shortLogo from "@/assets/kramank-short-logo.png";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="h-20 w-full fixed top-0 flex items-center justify-between shadow-xl bg-white z-10">
      <div
        onClick={() => navigate(RoutePath.LandingPage)}
        className="flex cursor-pointer"
      >
        <img src={shortLogo} alt="kramank logo" className="h-16 w-16" />
        <img src={logoImage} alt="kramank logo" className="w-48" />
      </div>
      <Button
        className="bg-black mr-4"
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
