import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

export const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  );
};