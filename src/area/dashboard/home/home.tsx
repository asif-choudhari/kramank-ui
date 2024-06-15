import PieChart from "@/area/common/pie-chart/pie-chart";
import { PieChartDataType } from "@/area/common/pie-chart/pie-chart.types";
import branchesImage from "@/assets/branches.png";
import geographiesImage from "@/assets/geography.png";
import consumptionImage from "@/assets/consumption.png";

function Home() {
  const pieChartData: PieChartDataType[] = [
    { label: "Unused Amount", value: 400, color: "#FFC470" },
    { label: "Used Amount", value: 500, color: "#4793AF" },
  ];

  return (
    <div className="h-screen w-[100vw] p-5 grid grid-cols-2 grid-rows-2 gap-4">
      <div className="flex items-center">
        <PieChart
          data={pieChartData}
          width={250}
          height={250}
          outerRadius={125}
        />
      </div>
      <div className="flex justify-evenly items-center text-lg">
        <div className="p-5 flex flex-col items-center">
          <img src={branchesImage} alt="branches" className="h-24 w-24" />
          <span className="pt-5 font-bold">No. of Branches</span>
          <span className="pt-2">4</span>
        </div>
        <div className="p-5 flex flex-col items-center">
          <img src={geographiesImage} alt="branches" className="h-24 w-24" />
          <span className="pt-5 font-bold">No. of Geographies</span>
          <span className="pt-2">4 (States)</span>
        </div>
      </div>
      <div className="p-10 flex flex-col justify-center items-start">
        <div className="py-3 pl-24 flex flex-col text-lg">
          <span className="font-bold">Average consumption per branch</span>
          <span>Rs. 20,00,000</span>
        </div>
        <div className="py-3 pl-24 flex flex-col text-lg">
          <span className="font-bold">Total Consumption</span>
          <span>Rs. 5,00,00,000</span>
        </div>
      </div>
      <div className="p-10 flex justify-evenly items-center">
        <img src={consumptionImage} alt="branches" className="h-36 w-36" />
        <div className="flex flex-col">
          <span className="font-bold text-xl">Rank of Consumption</span>
          <span className="my-2">1. New Delhi</span>
          <span className="my-2">2. Bangalore</span>
          <span className="my-2">3. Mumbai</span>
          <span className="my-2">4. Hyderabad</span>
          <span className="my-2">5. Kolkata</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
