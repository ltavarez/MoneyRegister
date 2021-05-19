import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.value}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={null}
        />
      ))}
    </div>
  );
};

export default Chart;
