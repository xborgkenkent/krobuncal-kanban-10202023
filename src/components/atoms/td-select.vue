<template>
  <select
    :name="selectName"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="td-select"
  >
    <slot :item="item" />
  </select>
</template>

<script setup>
defineProps(['selectName', 'modelValue'])

defineEmits(['update:modelValue'])
</script>

<style scoped>
.td-select {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
}
</style>
