import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./nav-bar/nav-bar";
import { useEffect, useState } from "react";
import { RoutePath } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddBranchDialog from "./add-branch-dialog/add-branch-dialog";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(RoutePath.DashboardHome);
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <div className="relative flex h-full w-full">
        <NavBar />
        <div className="flex flex-col h-[calc(100dvh-16px)] w-full">
          <div className="h-20 rounded-2xl shadow-all-sides md:ml-4 mb-4 bg-white flex justify-between px-4 items-center z-5">
            <span className="text-3xl">Infosys</span>
            <Button onClick={() => setDialogOpen(true)}>
              <PlusIcon className="h-4 w-4 mr-1 mb-1" />
              Add New Branch
            </Button>
          </div>
          <Outlet />
        </div>
      </div>
      <AddBranchDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </>
  );
}

export default Dashboard;
