<template>
  <div class="flex flex-col min-h-screen theme-transition">
    <div class="flex flex-grow">
      <!-- Mobile overlay when sidebar is open -->
      <div
        v-if="isMobile && mobileMenuOpen"
        class="fixed inset-0 bg-black bg-opacity-70 z-10 overflow-hidden"
        @click="closeMobileMenu"
      ></div>

      <!-- Sidebar -->
      <AppSidebar
        :collapsed="sidebarCollapsed"
        :mobile-menu-open="mobileMenuOpen"
        @toggle-sidebar="toggleSidebar"
        @close-mobile-menu="closeMobileMenu"
      />

      <!-- Main content area -->
      <div
        class="flex flex-col flex-grow transition-all duration-200"
        :class="{
          'ml-0 md:ml-64': !sidebarCollapsed && !isMobile,
          'ml-0 md:ml-16': sidebarCollapsed && !isMobile,
          'ml-0': isMobile,
        }"
      >
        <!-- App Bar -->
        <AppBar
          @toggle-sidebar="toggleSidebar"
          @open-mobile-menu="openMobileMenu"
          :sidebar-collapsed="sidebarCollapsed"
          :is-mobile="isMobile"
        />

        <!-- Main content -->
        <main class="flex-grow p-2 md:p-4 transition-colors duration-200">
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
import { useWindowSize } from "@vueuse/core";

// Mobile detection
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
const mobileMenuOpen = ref(false);

// Initialize sidebar state from localStorage or default to false (expanded)
const sidebarCollapsed = ref(false);

// Toggle sidebar and save state to localStorage
const toggleSidebar = () => {
  if (isMobile.value) {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  } else {
    sidebarCollapsed.value = !sidebarCollapsed.value;
    localStorage.setItem(
      "sidebarCollapsed",
      JSON.stringify(sidebarCollapsed.value)
    );
  }
};

// Mobile-specific handlers
const openMobileMenu = () => {
  mobileMenuOpen.value = true;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Load sidebar state from localStorage on component mount
onMounted(() => {
  const savedState = localStorage.getItem("sidebarCollapsed");
  if (savedState !== null) {
    sidebarCollapsed.value = JSON.parse(savedState);
  }

  // On mobile, always start with closed sidebar
  if (isMobile.value) {
    mobileMenuOpen.value = false;
  }
});

// Watch for changes to save to localStorage
watch(sidebarCollapsed, (newValue) => {
  localStorage.setItem("sidebarCollapsed", JSON.stringify(newValue));
});

// Watch for window size changes to adjust UI
watch(isMobile, (newValue) => {
  if (newValue) {
    // When switching to mobile
    mobileMenuOpen.value = false;
  }
});
</script>
