<template>
  <label :for="labelName" class="td-label">
    <slot />
  </label>
</template>

<script setup>
defineProps(['labelName'])
</script>

<style scoped>
.td-label {
  padding: 12px 12px 12px 0;
  display: flex;
  align-items: center;
}
</style>
