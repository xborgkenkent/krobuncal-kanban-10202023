<template>
  <button :type="buttonType" :name="buttonName" class="td-button">
    {{ buttonName }}
  </button>
</template>

<script setup>
defineProps(['buttonType', 'buttonName'])
</script>

<style scoped>
.td-button {
  padding: 10px 5px;
  margin-top: 1rem;
}
</style>
