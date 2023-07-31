
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },
};

const areaChartData = [
  [
    { x: new Date(2014, 0, 1), y: 2.2 },
    { x: new Date(2015, 0, 1), y: 3.4 },
    { x: new Date(2016, 0, 1), y: 2.8 },
    { x: new Date(2017, 0, 1), y: 1.6 },
    { x: new Date(2018, 0, 1), y: 2.3 },
    { x: new Date(2019, 0, 1), y: 2.5 },
    { x: new Date(2020, 0, 1), y: 2.9 },
    { x: new Date(2021, 0, 1), y: 3.8 },
    { x: new Date(2022, 0, 1), y: 1.4 },
    { x: new Date(2023, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2014, 0, 1), y: 2 },
    { x: new Date(2015, 0, 1), y: 1.7 },
    { x: new Date(2016, 0, 1), y: 1.8 },
    { x: new Date(2017, 0, 1), y: 2.1 },
    { x: new Date(2018, 0, 1), y: 2.3 },
    { x: new Date(2019, 0, 1), y: 1.7 },
    { x: new Date(2020, 0, 1), y: 1.5 },
    { x: new Date(2021, 0, 1), y: 2.8 },
    { x: new Date(2022, 0, 1), y: 1.5 },
    { x: new Date(2023, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2014, 0, 1), y: 0.8 },
    { x: new Date(2015, 0, 1), y: 1.3 },
    { x: new Date(2016, 0, 1), y: 1.1 },
    { x: new Date(2017, 0, 1), y: 1.6 },
    { x: new Date(2018, 0, 1), y: 2 },
    { x: new Date(2019, 0, 1), y: 1.7 },
    { x: new Date(2020, 0, 1), y: 2.3 },
    { x: new Date(2021, 0, 1), y: 2.7 },
    { x: new Date(2022, 0, 1), y: 1.1 },
    { x: new Date(2023, 0, 1), y: 2.3 },
  ],
];


export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];
