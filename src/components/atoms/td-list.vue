<template>
  <component :is="tagName">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tagName: {
    type: String,
    default: 'ul',
    validator(value) {
      return ['ul', 'ol', 'div'].includes(value)
    }
  }
})
</script>