<template>
  <v-input input-type="text" :value="title" @input="$emit('update:title', $event.target.value)"/>
  <v-input input-type="text" :value="description" @input="$emit('update:description', $event.target.value)"/>
  <v-button :buttonType="buttonType" :buttonName="buttonName" />
</template>

<script setup lang=ts>
import VInput from "../atoms/td-input.vue"
import VButton from "../atoms/td-button.vue"

defineProps(['title', 'description'])
defineEmits(['update:title', 'update:description'])
const buttonType = 'submit'
const buttonName = 'addtask'

</script>