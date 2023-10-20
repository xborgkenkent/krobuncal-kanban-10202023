<script setup lang="ts">
import KanbanMain from "./components/pages/KanbanMain.vue"
</script>

<template>
  <div id="app">
    <KanbanMain />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
#app {
  height: 100vh;
  width: auto;
  background-color: #2C2C37;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
