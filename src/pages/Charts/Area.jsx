import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject, DateTime, Legend} from '@syncfusion/ej2-react-charts';
import { areaPrimaryXAxis, areaPrimaryYAxis, areaCustomSeries } from '../../constants/areaData';

import { useStateContext } from '../../context/ContextProvider';
import { ChartsHeader } from '../../components';

export const Area = () => {
  const { themeMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate" />
      <div className="w-full"> 
        <ChartComponent 
          id="area-chart" 
          width="100%" 
          height="420px" 
          primaryXAxis={areaPrimaryXAxis} 
          primaryYAxis={areaPrimaryYAxis} 
          chartArea={{ border: { width: 0 } }} 
          tooltip={{ enable: true }}
          background={themeMode === 'dark' ? '#33373e' : '#fff'}
          legendSettings={{background: "white"}}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, idx) => (
              <SeriesDirective key={idx} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
