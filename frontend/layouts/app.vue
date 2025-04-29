<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-grow">
      <!-- Mobile overlay -->
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
          <slot />
        </main>

        <!-- Footer -->
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);
const mobileMenuOpen = ref(false);
const sidebarCollapsed = ref(false);

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

const openMobileMenu = () => {
  mobileMenuOpen.value = true;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  // Load sidebar state from localStorage
  const savedState = localStorage.getItem("sidebarCollapsed");

  if (savedState !== null && !isMobile.value) {
    sidebarCollapsed.value = JSON.parse(savedState);
  }

  // Always start with closed sidebar on mobile
  if (isMobile.value) {
    mobileMenuOpen.value = false;
  }
});

// Watch for changes to window size
watch(isMobile, (newValue) => {
  if (newValue) {
    mobileMenuOpen.value = false;
  }
});
</script>
