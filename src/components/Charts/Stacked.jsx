import { ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  Legend, 
  Category, 
  StackingColumnSeries, Tooltip 
} from "@syncfusion/ej2-react-charts";

import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../constants/stackedData";

export const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      id="charts"
      width={width}
      height={height}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{
        background: "white"
      }}

    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {
          stackedCustomSeries.map((item, idx) => <SeriesDirective key={idx} {...item}/>)
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};