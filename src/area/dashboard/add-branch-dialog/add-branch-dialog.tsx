import { useEffect, useState } from "react";
import {
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
import { tokenSelector } from "@/area/login/state/login.selector";
import { getAdminListThunk } from "../admin-branch/state/admin-branch.slice";
import { toast } from "sonner";
import { setAdminList } from "./state/add-branch-dialog.slice";
import { adminListSelector } from "./state/add-branch-dialog.selector";

function AddBranchDialog() {
  const dispatch = useDispatch<AppDispatch>();

  const [branchName, setBranchName] = useState<string>("");
  const [adminName, setAdminName] = useState<string>("");
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [adminMobile, setAdminMobile] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [isNewAdmin, setIsNewAdmin] = useState<boolean>(false);
  const [selectedAdmin, setSelectedAdmin] = useState<string>("");

  const token = useSelector(tokenSelector);
  const adminList = useSelector(adminListSelector);

  useEffect(() => {
    if (!isNewAdmin) {
      dispatch(getAdminListThunk({ token, companyId: 1 })).then((response) => {
        response.type.includes("rejected")
          ? toast.error("Could not fetch Admin List")
          : dispatch(setAdminList(response.payload));
      });
    }
  }, [dispatch, token, isNewAdmin]);

  return (
    <DialogContent>
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
      <div>
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
              value={adminName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAdminName(event.target.value)
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
          <Select defaultValue={selectedAdmin} onValueChange={setSelectedAdmin}>
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
        <Button type="submit">Confirm</Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddBranchDialog;
