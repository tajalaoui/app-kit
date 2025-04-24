<template>
  <div>
    <div class="mb-4">
      <h1
        class="text-2xl font-bold dark:text-text-primary-dark text-text-primary-light mb-2"
      >
        Dashboard
      </h1>
      <p class="dark:text-text-secondary-dark text-text-secondary-light">
        Welcome to your SaaS dashboard
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Stats cards -->
      <Card class="shadow-sm dark:bg-surface-bg-dark bg-white">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-users text-action mr-2"></i>
            <span class="dark:text-text-primary-dark text-text-primary-light"
              >Users</span
            >
          </div>
        </template>
        <template #content>
          <div
            class="text-3xl font-bold dark:text-text-primary-dark text-text-primary-light"
          >
            1,280
          </div>
          <div
            class="text-sm dark:text-text-secondary-dark text-text-secondary-light mt-2"
          >
            <span class="text-success"><i class="pi pi-arrow-up"></i> 12%</span>
            from last month
          </div>
        </template>
      </Card>

      <Card class="shadow-sm dark:bg-surface-bg-dark bg-white">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-shopping-cart text-action mr-2"></i>
            <span class="dark:text-text-primary-dark text-text-primary-light"
              >Revenue</span
            >
          </div>
        </template>
        <template #content>
          <div
            class="text-3xl font-bold dark:text-text-primary-dark text-text-primary-light"
          >
            $24,500
          </div>
          <div
            class="text-sm dark:text-text-secondary-dark text-text-secondary-light mt-2"
          >
            <span class="text-success"><i class="pi pi-arrow-up"></i> 8%</span>
            from last month
          </div>
        </template>
      </Card>

      <Card class="shadow-sm dark:bg-surface-bg-dark bg-white">
        <template #title>
          <div class="flex items-center">
            <i class="pi pi-chart-line text-action mr-2"></i>
            <span class="dark:text-text-primary-dark text-text-primary-light"
              >Growth</span
            >
          </div>
        </template>
        <template #content>
          <div
            class="text-3xl font-bold dark:text-text-primary-dark text-text-primary-light"
          >
            32%
          </div>
          <div
            class="text-sm dark:text-text-secondary-dark text-text-secondary-light mt-2"
          >
            <span class="text-success"><i class="pi pi-arrow-up"></i> 5%</span>
            from last month
          </div>
        </template>
      </Card>
    </div>

    <!-- Main content section -->
    <Card class="shadow-sm dark:bg-surface-bg-dark bg-white">
      <template #title>
        <div class="flex justify-between items-center">
          <span class="dark:text-text-primary-dark text-text-primary-light"
            >Recent Activity</span
          >
          <Button label="View All" icon="pi pi-arrow-right" text />
        </div>
      </template>
      <template #content>
        <DataTable :value="activities" stripedRows class="p-datatable-sm">
          <Column field="date" header="Date"></Column>
          <Column field="user" header="User"></Column>
          <Column field="action" header="Action"></Column>
          <Column field="status" header="Status">
            <template #body="slotProps">
              <Tag
                :severity="getStatusSeverity(slotProps.data.status)"
                :value="slotProps.data.status"
              />
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Set app layout
definePageMeta({
  layout: "app",
});

// Sample data for the dashboard
const activities = ref([
  {
    date: "2025-04-22",
    user: "John Doe",
    action: "User Login",
    status: "Success",
  },
  {
    date: "2025-04-22",
    user: "Jane Smith",
    action: "Created Project",
    status: "Success",
  },
  {
    date: "2025-04-21",
    user: "Alex Johnson",
    action: "Payment Process",
    status: "Failed",
  },
  {
    date: "2025-04-21",
    user: "Sarah Williams",
    action: "Updated Profile",
    status: "Success",
  },
  {
    date: "2025-04-20",
    user: "Robert Brown",
    action: "Added Team Member",
    status: "Pending",
  },
]);

// Helper function for status badges
const getStatusSeverity = (status) => {
  switch (status) {
    case "Success":
      return "success";
    case "Failed":
      return "danger";
    case "Pending":
      return "warning";
    default:
      return "info";
  }
};
</script>
