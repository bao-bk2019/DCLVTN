import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from "chart.js"

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const testData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets:[
    {
      label:"Steps",
      data: [3000,5000,6000,9000,7000,6000,4000,],
      borderColor: "rgb(75, 192, 192)",
    },
  ]
  
}

function LineChart() {
  const options = {};
  const data = testData;
  return (
    <Line options={options} data={data}/>
  );
}
export default LineChart;