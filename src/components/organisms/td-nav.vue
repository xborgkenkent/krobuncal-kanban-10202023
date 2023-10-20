<template>
  <td-list>
    <template #default>
      <td-list-item v-for="(item, index) in items" :key="index" :to="item.to" @click="location(item.to)">
        {{ item.name }}
      </td-list-item>
    </template>
  </td-list>
</template>

<script setup lang="ts">
import TdListItem from '../atoms/td-listItem.vue'
import TdList from '../atoms/td-list.vue'
import TdAnchor from '../atoms/td-anchor.vue'
import { onMounted } from 'vue';
import { useKanban } from "../../stores/useKanban"
const location = (locate: string) => {
  store.page = locate
  console.log(store.page)
  //localStorage.setItem('current', locate)
}

const store = useKanban()
const items = [
  {
    name: 'Platform Launch',
    to: '/platform'
  },
  {
    name: 'Marketing Plan',
    to: '/marketing'
  },
  {
    name: 'Roadmap',
    to: '/roadmap'
  }
]
</script>