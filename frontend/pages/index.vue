<template>
  <div>
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-primary mb-2">Dashboard</h1>
      <p class="text-secondary">Welcome to your App Kit dashboard</p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <!-- Stats cards - span 1 column each -->
      <Card class="shadow-sm theme-transition">
        <template #content>
          <div class="flex items-center">
            <i class="pi pi-users text-action mr-2 text-2xl"></i>
            <div>
              <div class="text-2xl font-bold text-primary">1,280</div>
              <div class="text-xs text-secondary">Users</div>
            </div>
          </div>
          <div class="text-xs text-secondary mt-2">
            <span class="text-success"><i class="pi pi-arrow-up"></i> 12%</span>
            from last month
          </div>
        </template>
      </Card>

      <Card class="shadow-sm theme-transition">
        <template #content>
          <div class="flex items-center">
            <i class="pi pi-shopping-cart text-action mr-2 text-2xl"></i>
            <div>
              <div class="text-2xl font-bold text-primary">$24.5k</div>
              <div class="text-xs text-secondary">Revenue</div>
            </div>
          </div>
          <div class="text-xs text-secondary mt-2">
            <span class="text-success"><i class="pi pi-arrow-up"></i> 8%</span>
            from last month
          </div>
        </template>
      </Card>

      <Card class="shadow-sm theme-transition">
        <template #content>
          <div class="flex items-center">
            <i class="pi pi-chart-line text-action mr-2 text-2xl"></i>
            <div>
              <div class="text-2xl font-bold text-primary">32%</div>
              <div class="text-xs text-secondary">Growth</div>
            </div>
          </div>
          <div class="text-xs text-secondary mt-2">
            <span class="text-success"><i class="pi pi-arrow-up"></i> 5%</span>
            from last month
          </div>
        </template>
      </Card>

      <Card class="shadow-sm theme-transition">
        <template #content>
          <div class="flex items-center">
            <i class="pi pi-check-circle text-action mr-2 text-2xl"></i>
            <div>
              <div class="text-2xl font-bold text-primary">98.3%</div>
              <div class="text-xs text-secondary">Uptime</div>
            </div>
          </div>
          <div class="text-xs text-secondary mt-2">
            <span class="text-success"
              ><i class="pi pi-arrow-up"></i> 1.2%</span
            >
            from last month
          </div>
        </template>
      </Card>

      <!-- Line chart - span 2 columns -->
      <Card class="shadow-sm theme-transition md:col-span-2">
        <template #title>
          <div class="flex justify-between items-center">
            <span class="text-primary text-sm font-medium"
              >Monthly Revenue</span
            >
            <Button icon="pi pi-ellipsis-v" text rounded aria-label="Options" />
          </div>
        </template>
        <template #content>
          <div class="h-64">
            <LineChart />
          </div>
        </template>
      </Card>

      <!-- Donut chart - span 2 columns -->
      <Card class="shadow-sm theme-transition md:col-span-2">
        <template #title>
          <div class="flex justify-between items-center">
            <span class="text-primary text-sm font-medium"
              >Traffic Sources</span
            >
            <Button icon="pi pi-ellipsis-v" text rounded aria-label="Options" />
          </div>
        </template>
        <template #content>
          <div class="h-64">
            <DoughnutChart />
          </div>
        </template>
      </Card>

      <!-- Activity table - span full width -->
      <Card class="shadow-sm theme-transition md:col-span-4">
        <template #title>
          <div class="flex justify-between items-center">
            <span class="text-primary text-sm font-medium"
              >Recent Activity</span
            >
            <Button label="View All" icon="pi pi-arrow-right" text />
          </div>
        </template>
        <template #content>
          <DataTable
            :value="activities"
            stripedRows
            class="p-datatable-sm"
            :rows="5"
          >
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
  </div>
</template>

<script setup>
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
