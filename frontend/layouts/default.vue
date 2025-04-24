<template>
  <div class="layout-container">
    <header class="header">test</header>

    <div class="sidebar">
      <AppSideBar />
    </div>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  font-family: "Inter", sans-serif;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 60px 1fr;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .layout-container {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
  }

  .header {
    grid-column: 1 / 2;
  }

  .sidebar {
    display: none;
  }

  .main-content {
    grid-column: 1 / 2;
  }
}

.header {
  background-color: black;
  color: white;
  position: sticky;
  top: 0;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 60px;
  z-index: 10;
}

.sidebar {
  position: sticky;
  top: 0;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 100vh;
  z-index: 10;
}

.main-content {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  padding: 1rem;
}
</style>
