<template>
  <header
    class="h-16 flex items-center transition-colors duration-200 border-b shadow-sm"
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
      <span class="text-xl font-semibold text-primary ml-2"> App Kit </span>
    </div>

    <!-- Search box (centered) -->
    <div class="flex-grow mx-4 flex justify-center">
      <span class="p-input-icon-left w-full max-w-md">
        <InputText placeholder="Search..." class="w-full" />
      </span>
    </div>

    <!-- Right side controls -->
    <div class="flex items-center space-x-3 mr-4">
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
      <Button
        icon="pi pi-bell"
        variant="text"
        rounded
        aria-label="Notification"
      />

      <!-- User menu -->
      <Menu ref="menu" :model="userMenuItems" :popup="true" />
      <Button
        @click="menu.toggle($event)"
        aria-label="User menu"
        class="flex items-center"
        text
      >
        <Avatar icon="pi pi-user" class="mr-2" shape="circle" size="normal" />
        <span class="font-medium text-primary hidden sm:inline">Admin</span>
        <i class="pi pi-angle-down ml-2"></i>
      </Button>
    </div>
  </header>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme();

defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle-sidebar"]);

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
