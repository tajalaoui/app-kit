<template>
  <div class="chart-container">
    <Chart type="doughnut" :data="chartData" :options="chartOptions" />
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

// Chart data with theme colors
const chartData = computed(() => {
  // Default color values for SSR
  const defaultColors = [
    "#34c759",
    "#3a9d3a",
    "#cddc39",
    "#e68a00",
    "#b3b3b3",
    "#f44336",
  ];

  // Get theme colors when in browser
  const colorValues =
    typeof window !== "undefined"
      ? [
          getCssVar("--action", defaultColors[0]),
          getCssVar("--success", defaultColors[1]),
          getCssVar("--info", defaultColors[2]),
          getCssVar("--warning", defaultColors[3]),
          getCssVar("--disabled", defaultColors[4]),
          getCssVar("--error", defaultColors[5]),
        ]
      : defaultColors;

  return {
    labels: [
      "Organic Search",
      "Direct",
      "Social Media",
      "Referral",
      "Email",
      "Paid Ads",
    ],
    datasets: [
      {
        data: [35, 25, 18, 12, 6, 4],
        backgroundColor: colorValues,
        borderWidth: 0,
      },
    ],
  };
});

// Chart options with theme-aware settings
const chartOptions = computed(() => {
  const textColor = getCssVar(
    "--secondary-text",
    isDark.value ? "#CCCCCC" : "#757575"
  );

  return {
    responsive: true,
    maintainAspectRatio: false,
    cutout: isMobile.value ? "60%" : "70%",
    plugins: {
      legend: {
        position: isMobile.value ? "bottom" : "right",
        labels: {
          color: textColor,
          font: {
            size: isMobile.value ? 10 : 11,
          },
          usePointStyle: true,
          padding: isMobile.value ? 10 : 20,
          boxWidth: isMobile.value ? 8 : 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${context.label}: ${percentage}%`;
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
