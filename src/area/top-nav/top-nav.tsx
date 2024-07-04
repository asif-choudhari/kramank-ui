import { useEffect, useState } from "react";
import logo from "@/assets/logo-no-bg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard,
  LogOut,
  Search,
  ShoppingCart,
  Lock,
} from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function TopNav() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector(userSelector);

  const [userProfileDialogOpen, setUserProfileDialogOpen] =
    useState<boolean>(false);
  const [changePasswordDialogOpen, setChangePasswordDialogOpen] =
    useState<boolean>(false);
  const [adminFirstName, setAdminFirstName] = useState<string>(user.firstName);
  const [adminLastName, setAdminLastName] = useState<string>(user.lastName);
  const [adminEmail, setAdminEmail] = useState<string>(user.email);
  const [adminMobile, setAdminMobile] = useState<string>("");

  const [newPassword, setNewPassword] = useState<string>("");
  const [newPassWordConfirm, setNewPassWordConfirm] = useState<string>("");

  const avatarName =
    user.firstName?.charAt(0).toUpperCase() +
    user.lastName?.charAt(0).toUpperCase();

  const handleLogout = () => {
    dispatch(resetLoginSlice());
    navigate(RoutePath.Login);
  };

  useEffect(() => {
    if (userProfileDialogOpen) {
      setAdminFirstName(user.firstName);
      setAdminLastName(user.lastName);
      setAdminEmail(user.email);
      setAdminMobile("");
    }
  }, [userProfileDialogOpen, user]);

  return (
    <div className="h-16 px-4 mb-2 grid grid-cols-2 sm:grid-cols-3 items-center rounded-2xl bg-white shadow-all-sides">
      <div className="w-48 cursor-pointer hidden sm:block">
        <img src={logo} alt="logo" />
      </div>
      <div className="relative w-full max-w-[500px]">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search Products"
          className="pl-8 hover:border-none focus:border-none"
        />
      </div>
      <div className="flex items-center justify-end">
        <div className="px-3">
          <ShoppingCart />
        </div>
        <div className="px-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer hover:border-2 hover:border-slate-500">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>{avatarName}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel
                className="font-normal cursor-pointer"
                onClick={() => setUserProfileDialogOpen(true)}
              >
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
                  onClick={() => setChangePasswordDialogOpen(true)}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  <span>Change Password</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => navigate(RoutePath.DashboardHome)}
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
      <Dialog
        open={userProfileDialogOpen}
        onOpenChange={setUserProfileDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update User Profile</DialogTitle>
          </DialogHeader>
          <div>
            <Label htmlFor="adminFirstName">First Name</Label>
            <Input
              type="text"
              id="adminFirstName"
              className="mt-2"
              placeholder="First Name"
              value={adminFirstName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAdminFirstName(event.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="adminLastName">Last Name</Label>
            <Input
              type="text"
              id="adminLastName"
              className="mt-2"
              placeholder="Last Name"
              value={adminLastName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAdminLastName(event.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="adminEmail">Email (business)</Label>
            <Input
              type="email"
              id="adminEmail"
              className="mt-2"
              value={adminEmail}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAdminEmail(event.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="adminMobile">Admin Mobile No.</Label>
            <Input
              type="text"
              id="adminMobile"
              className="mt-2"
              value={adminMobile}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAdminMobile(event.target.value)
              }
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={changePasswordDialogOpen}
        onOpenChange={setChangePasswordDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="text"
              id="newPassword"
              className="mt-2"
              value={newPassword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setNewPassword(event.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            <Input
              type="text"
              id="confirmNewPassword"
              className="mt-2"
              value={newPassWordConfirm}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setNewPassWordConfirm(event.target.value)
              }
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TopNav;
