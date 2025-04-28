<template>
  <div class="chart-container">
    <Chart type="doughnut" :data="chartData" :options="chartOptions" />
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

// Get CSS variable safely with fallback
const getCssVar = (name, fallback) => {
  // Only try to access document if we're in the browser
  if (typeof document !== "undefined") {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return value || fallback;
  }
  return fallback;
};

// Data for the doughnut chart
const chartData = computed(() => {
  // Only access these in the browser
  const colorValues = [];

  // This will only run on client-side
  if (typeof window !== "undefined") {
    colorValues.push(getCssVar("--action", "#29F709")); // Action
    colorValues.push(getCssVar("--success", "#4CAF50")); // Success
    colorValues.push(getCssVar("--info", "#CDDC39")); // Info
    colorValues.push(getCssVar("--warning", "#FF9800")); // Warning
    colorValues.push(getCssVar("--disabled", "#B3B3B3")); // Disabled
    colorValues.push(getCssVar("--error", "#F44336")); // Error
  } else {
    // Fallback colors for SSR
    colorValues.push(
      "#29F709",
      "#4CAF50",
      "#CDDC39",
      "#FF9800",
      "#B3B3B3",
      "#F44336"
    );
  }

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

// Chart options with theme-aware colors
const chartOptions = computed(() => {
  // Set the text color based on theme
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
          label: function (context) {
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
