<template>
  <header
    class="h-16 flex items-center transition-colors duration-200 dark:bg-surface-bg-dark bg-surface-bg-light border-b dark:border-border-dark border-border-light shadow-sm"
  >
    <!-- Sidebar toggle button for mobile -->
    <Button
      @click="$emit('toggle-sidebar')"
      icon="pi pi-bars"
      text
      rounded
      severity="text"
      class="ml-2"
      aria-label="Toggle sidebar"
    />

    <!-- App logo/title -->
    <div class="flex items-center px-4">
      <span
        class="text-xl font-semibold dark:text-text-primary-dark text-text-primary-light ml-2"
      >
        SaaS App
      </span>
    </div>

    <!-- Search box -->
    <div class="flex-grow mx-4 hidden md:flex justify-center">
      <span class="p-input-icon-left w-full max-w-md">
        <i class="pi pi-search" />
        <InputText
          placeholder="Search..."
          class="w-50 !bg-white dark:!bg-surface-bg-dark"
        />
      </span>
    </div>

    <!-- Right side controls -->
    <div class="flex items-center space-x-1 mr-4">
      <!-- Theme toggle -->
      <Button
        @click="toggleColorMode"
        :icon="colorMode === 'dark' ? 'pi pi-sun' : 'pi pi-moon'"
        text
        rounded
        class="p-button-text"
        aria-label="Toggle theme"
      />

      <!-- Notifications -->
      <Button
        icon="pi pi-bell"
        text
        rounded
        badge="2"
        badge-class="p-badge-danger"
        aria-label="Notifications"
      />

      <!-- User menu -->
      <Menu ref="menu" :model="userMenuItems" :popup="true" />
      <Button
        @click="menu.toggle($event)"
        aria-label="User menu"
        class="flex items-center"
        text
      >
        <Avatar icon="pi pi-user" class="mr-2" size="normal" />
        <span
          class="font-medium dark:text-text-primary-dark text-text-primary-light hidden sm:inline"
          >User Name</span
        >
        <i class="pi pi-angle-down ml-2"></i>
      </Button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useColorMode } from "~/composables/useColorMode";

defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle-sidebar"]);

const menu = ref(null);
const { colorMode, toggleColorMode } = useColorMode();

const userMenuItems = [
  {
    label: "Profile",
    icon: "pi pi-user",
    command: () => {
      // Handle profile action
    },
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    command: () => {
      // Handle settings action
    },
  },
  {
    separator: true,
  },
  {
    label: "Sign Out",
    icon: "pi pi-sign-out",
    command: () => {
      // Handle logout action
    },
  },
];
</script>
