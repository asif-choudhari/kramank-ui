import LineChart from "@/area/common/line-chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "lucide-react";

const daysInMonth = (): string[] => {
  const date: Date = new Date();
  const totalDays: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const dates: string[] = [];
  for (let day = 1; day <= totalDays; day++) {
    dates.push(day.toString());
  }

  return dates;
};

function Report() {
  const branchList: string[] = ["New Delhi", "Bangalore", "Mumbai"];
  const [branch, setBranch] = useState("Bangalore");
  const [isSlected, setIsSelected] = useState<boolean>(false);

  return (
    <div className="h-[calc(100dvh-16px)] md:pr-1 pb-4 md:pl-4 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto hide-scrollbar">
      <div className="w-auto h-auto p-5 shadow-all-sides rounded-2xl flex flex-col items-center justify-center bg-white lg:col-start-1 lg:row-start-1 lg:row-end-7 overflow-hidden">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-xl">
            Amount spent (Current Month)
          </span>
          <Select defaultValue={branch} onValueChange={setBranch}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {branchList.map((branch) => (
                <SelectItem value={branch}>{branch}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <LineChart
          height={400}
          width={650}
          showArea
          showMark={false}
          xAxisData={daysInMonth()}
          yAxisData={[2, 3, 5, 6, 7, 1, 8, 2, 1, 5, 0, 9, 12]}
        />
      </div>
      <div className="w-auto h-auto shadow-all-sides rounded-2xl bg-white lg:col-start-2 lg:row-start-1 lg:row-end-4 overflow-hidden">
        <div className="w-auto h-full p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-1 lg:row-start-1 lg:row-end-7">
          <div className="w-full h-10 font-bold text-xl flex justify-between">
            <span className={isSlected ? "" : "hidden"}>
              <Button onClick={() => setIsSelected(false)} className="h-6 mr-2">
                <ArrowLeftIcon className="h-4 w-4" />
              </Button>
              List of all Products bought
            </span>
            <span>{isSlected ? "Branch Name" : "All Branches"}</span>
          </div>
          <Dialog>
            <div className="w-full overflow-y-auto">
              {isSlected ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-center">Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <DialogTrigger className="w-full text-left">
                          TShirt
                        </DialogTrigger>
                      </TableCell>
                      <TableCell className="text-center">
                        <DialogTrigger className="w-full text-center">
                          01/01/1900
                        </DialogTrigger>
                      </TableCell>
                      <TableCell className="text-right">
                        <DialogTrigger className="w-full text-right">
                          1,20,220
                        </DialogTrigger>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Branch</TableHead>
                      <TableHead className="text-right">Budget Used</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow onClick={() => setIsSelected(true)}>
                      <TableCell>Bangalore</TableCell>
                      <TableCell className="text-right">1,20,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              )}
            </div>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Set Limit for Product Name</DialogTitle>
              </DialogHeader>
              <span>Limit</span>
              <Input type="number" />
              <DialogFooter>
                <Button type="submit">Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="w-auto h-auto shadow-all-sides rounded-2xl bg-white lg:col-start-2 lg:row-start-4 lg:row-end-7 overflow-hidden">
        <div className="w-auto h-full p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-1 lg:row-start-1 lg:row-end-7">
          <div className="w-full flex justify-between items-center">
            <span className="font-bold text-xl">Top 5 Products</span>
            <Select defaultValue={branch} onValueChange={setBranch}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {branchList.map((branch) => (
                  <SelectItem value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>T-Shirt</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
