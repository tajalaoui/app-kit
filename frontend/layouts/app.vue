<template>
  <div class="flex flex-col min-h-screen theme-transition">
    <div class="flex flex-grow">
      <!-- Sidebar -->
      <AppSidebar
        :collapsed="sidebarCollapsed"
        @toggle-sidebar="toggleSidebar"
      />

      <!-- Main content area -->
      <div
        class="flex flex-col flex-grow transition-all duration-200"
        :class="{ 'ml-64': !sidebarCollapsed, 'ml-16': sidebarCollapsed }"
      >
        <!-- App Bar -->
        <AppBar
          @toggle-sidebar="toggleSidebar"
          :sidebar-collapsed="sidebarCollapsed"
        />

        <!-- Main content -->
        <main class="flex-grow p-4 transition-colors duration-200">
          <!-- Page content -->
          <slot />
        </main>

        <!-- Footer -->
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

// Initialize sidebar state from localStorage or default to false (expanded)
const sidebarCollapsed = ref(false);

// Toggle sidebar and save state to localStorage
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
  localStorage.setItem(
    "sidebarCollapsed",
    JSON.stringify(sidebarCollapsed.value)
  );
};

// Load sidebar state from localStorage on component mount
onMounted(() => {
  const savedState = localStorage.getItem("sidebarCollapsed");
  if (savedState !== null) {
    sidebarCollapsed.value = JSON.parse(savedState);
  }
});

// Watch for changes to save to localStorage
watch(sidebarCollapsed, (newValue) => {
  localStorage.setItem("sidebarCollapsed", JSON.stringify(newValue));
});
</script>
