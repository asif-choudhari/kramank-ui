export const getChartWidth = (): number => {
  if (window.innerWidth < 640) return 200;
  if (window.innerWidth < 1024) return 250;
  return 300;
};

export const data = [
  { id: 0, value: 500, label: "Used Amount" },
  { id: 1, value: 250, label: "Unused Amount" },
];

const total = data.map((item) => item.value).reduce((a, b) => a + b, 0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getArcLabel = (params: any) => {
  const percent = params.value / total;
  return `${(percent * 100).toFixed(0)}%`;
};
