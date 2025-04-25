<template>
  <div>
    <canvas ref="doughnutChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useTheme } from "~/composables/useTheme";

const doughnutChart = ref(null);
const { isDark } = useTheme();
let chartInstance = null;

// Mock data for the doughnut chart
const data = {
  labels: ["Organic Search", "Direct", "Social Media", "Referral", "Email"],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        "#29F709", // Green (action color)
        "#4CAF50", // Success
        "#CDDC39", // Info
        "#FF9800", // Warning
        "#B3B3B3", // Disabled
      ],
      borderWidth: 0,
    },
  ],
};

// Setup and render the chart
const setupChart = () => {
  if (!doughnutChart.value) return;

  const ctx = doughnutChart.value.getContext("2d");

  // Destroy existing chart if it exists
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Set the text color based on theme
  const textColor = isDark.value ? "#CCCCCC" : "#757575";

  // Create new chart instance
  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          position: "right",
          labels: {
            color: textColor,
            font: {
              size: 11,
            },
            usePointStyle: true,
            padding: 20,
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.parsed;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${context.label}: ${percentage}%`;
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
    Chart.Chart.register(Chart.ArcElement, Chart.Tooltip, Chart.Legend);

    // Setup chart
    setupChart();
  });
});

// Update chart when theme changes
watch(isDark, () => {
  setupChart();
});
</script>
