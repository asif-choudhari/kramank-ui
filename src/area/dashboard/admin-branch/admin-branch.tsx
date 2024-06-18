import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import branchesImage from "@/assets/branches.png";
import adminImage from "@/assets/admin.png";

function AdminBranch() {
  const AdminBranch = [
    { admin: "Suresh (suresh@gmail.com)", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
    { admin: "Suresh", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
    { admin: "Suresh", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
    { admin: "Suresh", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
    { admin: "Suresh", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
    { admin: "Suresh", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
    { admin: "Suresh", branch: ["Bangalore", "Mumbai"] },
    { admin: "Mukesh", branch: ["Hyderabad"] },
  ];

  return (
    <div className="h-full pr-1 pb-4 pl-4 grid gap-4 grid-cols-1 lg:grid-cols-3 lg:grid-rows-6 overflow-y-auto">
      <div className="h-full w-auto p-5 shadow-all-sides rounded-2xl bg-slate-600 text-white flex items-center justify-center lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4">
        <div className="flex flex-col items-center pb-16 sm:pb-0">
          <img src={adminImage} alt="branches" className="h-20 w-20" />
          <span className="pt-5 font-bold text-xl">No. of Admin</span>
          <span className="pt-2 text-xl">{AdminBranch.length}</span>
        </div>
      </div>
      <div className="h-full w-auto p-5 shadow-all-sides rounded-2xl bg-slate-600 text-white flex items-center justify-center lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-7">
        <div className="flex flex-col items-center pb-16 sm:pb-0">
          <img src={branchesImage} alt="branches" className="h-20 w-20" />
          <span className="pt-5 font-bold text-xl">No. of Branches</span>
          <span className="pt-2 text-xl">4</span>
        </div>
      </div>
      <div className="h-full w-auto p-5 shadow-all-sides rounded-2xl bg-white lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-7">
        <div className="pb-20">
          <span className="font-bold text-2xl float-left">
            Admin and Branch
          </span>
          <Button className="float-right">
            <PlusIcon className="h-5 w-5 mr-2" />
            Assign Branch
          </Button>
          <Button className="float-right mx-4">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Admin
          </Button>
        </div>
        <div className="h-[calc(100%-100px)] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-xl font-bold">
                <TableHead>Admin</TableHead>
                <TableHead>Branch</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {AdminBranch.map((item) => (
                <TableRow>
                  <TableCell className="w-96">{item.admin}</TableCell>
                  <TableCell>
                    {item.branch.map((branch) => (
                      <TableRow>
                        <TableCell>{branch}</TableCell>
                      </TableRow>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AdminBranch;
