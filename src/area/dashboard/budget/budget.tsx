import { BarChart } from "@mui/x-charts/BarChart";
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
  const [totalLimit] = useState<number>(0);
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
    <div className="h-[calc(100dvh-180px)] md:h-[calc(100dvh-16px)] md:pr-1 pb-4 md:pl-4 lg:grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto hide-scrollbar">
      <div className="mb-4 lg:mb-0 w-full p-5 shadow-all-sides rounded-2xl bg-white flex flex-col items-center justify-between lg:col-start-1 lg:row-start-1 lg:row-end-3">
        <span className="w-full float-left font-bold text-xl">Wallet</span>
        <span className="text-3xl py-2">&#8377; 2,00,000</span>
        <Button>Recharge</Button>
      </div>
      <div className="mb-4 lg:mb-0 w-auto shadow-all-sides rounded-2xl flex items-center justify-evenly bg-white lg:col-start-1 lg:row-start-3 lg:row-end-7 overflow-x-auto overflow-y-hidden hide-scrollbar">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: [
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
              ],
            },
          ]}
          series={[
            {
              data: [
                2000, 5000, 3000, 4000, 6000, 7000, 3000, 1000, 500, 5000, 5750,
                2504, 4520,
              ],
            },
          ]}
          colors={["#4dd0e1"]}
        />
      </div>
      <div className="mb-4 lg:mb-0 w-auto h-[500px] lg:h-full py-5 px-5 shadow-all-sides rounded-2xl flex flex-col bg-white lg:col-start-2 lg:row-start-1 lg:row-end-7">
        <div className="pb-5 flex flex-col justify-center">
          <span className="font-bold text-xl">Budget Plan</span>
          <div className="py-5 flex items-center justify-center">
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
  );
}

export default Budget;
