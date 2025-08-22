import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MkLineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Pro Tier ROI",
        data: [2500, 3600, 4700, 5800, 7000, 8200, 9400, 10600, 11800, 13000, 14200, 15500],
        borderColor: "#000000",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Gold Tier ROI",
        data: [4000, 5200, 6400, 7600, 9000, 10500, 12000, 13500, 15000, 16500, 18000, 19500],
        borderColor: "#FFD700",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        borderWidth: 2,
      },
      {
        label: "Diamond Tier ROI",
        data: [7000, 9000, 11500, 14000, 16500, 19000, 21500, 24000, 26500, 29000, 31500, 34000],
        borderColor: "#4169E1",
        backgroundColor: "rgba(65, 105, 225, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 12 },
        },
      },
      title: {
        display: true,
        text: "ROI Projection (Per Tier)",
        font: { size: 16 },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
          font: { size: 14 },
        },
        ticks: {
          font: { size: 12 },
          autoSkip: false, // Ensures all labels are shown
          maxRotation: 30, // Slight rotation for better visibility
          minRotation: 30,
        },
      },
      y: {
        title: {
          display: true,
          text: "ROI Amount (₹)",
          font: { size: 14 },
        },
        ticks: {
          font: { size: 12 },
          stepSize: 2000,
        },
      },
    },
  };

  return (
    <div className="relative w-[90%]  bg-white mx-auto justify-center items-center h-[600px] p-4 shadow-lg rounded-lg border border-gray-200">
      <Line data={data} options={options} />
    </div>
  );
};

export default MkLineChart;
