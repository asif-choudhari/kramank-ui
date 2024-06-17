import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ClipboardList,
  Landmark,
  MailCheck,
  Newspaper,
  Store,
  Wallet,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths";
import { useEffect, useState } from "react";

const sidebarNavItems = [
  {
    title: "Home",
    icon: <Landmark />,
    path: RoutePath.DashboardHome,
  },
  {
    title: "Admin & Branch",
    icon: <Store />,
    path: RoutePath.DashboardAdminAndBranch,
  },
  {
    title: "Budget",
    icon: <Wallet />,
    path: RoutePath.DashboarBudget,
  },
  {
    title: "Report",
    icon: <ClipboardList />,
    path: RoutePath.DashboardReport,
  },
  {
    title: "Invoice",
    icon: <Newspaper />,
    path: RoutePath.DashboardInvoice,
  },
  {
    title: "Raise Query",
    icon: <MailCheck />,
    path: RoutePath.DashboardRaiseQuery,
  },
];

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<string>("");

  useEffect(() => {
    setCurrentTab(location.pathname.split("/dashboard/")[1]);
  }, [location.pathname]);

  return (
    <div className="h-auto w-14 md:w-60 p-4 flex flex-col items-center shadow-all-sides rounded-lg md:rounded-2xl bg-white z-5">
      <Button
        onClick={() => {
          navigate(RoutePath.Products);
        }}
        className="rounded-lg bg-white text-stone-900 md:bg-stone-900 md:text-white"
      >
        <ArrowLeft />
        <p className="px-5 hidden md:block">Back to Products</p>
      </Button>
      <Separator className="mt-4" />
      <div className="w-14 p-2 md:p-0 md:w-full">
        {sidebarNavItems.map((sidebarNavItem) => (
          <div
            key={sidebarNavItem.title}
            onClick={() => {
              navigate(sidebarNavItem.path);
              setCurrentTab(sidebarNavItem.title);
            }}
            className={`my-4 md:p-2 h-10 w-full flex items-center justify-center md:justify-start cursor-pointer rounded-md inline-block ${
              sidebarNavItem.path.includes(currentTab)
                ? "bg-slate-600 text-white"
                : ""
            }`}
          >
            <span className="text-center">{sidebarNavItem.icon}</span>
            <span className="pl-4 hidden md:block">{sidebarNavItem.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
