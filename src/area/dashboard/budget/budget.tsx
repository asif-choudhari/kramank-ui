import LineChart from "@/area/common/line-chart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
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

type BranchBudgetType = {
  name: string;
  percentage: number;
  amount: number;
};

function Budget() {
  const [isplanEdited, setIsPlanEdited] = useState<boolean>(false);
  const [distributionType, setDistributionType] = useState<string>("amount");
  const [totalLimit, setTotalLimit] = useState<number>(0);
  const [branchBudgetData, setBranchBudgetData] = useState<BranchBudgetType[]>([
    { name: "Bangalore", percentage: 0, amount: 0 },
    { name: "New Delhi", percentage: 0, amount: 0 },
    { name: "Chennai", percentage: 0, amount: 0 },
    { name: "Hyderabad", percentage: 0, amount: 0 },
    { name: "Kolkata", percentage: 0, amount: 0 },
    { name: "Mumbai", percentage: 0, amount: 0 },
    { name: "Pune", percentage: 0, amount: 0 },
    { name: "Kolkata", percentage: 0, amount: 0 },
    { name: "Mumbai", percentage: 0, amount: 0 },
    { name: "Pune", percentage: 0, amount: 0 },
  ]);

  const handleBranchLimitChange = (
    index: number,
    field: "amount" | "percentage",
    value: number
  ) => {
    const updatedBranchData = branchBudgetData.map((branch, i) => {
      if (i === index) {
        const updatedBranch = { ...branch, [field]: value };
        if (field === "amount") {
          updatedBranch.percentage = totalLimit
            ? (value / totalLimit) * 100
            : 0;
        } else {
          updatedBranch.amount = (value / 100) * totalLimit;
        }
        return updatedBranch;
      }
      return branch;
    });

    setBranchBudgetData(updatedBranchData);
    setIsPlanEdited(true);
  };

  return (
    <div className="h-full pr-1 pb-4 pl-4 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto">
      <div className="w-full h-48 p-5 shadow-all-sides rounded-2xl bg-white flex flex-col items-center gap-5 lg:col-start-1 lg:row-start-1 lg:row-end-3">
        <span className="w-full float-left font-bold text-2xl">Wallet</span>
        <span className="text-3xl">&#8377; 2,00,000</span>
        <div className="w-1/4">
          <Button className="w-11/12">Recharge</Button>
        </div>
      </div>
      <div className="w-auto h-96 p-10 shadow-all-sides rounded-2xl flex items-center justify-evenly bg-white lg:col-start-1 lg:row-start-3 lg:row-end-7 overflow-x-auto overflow-y-auto hide-scrollbar">
        <LineChart
          height={400}
          showArea
          showMark
          xAxisData={[
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "June",
            "July",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          yAxisData={[2, 3, 5, 6, 7, 1, 8, 2, 1, 5, 0, 9, 12]}
        />
      </div>
      <div className="w-auto p-5 shadow-all-sides rounded-2xl flex flex-col bg-white lg:col-start-2 lg:row-start-1 lg:row-end-7">
        <div className="w-full h-10 flex justify-between items-center font-bold text-xl">
          <span>Budget Plan</span>
          {isplanEdited && <Button className="h-8 w-16">Save</Button>}
        </div>
        <div className="mt-6 h-[450px] flex flex-col items-center">
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-4 xl:gap-20 lg:items-center pb-8">
            <div>
              <span className="text-lg font bold pr-5">Distibute By: </span>
              <Select
                defaultValue={distributionType}
                onValueChange={setDistributionType}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="percentage">Percentage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <span className="text-lg font bold pr-5">Total Amount: </span>
              <Input
                value={totalLimit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTotalLimit(+event.target.value || 0);
                  setIsPlanEdited(true);
                }}
                placeholder="Total Amount"
                className="w-18 h-9"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Branch</TableHead>
                <TableHead className="text-center">Percentage</TableHead>
                <TableHead className="text-center">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {branchBudgetData.map((item, index) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-center">
                    <Input
                      value={item.percentage}
                      disabled={distributionType === "amount"}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleBranchLimitChange(
                          index,
                          "percentage",
                          +event.target.value || 0
                        )
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.amount}
                      disabled={distributionType === "percentage"}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleBranchLimitChange(
                          index,
                          "amount",
                          +event.target.value || 0
                        )
                      }
                    />
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

export default Budget;
