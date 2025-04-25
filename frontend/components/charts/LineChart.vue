<template>
  <div>
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";

const lineChart = ref(null);
const { isDark } = useTheme();
let chartInstance = null;

// Mock data for the line chart
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12500, 19200, 15800, 23400, 18300, 24500],
      borderColor: "#29F709",
      backgroundColor: "rgba(41, 247, 9, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

// Setup and render the chart
const setupChart = () => {
  if (!lineChart.value) return;

  const ctx = lineChart.value.getContext("2d");

  // Destroy existing chart if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Set the chart colors based on theme
  const gridColor = isDark.value
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)";
  const textColor = isDark.value ? "#CCCCCC" : "#757575";

  // Create new chart instance
  chartInstance = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: gridColor,
          },
          ticks: {
            color: textColor,
            callback: function (value) {
              return "$" + value / 1000 + "k";
            },
          },
        },
        x: {
          grid: {
            color: gridColor,
          },
          ticks: {
            color: textColor,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return "$" + context.parsed.y.toLocaleString();
            },
          },
        },
      },
    },
  });
};

// Initialize chart on component mount
onMounted(() => {
  // Import Chart.js dynamically to avoid SSR issues
  import("chart.js").then((Chart) => {
    // Register required Chart.js components
    Chart.Chart.register(
      Chart.CategoryScale,
      Chart.LinearScale,
      Chart.PointElement,
      Chart.LineElement,
      Chart.Title,
      Chart.Tooltip,
      Chart.Filler,
      Chart.Legend
    );

    // Setup chart
    setupChart();
  });
});

// Update chart when theme changes
watch(isDark, () => {
  setupChart();
});
</script>
