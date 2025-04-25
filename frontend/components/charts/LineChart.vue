<template>
  <div class="chart-container">
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";
import { useWindowSize } from "@vueuse/core";

const lineChart = ref(null);
const { isDark } = useTheme();
const { width } = useWindowSize();
let chartInstance = null;

// Expanded mock data for the line chart (12 months)
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        12500, 19200, 15800, 23400, 18300, 24500, 26800, 21200, 25600, 27300,
        24100, 29800,
      ],
      borderColor: "#29F709",
      backgroundColor: "rgba(41, 247, 9, 0.1)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Expenses",
      data: [
        8200, 10500, 9800, 12400, 11700, 13200, 12900, 13800, 12200, 14500,
        13800, 15200,
      ],
      borderColor: "#FF9800",
      backgroundColor: "rgba(255, 152, 0, 0.1)",
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

  // Adjust for mobile
  const isMobile = width.value < 768;

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
            // Show fewer ticks on mobile
            maxTicksLimit: isMobile ? 4 : 8,
            callback: function (value) {
              return "$" + value / 1000 + "k";
            },
          },
        },
        x: {
          grid: {
            color: gridColor,
            // Hide vertical grid on mobile
            display: !isMobile,
          },
          ticks: {
            color: textColor,
            // Show fewer labels on mobile
            maxRotation: isMobile ? 45 : 0,
            maxTicksLimit: isMobile ? 6 : 12,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: isMobile ? "bottom" : "top",
          labels: {
            color: textColor,
            boxWidth: isMobile ? 12 : 40,
            padding: isMobile ? 10 : 20,
          },
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

// Update chart when theme changes or window size changes
watch([isDark, width], () => {
  setupChart();
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
