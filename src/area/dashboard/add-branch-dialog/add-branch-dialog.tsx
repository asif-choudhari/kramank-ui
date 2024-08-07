import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import { tokenSelector, userSelector } from "@/area/login/state/login.selector";
import { getAdminListThunk } from "../admin-branch/state/admin-branch.slice";
import { toast } from "sonner";
import {
  AddNewBranchThunk,
  setAdminList,
} from "./state/add-branch-dialog.slice";
import { adminListSelector } from "./state/add-branch-dialog.selector";

type AddBranchDialogPropsType = {
  dialogOpen: boolean;
  setDialogOpen: (dialogOpen: boolean) => void;
};

function AddBranchDialog({
  dialogOpen,
  setDialogOpen,
}: AddBranchDialogPropsType) {
  const dispatch = useDispatch<AppDispatch>();

  const [branchName, setBranchName] = useState<string>("");
  const [adminFirstName, setAdminFirstName] = useState<string>("");
  const [adminLastName, setAdminLastName] = useState<string>("");
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [adminMobile, setAdminMobile] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [isNewAdmin, setIsNewAdmin] = useState<boolean>(false);
  const [selectedAdmin, setSelectedAdmin] = useState<string>("");

  const token = useSelector(tokenSelector);
  const user = useSelector(userSelector);
  const adminList = useSelector(adminListSelector);

  useEffect(() => {
    if (!isNewAdmin) {
      dispatch(getAdminListThunk({ token, companyId: user.companyId })).then(
        (response) => {
          response.type.includes("rejected")
            ? toast.error("Could not fetch Admin List")
            : dispatch(setAdminList(response.payload));
        }
      );
    }
  }, [dispatch, token, isNewAdmin, user.companyId]);

  const handleAddBranch = () => {
    const addNewBranch = async () => {
      await dispatch(
        AddNewBranchThunk({
          token,
          companyId: user.companyId,
          branchName,
          isNewAdmin,
          adminUserId: Number(selectedAdmin),
          adminFirstName,
          adminLastName,
          adminEmail,
          adminMobile,
          address,
          state,
        })
      )
        .then((response) => {
          if (response.type.includes("rejected")) {
            toast.error("Could not add new branch");
          } else {
            toast.success("Added new branch");
            window.location.reload();
          }
        })
        .finally(() => {
          toast.success("Added new branch");
          setDialogOpen(false);
        });
    };

    if (isValid()) {
      addNewBranch();
    }
  };

  const isValid = () => {
    let valid = true;
    if (!branchName) {
      toast.error("Invalid branch name");
      valid = false;
    }
    if (isNewAdmin) {
      if (!adminFirstName) {
        toast.error("Invalid admin first name");
        valid = false;
      }
      if (!adminLastName) {
        toast.error("Invalid admin last name");
        valid = false;
      }
      if (!adminEmail) {
        toast.error("Invalid admin email");
        valid = false;
      }
      if (adminEmail.includes("@gmail.com")) {
        toast.warning("Use valid business email");
        valid = false;
      }
      if (!adminMobile) {
        toast.error("Invalid admin mobile");
        valid = false;
      }
      if (adminMobile.length != 10) {
        toast.warning("Make sure Mobile number is 10 digits");
        valid = false;
      }
    } else {
      if (!selectedAdmin) {
        toast.error("Select an admin");
        valid = false;
      }
    }

    if (!address) {
      toast.error("Invalid address");
      valid = false;
    }

    if (!state) {
      toast.error("Invalid state");
      valid = false;
    }

    return valid;
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="max-h-[calc(100dvh-100px)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Branch</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="branchName">Branch Name</Label>
          <Input
            type="text"
            id="branchName"
            className="mt-2"
            value={branchName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setBranchName(event.target.value)
            }
          />
        </div>
        <div className="flex items-center">
          <Checkbox
            id="newAdmin"
            name="newAdmin"
            checked={isNewAdmin}
            onCheckedChange={() => {
              setIsNewAdmin(!isNewAdmin);
            }}
            className="mr-2"
          />
          <Label htmlFor="newAdmin">Add New Admin?</Label>
        </div>
        {isNewAdmin ? (
          <>
            <div>
              <Label htmlFor="adminName">Admin Name</Label>
              <Input
                type="text"
                id="adminName"
                className="mt-2"
                placeholder="First Name"
                value={adminFirstName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setAdminFirstName(event.target.value)
                }
              />
              <Input
                type="text"
                id="adminName"
                className="mt-2"
                placeholder="Last Name"
                value={adminLastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setAdminLastName(event.target.value)
                }
              />
            </div>
            <div>
              <Label htmlFor="adminEmail">Admin Email (business)</Label>
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
          </>
        ) : (
          <div>
            <Label htmlFor="admin">Admin</Label>
            <Select
              defaultValue={selectedAdmin}
              onValueChange={setSelectedAdmin}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {adminList.map((admin) => (
                  <SelectItem value={admin.userId.toString()}>
                    {`${admin.firstName} - ${admin.email}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            className="mt-2"
            value={address}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(event.target.value)
            }
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            type="text"
            id="state"
            className="mt-2"
            value={state}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setState(event.target.value)
            }
          />
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddBranch}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddBranchDialog;
