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

const navBarItems = [
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
  // {
  //   title: "Invoice",
  //   icon: <Newspaper />,
  //   path: RoutePath.DashboardInvoice,
  // },
  {
    title: "Raise Query",
    icon: <MailCheck />,
    path: RoutePath.DashboardRaiseQuery,
  },
];

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<string>("");

  useEffect(() => {
    setCurrentTab(location.pathname.split("/dashboard/")[1]);
  }, [location.pathname]);

  return (
    <div className="absolute md:static bottom-0 h-16 w-full md:block md:h-auto md:w-60 p-4 flex md:flex-col items-center shadow-bottom-nav md:shadow-all-sides rounded-2xl bg-white z-50">
      <Button
        onClick={() => {
          navigate(RoutePath.Products);
        }}
        className="rounded-lg bg-white text-stone-900 bg-stone-900 text-white"
      >
        <ArrowLeft />
        <p className="px-5 hidden md:block">Back to Products</p>
      </Button>
      <Separator className="mt-4 hidden md:block" />
      <div className="w-full md:w-14 p-2 flex md:inline md:p-0 md:w-full">
        {navBarItems.map((navItem) => (
          <div
            key={navItem.title}
            onClick={() => {
              navigate(navItem.path);
              setCurrentTab(navItem.path.split("/")[2]);
            }}
            className={`my-4 md:p-2 h-10 w-full flex items-center justify-center md:justify-start cursor-pointer rounded-md inline-block ${
              navItem.path.includes(currentTab) ? "bg-slate-600 text-white" : ""
            }`}
          >
            <span className="text-center">{navItem.icon}</span>
            <span className="pl-4 hidden md:block">{navItem.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
