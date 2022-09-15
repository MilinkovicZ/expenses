import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.js";

function Chart(props) {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value); //Izvadimo 12 vrednosti iz objekata dataPoint da bismo prosledili maxu.
  let max = 0;

  for (var item of dataPointValue) {
    max += parseInt(item);
  }

  //const max = Math.max(...dataPointValue); //U Maxu nadjemo max vrendnost i saljemo gore.

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
        />
      ))}
    </div>
  );
}

export default Chart;
