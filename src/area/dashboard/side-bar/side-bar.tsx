import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarNavItems } from "./static-data";
import { RoutePath } from "@/routes/paths";
import { useEffect, useState } from "react";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<string>("");

  useEffect(() => {
    setCurrentTab(location.pathname.split("/dashboard/")[1]);
  }, [location.pathname]);

  return (
    <div className="w-60 h-screen p-4 flex flex-col items-center shadow-xl z-5">
      <div className="w-full">
        <Button
          onClick={() => {
            navigate(RoutePath.Login);
          }}
          className="w-full flex items-center justify-start"
        >
          <ArrowLeft className="size-5" />
          <p className="px-5">Back to Products</p>
        </Button>
      </div>
      <Separator className="mt-4" />
      <div className="w-full">
        {sidebarNavItems.map((sidebarNavItem) => (
          <div
            onClick={() => {
              navigate(sidebarNavItem.path);
              setCurrentTab(sidebarNavItem.title);
            }}
            className={`my-4 p-2 h-10 cursor-pointer rounded-md ${
              sidebarNavItem.path.endsWith(currentTab) ? "bg-slate-200" : "bg-none"
            }`}
          >
            {sidebarNavItem.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
