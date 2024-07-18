import React, {useState} from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs, ArcElement, Tooltip, Legend
} from "chart.js"
import { CHART_COLORS } from "./color";

ChartJs.register( ArcElement, Tooltip, Legend);

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
      backgroundColor: CHART_COLORS,
      borderColor: "rgba(54, 162, 235, 1)",
    },
  ] 
}

function PieChart() {
  const options = {};
  const data = testData;
  return (
    <Pie options={options} data={data}/>
  )
}

export default PieChart