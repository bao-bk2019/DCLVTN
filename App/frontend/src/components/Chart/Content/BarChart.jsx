import React, {useState} from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from "chart.js"

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: "rgba(54, 162, 235, 1)",
    },
  ] 
}

function BarChart() {
  const options = {};
  const data = testData;
  return (
    <Bar options={options} data={data}/>
  )
}

export default BarChart