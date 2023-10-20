<template>
  <td-select
    select-name="actions"
    :item="actions"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="td-select"
  >
    <option v-for="actions in actions" :key="actions[0]" :value="actions[0]">
      {{ actions[0] }}
    </option>
  </td-select>
</template>

<script setup>
import TdSelect from '../atoms/td-select.vue'
import { actions } from '@/composables/useNewTask'

defineProps(['modelValue'])

defineEmits(['update: modelValue'])
</script>

<style scoped>
.td-select {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 30%;
}
</style>
