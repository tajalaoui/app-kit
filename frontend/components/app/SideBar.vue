<template>
  <aside
    class="fixed h-screen transition-all duration-200 dark:bg-surface-bg-dark bg-surface-bg-light border-r dark:border-border-dark border-border-light shadow-sm z-20"
    :class="[collapsed ? 'w-16' : 'w-64']"
  >
    <!-- Logo section -->
    <div
      class="h-16 flex items-center justify-between border-b dark:border-border-dark border-border-light"
    >
      <div class="flex items-center px-4">
        <i class="pi pi-prime text-action text-xl"></i>
        <span
          v-if="!collapsed"
          class="text-xl font-semibold ml-2 dark:text-text-primary-dark text-text-primary-light"
        >
          SaaS App
        </span>
      </div>

      <!-- Collapse button -->
      <Button
        @click="$emit('toggle-sidebar')"
        :icon="collapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"
        text
        rounded
        class="mr-2"
        aria-label="Toggle sidebar"
      />
    </div>

    <!-- Navigation menu -->
    <div class="py-4">
      <PanelMenu
        :model="menuItems"
        class="sidebar-menu"
        :class="{ 'collapsed-menu': collapsed }"
      />
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["toggle-sidebar"]);

const menuItems = [
  {
    label: "Dashboard",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "Analytics",
    icon: "pi pi-chart-bar",
    to: "/analytics",
  },
  {
    label: "Customers",
    icon: "pi pi-users",
    to: "/customers",
  },
  {
    label: "Products",
    icon: "pi pi-shopping-cart",
    to: "/products",
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    items: [
      {
        label: "Account",
        icon: "pi pi-user",
        to: "/settings/account",
      },
      {
        label: "Team",
        icon: "pi pi-users",
        to: "/settings/team",
      },
      {
        label: "Billing",
        icon: "pi pi-credit-card",
        to: "/settings/billing",
      },
    ],
  },
];
</script>

<style scoped>
.sidebar-menu :deep(.p-panelmenu-header-link) {
  padding: 0.75rem 1rem;
}

.sidebar-menu :deep(.p-menuitem-icon) {
  font-size: 1.25rem;
}

.collapsed-menu :deep(.p-panelmenu-header-link .p-menuitem-text),
.collapsed-menu :deep(.p-panelmenu-header-link .p-submenu-icon) {
  display: none;
}

.collapsed-menu :deep(.p-panelmenu-content) {
  display: none;
}

.collapsed-menu :deep(.p-panelmenu-header-link) {
  justify-content: center;
  padding: 0.75rem 0;
}

.sidebar-menu :deep(.p-component) {
  width: 100%;
}
</style>
