<template>
  <input
    :type="inputType"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    class="td-input"
  />
</template>

<script setup>
defineProps(['inputType', 'modelValue'])

defineEmits(['update:modelValue'])
</script>

<style scoped>
.td-input {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  display: inline-flex;
}
</style>
