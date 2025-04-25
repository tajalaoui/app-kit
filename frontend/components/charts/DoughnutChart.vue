<template>
  <div class="chart-container">
    <canvas ref="doughnutChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useTheme } from "~/composables/useTheme";
import { useWindowSize } from '@vueuse/core';

const doughnutChart = ref(null);
const { isDark } = useTheme();
const { width } = useWindowSize();
let chartInstance = null;

// Extended data for the doughnut chart
const data = {
  labels: ["Organic Search", "Direct", "Social Media", "Referral", "Email", "Paid Ads"],
  datasets: [
    {
      data: [35, 25, 18, 12, 6, 4],
      backgroundColor: [
        "#29F709", // Green (action color)
        "#4CAF50", // Success
        "#CDDC39", // Info
        "#FF9800", // Warning
        "#B3B3B3", // Disabled
        "#F44336", // Error
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
  
  // Check if on mobile
  const isMobile = width.value < 768;

  // Create new chart instance
  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: isMobile ? "60%" : "70%",
      plugins: {
        legend: {
          position: isMobile ? "bottom" : "right",
          labels: {
            color: textColor,
            font: {
              size: isMobile ? 10 : 11,
            },
            usePointStyle: true,
            padding: isMobile ? 10 : 20,
            boxWidth: isMobile ? 8 : 10,
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

// Update