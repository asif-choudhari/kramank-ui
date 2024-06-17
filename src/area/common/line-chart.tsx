import { LineChart as MUILineChart } from "@mui/x-charts/LineChart";

export type LineChartPropsType = {
  width?: number;
  height: number;
  showArea: boolean;
  showMark: boolean;
  xAxisData: number[] | string[];
  yAxisData: number[];
};

const getChartWidth = (): number => {
  if (window.innerWidth < 480) return 350;
  if (window.innerWidth < 640) return 500;
  if (window.innerWidth < 1024) return 800;
  return 800;
};

function LineChart({
  width,
  height,
  showArea,
  showMark,
  xAxisData,
  yAxisData,
}: LineChartPropsType) {
  return (
    <MUILineChart
      width={width || getChartWidth()}
      height={height}
      series={[{ data: yAxisData, area: showArea, showMark: showMark }]}
      xAxis={[{ scaleType: "point", data: xAxisData }]}
    />
  );
}

export default LineChart;
