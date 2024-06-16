import logo from "@/assets/logo-no-bg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, LogOut, Search, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../login/state/login.selector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppDispatch } from "@/store";
import { resetLoginSlice } from "../login/state/login.slice";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/routes/paths";

function TopNav() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector(userSelector);

  const avatarName =
    user.firstName?.charAt(0).toUpperCase() +
    user.lastName?.charAt(0).toUpperCase();

  const handleLogout = () => {
    dispatch(resetLoginSlice());
    navigate(RoutePath.Login);
  };

  return (
    <div className="h-16 px-4 grid grid-cols-2 sm:grid-cols-3 items-center rounded-2xl bg-white shadow-all-sides">
      <div className="w-48 cursor-pointer hidden sm:block">
        <img src={logo} alt="logo" />
      </div>
      <div className="relative w-full max-w-[500px]">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search Prodcuts"
          className="pl-8 hover:border-none focus:border-none"
        />
      </div>
      <div className="flex items-center justify-end">
        <div className="px-3">
          <ShoppingCart />
        </div>
        <div className="px-3 ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer hover:border-2 hover:border-slate-500">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>{avatarName}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{`${user.firstName} ${user.lastName}`}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    navigate(RoutePath.DashboardHome);
                  }}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
