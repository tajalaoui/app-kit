<template>
  <div class="chart-container">
    <Chart type="line" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useTheme } from "~/composables/useTheme";
import { useWindowSize } from "@vueuse/core";

const { isDark } = useTheme();
const { width } = useWindowSize();

// Compute if on mobile
const isMobile = computed(() => width.value < 768);

// Data for the chart
const chartData = computed(() => {
  // Only access getComputedStyle in the browser
  let actionColor = "#29F709";
  let warningColor = "#FF9800";
  if (typeof window !== "undefined") {
    const styles = getComputedStyle(document.documentElement);
    actionColor = styles.getPropertyValue("--action").trim() || actionColor;
    warningColor = styles.getPropertyValue("--warning").trim() || warningColor;
  }

  return {
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
        borderColor: actionColor,
        backgroundColor: actionColor
          ? `${actionColor}20`
          : "rgba(41, 247, 9, 0.1)", // Adding transparency
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: [
          8200, 10500, 9800, 12400, 11700, 13200, 12900, 13800, 12200, 14500,
          13800, 15200,
        ],
        borderColor: warningColor,
        backgroundColor: warningColor
          ? `${warningColor}20`
          : "rgba(255, 152, 0, 0.1)", // Adding transparency
        tension: 0.4,
        fill: true,
      },
    ],
  };
});

// Chart options with theme-aware colors
const chartOptions = computed(() => {
  // Set the chart colors based on theme
  const gridColor = isDark.value
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)";
  let textColor = isDark.value ? "#CCCCCC" : "#757575";
  if (typeof window !== "undefined") {
    textColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--secondary-text")
        .trim() || textColor;
  }

  return {
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
          maxTicksLimit: isMobile.value ? 4 : 8,
          callback: function (value) {
            return "$" + value / 1000 + "k";
          },
        },
      },
      x: {
        grid: {
          color: gridColor,
          // Hide vertical grid on mobile
          display: !isMobile.value,
        },
        ticks: {
          color: textColor,
          // Show fewer labels on mobile
          maxRotation: isMobile.value ? 45 : 0,
          maxTicksLimit: isMobile.value ? 6 : 12,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: isMobile.value ? "bottom" : "top",
        labels: {
          color: textColor,
          boxWidth: isMobile.value ? 12 : 40,
          padding: isMobile.value ? 10 : 20,
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
  };
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
