<template>
  <ul :tag="listTag"  v-for="item, index in items" :key="index">
    <p>{{ item }}</p>
    <div :class="item" v-for="listitem in listItem.filter((x=>x.status==item && x.page===currenLocation))" @click="showMe(listitem.id)">{{ listitem }}</div>
  </ul>
</template>

<script setup lang="ts">
import { watch } from "vue"
import TdList from '../atoms/td-list.vue'
import TdListItem from '../atoms/td-listItem.vue'
import { useKanban } from "../../stores/useKanban"
const props = defineProps([
  'items',
  'listItem',
  'listTag',
  'listItemTag'
])

const store = useKanban()
const currenLocation = store.page

const showMe = (id: number) => {
  //console.log(id)
  const filter = props.listItem.filter(todo=>todo.id===id)[0]
  const getTodo = JSON.parse(JSON.stringify(filter)) 
  console.log(getTodo)

  let status = prompt(`edit status for ${getTodo.title}`)
}
</script>

<style scoped>
  .item {
    display: flex;
    background-color: #000
  }


</style>