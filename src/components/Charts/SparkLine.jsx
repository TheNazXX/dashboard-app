import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export const SparkLine = ({ id, height, width, color, data, type, themeColor, dots }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={2}
      valueType="Numeric"
      fill={color}
      border={{ color: themeColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        format: 'amount: ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={dots ? { visible: ['All'], size: 7.5, fill: themeColor }: {}}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};
