import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./side-bar/side-bar";
import { useEffect } from "react";
import { RoutePath } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(RoutePath.DashboardHome);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex h-full w-full">
      <SideBar />
      <div className="flex flex-col h-[calc(100dvh-16px)] w-full">
        <div className="h-20 rounded-2xl shadow-all-sides ml-4 mb-4 bg-white flex justify-between px-4 items-center z-5">
          <span className="text-3xl">Infosys</span>
          <Button>
            <PlusIcon className="h-4 w-4 mr-1 mb-1" />
            Add New Branch
          </Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
