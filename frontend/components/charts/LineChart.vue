<template>
  <div class="chart-container">
    <Chart type="line" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTheme } from "~/composables/useTheme";
import { useWindowSize } from "@vueuse/core";

const { isDark } = useTheme();
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);

// Get CSS variable safely
const getCssVar = (name, fallback) => {
  if (typeof document === "undefined") return fallback;
  return (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() ||
    fallback
  );
};

// Chart data with theme-aware colors
const chartData = computed(() => {
  let actionColor = "#34c759"; // Default color
  let warningColor = "#e68a00"; // Default color

  if (typeof window !== "undefined") {
    actionColor = getCssVar("--action", actionColor);
    warningColor = getCssVar("--warning", warningColor);
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
        backgroundColor: `${actionColor}20`, // 20% opacity
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
        backgroundColor: `${warningColor}20`, // 20% opacity
        tension: 0.4,
        fill: true,
      },
    ],
  };
});

// Chart options with theme-aware settings
const chartOptions = computed(() => {
  const gridColor = isDark.value
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.1)";
  const textColor = getCssVar(
    "--secondary-text",
    isDark.value ? "#CCCCCC" : "#757575"
  );

  return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: gridColor },
        ticks: {
          color: textColor,
          maxTicksLimit: isMobile.value ? 4 : 8,
          callback: (value) => `$${value / 1000}k`,
        },
      },
      x: {
        grid: {
          color: gridColor,
          display: !isMobile.value,
        },
        ticks: {
          color: textColor,
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
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
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
