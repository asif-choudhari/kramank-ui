import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./side-bar/side-bar";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { RoutePath } from "@/routes/paths";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(RoutePath.DashboardHome);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="h-screen flex">
      <SideBar />
      <Separator orientation="vertical" className="mr-8" />
      <Outlet />
    </div>
  );
}

export default Dashboard;
