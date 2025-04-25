<template>
  <header
    class="h-16 flex items-center transition-colors duration-200 border-b shadow-sm"
  >
    <!-- Sidebar toggle button - behavior differs on mobile vs desktop -->
    <Button
      @click="isMobile ? $emit('open-mobile-menu') : $emit('toggle-sidebar')"
      icon="pi pi-bars"
      text
      rounded
      severity="text"
      class="ml-2"
      aria-label="Toggle sidebar"
    />

    <!-- App logo/title -->
    <div class="sm:hidden flex items-center px-2 md:px-4">
      <span class="text-lg md:text-xl font-semibold text-primary ml-2"
        >App Kit</span
      >
    </div>

    <!-- Search box (hidden on small mobile, centered on larger screens) -->
    <div class="hidden sm:flex flex-grow mx-4 justify-center">
      <span class="p-input-icon-left w-full max-w-md">
        <InputText placeholder="Search..." class="w-full" />
      </span>
    </div>

    <!-- Right side controls -->
    <div class="flex items-center space-x-1 md:space-x-3 ml-auto mr-2 md:mr-4">
      <!-- Theme toggle - icon only -->
      <Button
        @click="toggleTheme"
        :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
        text
        rounded
        class="p-2"
        aria-label="Toggle theme"
      />

      <!-- Notifications -->
      <Button icon="pi pi-bell" text rounded aria-label="Notification" />

      <!-- User menu -->
      <Menu ref="menu" :model="userMenuItems" :popup="true" />
      <Button
        @click="menu.toggle($event)"
        aria-label="User menu"
        class="flex items-center"
        text
      >
        <Avatar
          icon="pi pi-user"
          class="mr-0 md:mr-2"
          shape="circle"
          size="normal"
        />
        <span class="font-medium text-primary hidden md:inline">Admin</span>
        <i class="pi pi-angle-down ml-2 hidden md:inline"></i>
      </Button>
    </div>
  </header>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";
const { isDark, toggleTheme } = useTheme();

const props = defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle-sidebar", "open-mobile-menu"]);

const menu = ref(null);

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
