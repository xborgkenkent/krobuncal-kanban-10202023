<template>
  <td-label label-name="task-name"> Task Name </td-label>
  <td-input input-type="text" input-name="task-name" :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)" required/>
</template>

<script setup>
import TdLabel from '../atoms/td-label.vue'
import TdInput from '../atoms/td-input.vue'

defineProps([
  'modelValue'
])

defineEmits([
  'update:modelValue'
])
</script>