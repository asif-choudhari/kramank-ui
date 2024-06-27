import branchesImage from "@/assets/branches.png";
import geographiesImage from "@/assets/geography.png";
import consumptionImage from "@/assets/consumption.png";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store";
import {
  getConsumptionThunk,
  getGeographiesCountThunk,
  setBranchCount,
  setConsumption,
  setGeographiesCount,
} from "./state/home.slice";
import { tokenSelector } from "@/area/login/state/login.selector";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  averageConsumptionSelector,
  branchCountSelector,
  geographiesCountSelector,
  unusedAmountSelector,
  usedAmountSelector,
} from "./state/home.selector";
import { getBranchCountThunk } from "../admin-branch/state/admin-branch.slice";
import Spinner from "@/area/common/spinner";

const getChartWidth = (): number => {
  if (window.innerWidth < 640) return 200;
  if (window.innerWidth < 1024) return 250;
  return 300;
};

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const rankData = [
    { branch: "New Delhi", amount: 5000 },
    { branch: "Bangalore", amount: 4000 },
    { branch: "Mumbai", amount: 3000 },
    { branch: "Hyderabad", amount: 2000 },
    { branch: "Kolkata", amount: 1000 },
  ];
  const [isConsumptionApiLoading, setIsConsumptionApiLoading] =
    useState<boolean>(false);
  const [data, setData] = useState([
    { id: 0, value: 0, label: "Used Amount" },
    { id: 1, value: 0, label: "Unused Amount" },
  ]);

  const token = useSelector(tokenSelector);
  const branchCount = useSelector(branchCountSelector);
  const geographiesCount = useSelector(geographiesCountSelector);
  const usedAmount = useSelector(usedAmountSelector);
  const unusedAmount = useSelector(unusedAmountSelector);
  const averageConsumption = useSelector(averageConsumptionSelector);

  const getConsumption = async () => {
    setIsConsumptionApiLoading(true);
    await dispatch(getConsumptionThunk({ token, companyId: 1 }))
      .then((response) => {
        response.type.includes("rejected")
          ? toast.error("Could not fetch Consumption Data")
          : dispatch(setConsumption(response.payload));
      })
      .finally(() => {
        setIsConsumptionApiLoading(false);
      });
  };

  const getCounts = async () => {
    await dispatch(getBranchCountThunk({ token, companyId: 1 })).then(
      (response) => {
        response.type.includes("rejected")
          ? toast.error("Could not fetch Branch count")
          : dispatch(setBranchCount(response.payload));
      }
    );

    await dispatch(getGeographiesCountThunk({ token, companyId: 1 })).then(
      (response) => {
        response.type.includes("rejected")
          ? toast.error("Could not fetch Geographies count")
          : dispatch(setGeographiesCount(response.payload));
      }
    );
  };

  useEffect(() => {
    getConsumption();
    getCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData([
      { id: 0, value: usedAmount, label: "Used Amount" },
      { id: 1, value: unusedAmount, label: "Unused Amount" },
    ]);
  }, [usedAmount, unusedAmount]);

  return (
    <div className="h-[calc(100dvh-16px)] md:pr-1 pb-4 md:pl-4 grid gap-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 overflow-y-auto hide-scrollbar">
      <div className="w-auto py-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:col-start-1 lg:row-start-1 lg:row-end-5">
        <span className="pt-2 pb-8 text-xl font-bold">Consumption</span>
        {isConsumptionApiLoading ? (
          <Spinner className="h-20 w-20 m-auto" />
        ) : (
          <PieChart
            series={[
              {
                data,
                innerRadius: 40,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
              },
            ]}
            width={getChartWidth()}
            height={300}
            margin={{ right: 5, bottom: 100 }}
            slotProps={{
              legend: {
                position: {
                  horizontal: "middle",
                  vertical: "bottom",
                },
              },
            }}
          />
        )}
      </div>
      <div className="w-auto py-10 px-5 shadow-all-sides rounded-2xl flex flex-col sm:flex-row items-center justify-evenly bg-white lg:col-start-2 lg:row-start-1 lg:row-end-3">
        <div className="flex flex-col items-center pb-16 sm:pb-0">
          <img src={branchesImage} alt="branches" className="h-16 w-16" />
          <span className="pt-5 font-bold">No. of Branches</span>
          <span className="pt-2">{branchCount}</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={geographiesImage} alt="branches" className="h-16 w-16" />
          <span className="pt-5 font-bold">No. of Geographies</span>
          <span className="pt-2">{geographiesCount} (states)</span>
        </div>
      </div>
      <div className="w-auto flex flex-col sm:flex-row gap-5 items-center lg:col-start-1 lg:row-start-5 lg:row-end-7">
        <div className="relative h-52 lg:h-full w-full flex flex-col items-center justify-center shadow-all-sides rounded-xl bg-slate-600 text-white">
          <span className="font-bold absolute top-5 left-5 text-lg">
            Average consumption
          </span>
          <span className="pt-4 text-3xl">&#8377; {averageConsumption}</span>
        </div>
        <div className="relative h-52 lg:h-full w-full flex flex-col items-center justify-center shadow-all-sides rounded-xl bg-slate-600 text-white">
          <span className="font-bold absolute top-5 left-5 text-lg">
            Total consumption
          </span>
          <span className="pt-4 text-3xl">&#8377; {usedAmount}</span>
        </div>
      </div>
      <div className="w-auto h-full py-10 px-5 shadow-all-sides rounded-2xl flex flex-col bg-white lg:col-start-2 lg:row-start-3 lg:row-end-7">
        <div className="pb-5 flex items-center">
          <img src={consumptionImage} alt="branches" className="h-10 w-10" />
          <span className="px-5 font-bold text-xl">Rank of Consumption</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rankData.map((rankItem, index) => (
              <TableRow key={rankItem.branch}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{rankItem.branch}</TableCell>
                <TableCell className="text-right">{rankItem.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
