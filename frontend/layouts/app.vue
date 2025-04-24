<template>
  <div
    class="flex flex-col min-h-screen theme-transition"
    :class="[colorMode === 'dark' ? 'dark' : '']"
  >
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
          <slot />
        </main>

        <!-- Footer -->
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useColorMode } from "~/composables/useColorMode";

const sidebarCollapsed = ref(false);
const { colorMode } = useColorMode();

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};
</script>
