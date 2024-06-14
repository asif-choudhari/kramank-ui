export type PieChartPropsType = {
  data: PieChartDataType[];
  outerRadius?: number;
  width?: number;
  height?: number;
  hideLegend?: boolean;
};

export type PieChartDataType = {
  label: string;
  value: number;
  color: string;
};
