import {
  PieChart as MUIPieChart,
  pieArcLabelClasses,
} from "@mui/x-charts/PieChart";
import { PieChartPropsType } from "./pie-chart.types";

function PieChart({
  data,
  outerRadius = 80,
  width = 200,
  height = 200,
  hideLegend = true,
}: PieChartPropsType) {
  const otherProps = {
    legend: { hidden: hideLegend },
  };

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getArcLabel = (params: any) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <MUIPieChart
      series={[
        {
          outerRadius: outerRadius,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      margin={{ right: 5 }}
      width={width}
      height={height}
      {...otherProps}
    />
  );
}

export default PieChart;
