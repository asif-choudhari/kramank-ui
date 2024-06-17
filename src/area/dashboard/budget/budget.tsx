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
  };

  return (
    <div className="h-full pr-1 pb-4 pl-4 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto hide-scrollbar">
      <div className="relative w-auto py-10 px-5 shadow-all-sides rounded-2xl grid grid-cols-7 gap-5 shadow-all bg-white lg:col-start-1 lg:row-start-1 lg:row-end-3">
        <span className="font-bold absolute top-5 left-5 text-2xl">Wallet</span>
        <span className="w-full flex justify-center items-center text-3xl lg:col-start-1 lg:col-end-5">
          &#8377; 2,00,000
        </span>
        <div className="w-full flex justify-center items-center lg:col-start-5 lg:col-end-7">
          <Button className="w-11/12">Recharge</Button>
        </div>
      </div>
      <div className="w-auto h-auto p-10 shadow-all-sides rounded-2xl flex items-center justify-evenly shadow-all bg-white lg:col-start-1 lg:row-start-3 lg:row-end-7 overflow-x-auto overflow-y-auto hide-scrollbar">
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
      <div className="w-auto p-5 shadow-all-sides rounded-2xl flex flex-col shadow-all bg-white lg:col-start-2 lg:row-start-1 lg:row-end-7">
        <div className="w-full flex justify-between items-center font-bold text-2xl">
          <span>Budget Plan</span>
          <Button className="w-20">Save</Button>
        </div>
        <div className="mt-12 h-[450px] flex flex-col items-center">
          <div className="flex items-center pb-8">
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
            <Input
              type="number"
              value={totalLimit}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTotalLimit(+event.target.value);
              }}
              placeholder="Total Amount"
              className="w-18 h-9 mx-8"
            />
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
                          +event.target.value
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
                          +event.target.value
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
