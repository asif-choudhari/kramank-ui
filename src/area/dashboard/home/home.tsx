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

const pieChartOtherProps = {
  legend: { hidden: true },
};

const getChartWidth = (): number => {
  if (window.innerWidth < 640) return 200; // sm
  if (window.innerWidth < 1024) return 250; // md
  return 300; // lg and above
};

const data = [
  { id: 0, value: 500, label: "Used Amount" },
  { id: 1, value: 250, label: "Unused Amount" },
];

const total = data.map((item) => item.value).reduce((a, b) => a + b, 0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getArcLabel = (params: any) => {
  const percent = params.value / total;
  return `${(percent * 100).toFixed(0)}%`;
};

function Home() {
  const rankData = [
    { branch: "New Delhi", amount: 5000 },
    { branch: "Bangalore", amount: 4000 },
    { branch: "Mumbai", amount: 3000 },
    { branch: "Hyderabad", amount: 2000 },
    { branch: "Kolkata", amount: 1000 },
  ];

  return (
    <div className="h-svw w-svw py-4 pl-4 pr-8 grid gap-5 grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 bg-slate-100 overflow-y-auto hide-scrollbar">
      <div className="w-auto p-5 shadow-all-sides rounded-xl flex flex-col items-center bg-white lg:row-span-3">
        <span className="pt-2 pb-8 text-xl font-bold">Consumption</span>
        <PieChart
          series={[
            {
              data,
              innerRadius: 40,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              arcLabel: getArcLabel,
            },
          ]}
          width={getChartWidth()}
          height={250}
          margin={{ right: 5 }}
          {...pieChartOtherProps}
        />
      </div>
      <div className="w-auto h-full py-8 shadow-all-sides rounded-2xl flex flex-col sm:flex-row items-center justify-evenly shadow-all bg-white lg:row-span-2">
        <div className="flex flex-col items-center pb-16 sm:pb-0">
          <img src={branchesImage} alt="branches" className="h-24 w-24" />
          <span className="pt-5 font-bold">No. of Branches</span>
          <span className="pt-2">4</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={geographiesImage} alt="branches" className="h-24 w-24" />
          <span className="pt-5 font-bold">No. of Geographies</span>
          <span className="pt-2">4 (States)</span>
        </div>
      </div>
      <div className="w-auto h-full py-8 shadow-all-sides rounded-2xl flex flex-col items-center justify-center xl:flex-row sm:justify-evenly shadow-all bg-white lg:col-start-1 lg:row-start-4 lg:row-end-6">
        <div className="flex flex-col items-center pb-12 lg:pb-0 text-lg">
          <span className="font-bold">Average consumption</span>
          <span>Rs. 20,00,000</span>
        </div>
        <div className="flex flex-col items-center text-lg">
          <span className="font-bold">Total Consumption</span>
          <span>Rs. 5,00,00,000</span>
        </div>
      </div>
      <div className="w-auto h-full p-10 shadow-all-sides rounded-2xl flex flex-col shadow-all bg-white lg:col-start-2 lg:row-start-3 lg:row-end-6">
        <div className="pb-8">
          <img
            src={consumptionImage}
            alt="branches"
            className="h-12 w-12 inline-block"
          />
          <span className="px-5 font-bold text-xl">Rank of Consumption</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
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
