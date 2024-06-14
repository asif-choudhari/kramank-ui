import PieChart from "@/area/common/pie-chart/pie-chart";
import { PieChartDataType } from "@/area/common/pie-chart/pie-chart.types";


function Home() {
  const pieChartData: PieChartDataType[] = [
    { label: "Unused Amount", value: 400, color: "#FFBB28" },
    { label: "Used Amount", value: 500, color: "#0088FE" },
  ];

  return (
    <div>
      <div>
        <PieChart data={pieChartData} outerRadius={100}/>
      </div>
    </div>
  );
}

export default Home;
