<template>
  <aside
    class="fixed h-screen transition-all duration-200 border-r z-20"
    :class="[
      !isMobile && collapsed ? 'w-16' : 'w-64',
      mobileMenuOpen
        ? 'translate-x-0 shadow-xl'
        : '-translate-x-full md:translate-x-0 md:shadow-md',
    ]"
    style="
      background-color: var(--surface-bg);
      border-color: var(--border);
      color: var(--primary-text);
    "
  >
    <!-- Logo section -->
    <div
      class="h-16 flex items-center justify-between px-4 border-b"
      style="border-color: var(--border)"
    >
      <div class="flex items-center">
        <i class="pi pi-prime text-xl" style="color: var(--action)"></i>
        <span
          v-if="!collapsed || isMobile"
          class="text-xl font-semibold ml-2"
          style="color: var(--primary-text)"
        >
          App Kit
        </span>
      </div>
      <!-- Close button for mobile -->
      <Button
        v-if="!collapsed && isMobile"
        @click="closeMobileMenu"
        icon="pi pi-times"
        text
        rounded
        aria-label="Close menu"
      />
    </div>

    <!-- Navigation menu -->
    <div class="py-4">
      <nav class="space-y-1">
        <RouterLink
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          v-slot="{ isActive }"
          custom
        >
          <div
            @click="navigateTo(item)"
            class="flex items-center px-4 py-3 cursor-pointer transition-colors duration-150 menu-item"
            :class="{ 'active-menu-item': isActive }"
          >
            <i
              :class="[item.icon, 'mr-3 text-xl']"
              style="color: var(--action)"
            ></i>
            <span
              v-if="!collapsed || isMobile"
              style="color: var(--primary-text)"
              >{{ item.label }}</span
            >

            <!-- Dropdown indicator for items with children -->
            <i
              v-if="(!collapsed || isMobile) && item.items && item.items.length"
              :class="[
                expanded[item.label]
                  ? 'pi pi-chevron-down'
                  : 'pi pi-chevron-right',
                'ml-auto',
              ]"
              style="color: var(--secondary-text)"
            ></i>
          </div>

          <!-- Submenu items (only show when parent is expanded and sidebar is not collapsed or on mobile) -->
          <div
            v-if="
              (!collapsed || isMobile) && item.items && expanded[item.label]
            "
            class="pl-10 space-y-1"
          >
            <RouterLink
              v-for="subItem in item.items"
              :key="subItem.to"
              :to="subItem.to"
              v-slot="{ isActive }"
            >
              <div
                class="flex items-center px-4 py-2 cursor-pointer transition-colors duration-150 menu-item"
                :class="{ 'active-menu-item': isActive }"
                @click="isMobile && closeMobileMenu()"
              >
                <i
                  :class="[subItem.icon, 'mr-3']"
                  style="color: var(--action)"
                ></i>
                <span style="color: var(--primary-text)">{{
                  subItem.label
                }}</span>
              </div>
            </RouterLink>
          </div>
        </RouterLink>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
  mobileMenuOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle-sidebar", "close-mobile-menu"]);

// Keep track of which menu items are expanded
const expanded = ref({});
const { width } = useWindowSize();
const isMobile = computed(() => width.value < 768);

// Menu items configuration
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
    label: "Settings",
    icon: "pi pi-cog",
    to: "/settings",
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

// Close mobile menu helper
const closeMobileMenu = () => {
  emit("close-mobile-menu");
};

// Handle navigation and submenu toggling
const navigateTo = (item) => {
  if (item.items && item.items.length) {
    // Toggle submenu if item has children
    expanded.value[item.label] = !expanded.value[item.label];
  } else {
    // For non-parent items, navigate directly
    useRouter().push(item.to);

    // Close menu if on mobile
    if (isMobile.value) {
      closeMobileMenu();
    }
  }
};

// Initialize expanded state
onMounted(() => {
  menuItems.forEach((item) => {
    if (item.items && item.items.length) {
      expanded.value[item.label] = false;
    }
  });
});
</script>

<style scoped>
.menu-item:hover {
  background-color: rgba(128, 128, 128, 0.1);
}

.active-menu-item {
  background-color: rgba(128, 128, 128, 0.2);
}
</style>
