import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./side-bar/side-bar";
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
    <div className="flex h-full w-full">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
