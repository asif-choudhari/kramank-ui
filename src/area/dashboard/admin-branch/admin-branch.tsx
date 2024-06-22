import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import branchesImage from "@/assets/branches.png";
import adminImage from "@/assets/admin.png";
import { useDispatch, useSelector } from "react-redux";
import {
  adminCountSelector,
  adminListSelector,
  branchCountSelector,
  relationshipListSelector,
} from "./state/admin-branch.selector";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import {
  getAdminBranchRelationshipThunk,
  getAdminCountThunk,
  getAdminListThunk,
  getBranchCountThunk,
  getBranchListThunk,
  setBranchAdminThunk,
} from "./state/admin-branch.slice";
import { tokenSelector } from "@/area/login/state/login.selector";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, Toaster } from "sonner";

function AdminBranch() {
  const dispatch = useDispatch<AppDispatch>();

  const token = useSelector(tokenSelector);
  const adminCount = useSelector(adminCountSelector);
  const branchCount = useSelector(branchCountSelector);
  const relationshipList = useSelector(relationshipListSelector);
  const adminList = useSelector(adminListSelector);

  const [selectedBranchToMove, setSelectedBranchToMove] = useState<{
    branchId: number;
    branchName: string;
  }>({ branchId: 0, branchName: "" });
  const [selectedAdmin, setSelectedAdmin] = useState<string>("");

  const handleSetBranchAdmin = () => {
    const setBranchAdmin = async () => {
      await dispatch(
        setBranchAdminThunk({
          token,
          companyId: 1,
          userId: Number(selectedAdmin),
          branchId: selectedBranchToMove.branchId,
        })
      )
        .then(() => {
          toast.success("Saved Successfully");
        })
        .catch(() => {
          toast.error("Could not assign an admin");
        });
      await dispatch(getAdminBranchRelationshipThunk({ token, companyId: 1 }));
    };

    setBranchAdmin();
  };

  useEffect(() => {
    dispatch(getAdminCountThunk({ token, companyId: 1 }));
    dispatch(getBranchCountThunk({ token, companyId: 1 }));
    dispatch(getAdminBranchRelationshipThunk({ token, companyId: 1 }));
    dispatch(getAdminListThunk({ token, companyId: 1 }));
    dispatch(getBranchListThunk({ token, companyId: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="h-full pr-1 pb-4 pl-4 grid gap-4 grid-cols-1 lg:grid-cols-3 lg:grid-rows-6 overflow-y-auto">
        <div className="h-full w-auto p-5 shadow-all-sides rounded-2xl bg-slate-600 text-white flex items-center justify-center lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4">
          <div className="flex flex-col items-center pb-16 sm:pb-0">
            <img src={adminImage} alt="branches" className="h-20 w-20" />
            <span className="pt-5 font-bold text-xl">No. of Admin</span>
            <span className="pt-2 text-xl">{adminCount}</span>
          </div>
        </div>
        <div className="h-full w-auto p-5 shadow-all-sides rounded-2xl bg-slate-600 text-white flex items-center justify-center lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-7">
          <div className="flex flex-col items-center pb-16 sm:pb-0">
            <img src={branchesImage} alt="branches" className="h-20 w-20" />
            <span className="pt-5 font-bold text-xl">No. of Branches</span>
            <span className="pt-2 text-xl">{branchCount}</span>
          </div>
        </div>
        <div className="h-full w-auto p-5 shadow-all-sides rounded-2xl bg-white lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-7">
          <Dialog>
            <div className="h-full w-full overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow className="text-xl font-bold">
                    <TableHead>Admin</TableHead>
                    <TableHead>Branch</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {relationshipList.map((item) => (
                    <TableRow key={item.email}>
                      <TableCell className="w-1/2">{`${item.firstName} ${item.lastName} - ${item.email}`}</TableCell>
                      <TableCell>
                        {item.branches.map((branch) => (
                          <TableRow key={branch.branchId}>
                            <TableCell className="w-96">
                              {branch.branchName}
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger
                                  asChild
                                  className="cursor-pointer"
                                >
                                  <EllipsisVertical className="h-5 mr-5" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  className="w-36"
                                  align="end"
                                  forceMount
                                >
                                  <DropdownMenuGroup>
                                    <DialogTrigger
                                      asChild
                                      onClick={() => {
                                        setSelectedBranchToMove(branch);
                                      }}
                                    >
                                      <DropdownMenuItem>
                                        <span>Move Branch</span>
                                      </DropdownMenuItem>
                                    </DialogTrigger>
                                  </DropdownMenuGroup>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Assign Admin for {selectedBranchToMove?.branchName}
                </DialogTitle>
              </DialogHeader>
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
              <DialogFooter>
                <Button type="submit" onClick={handleSetBranchAdmin}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Toaster richColors />
    </>
  );
}

export default AdminBranch;
