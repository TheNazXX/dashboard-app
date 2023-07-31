import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip} from "@syncfusion/ej2-react-charts";
import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from "../../constants/lineChartData"
import { useStateContext } from "../../context/ContextProvider";

export const LineChart = () => {
  const {themeMode} = useStateContext();

  return (
    <ChartComponent 
      id="line-chart" 
      width="100%"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      background={themeMode === "dark" ? "#33373e" : "#fff"}
      legendSettings={{background: "white"}}
    >
      <Inject
        services={[LineSeries, DateTime, Legend, Tooltip]}
      />
      <SeriesCollectionDirective>
        {
          lineCustomSeries.map((item, idx) => (
            <SeriesDirective key={idx} {...item}/>
          ))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
