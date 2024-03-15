import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false, // Tắt hiển thị legend
      },
      title: {
        display: false,
        text: "BODY RECORD",
        align: "left",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: false,
        position: "left",
        grid: {
          color: "green",
        },
      },
      y1: {
        type: "linear",
        display: false,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        display: true,
        title: {
          display: true,// Màu của nhãn trục x
        },
        ticks: {
          color: "#ffffff", // Màu của nhãn trục x
        },
        grid: {
          color: "#777777" // Màu của đường kẻ ngang trên trục x
        },

      },
    },
  };

  const labels = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [88, 67, 56, 54, 33, 12, 56, 44, 38, 31, 26, 13],
        borderColor: "#FFCC21",
        backgroundColor: "#414141",
        yAxisID: "y",
        pointBackgroundColor: "#FFCC21",
      },
      {
        label: "Dataset 2",
        data: [97, 88, 67, 56, 54, 33, 28, 52, 44, 38, 31, 26],
        borderColor: "#8FE9D0",
        backgroundColor: "#414141",
        pointBackgroundColor: "#8FE9D0",
        yAxisID: "y1",
      },
    ],
  };

  return <Line options={options} data={data}/>;
}

export default LineChart