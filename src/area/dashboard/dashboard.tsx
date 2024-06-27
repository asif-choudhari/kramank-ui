import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./nav-bar/nav-bar";
import { useEffect } from "react";
import { RoutePath } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddBranchDialog from "./add-branch-dialog/add-branch-dialog";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate(RoutePath.DashboardHome);
    }
  }, [location.pathname, navigate]);

  return (
    <Dialog>
      <div className="relative flex h-full w-full">
        <NavBar />
        <div className="flex flex-col w-full">
          <div className="h-20 rounded-2xl shadow-all-sides md:ml-4 mb-4 bg-white flex justify-between px-4 items-center z-5">
            <span className="text-3xl">Infosys</span>
            <DialogTrigger asChild>
              <Button>
                <PlusIcon className="h-4 w-4 mr-1 mb-1" />
                Add New Branch
              </Button>
            </DialogTrigger>
          </div>
          <Outlet />
        </div>
      </div>
      <AddBranchDialog />
    </Dialog>
  );
}

export default Dashboard;
