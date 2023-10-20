<template>
  <component :is="tagName">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tagName: {
    type: String,
    default: 'li'
  }
})

</script>