<template>
    <KanbanPage>
        <template #header>
            <form @submit.prevent="add()" class="header">
                <input type="text" v-model="title"/>
                <input type="text" v-model="description"/>
                <input type="text" v-model="status" placeholder="TODO, In-Progress, Done"/>
                <v-button :buttonType="buttonType" :buttonName="buttonName" class="button"/>
            </form>
        </template>
        <template #sidebar>
            <v-nav class="sidebar"/>
        </template>

        <template #main>
            <ul v-for="item in items">
                {{ item }}
                <div v-for="listitem in store.kanban.filter(x=>x.status===item && x.page===store.page)">
                    {{ listitem }}
                    <button @click="remove(listitem.id)">delete</button>
                </div>
                
            </ul>
        </template>
        
    </KanbanPage>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue' 
import KanbanPage from "../templates/KanbanPage.vue"
import VNav from "../organisms/td-nav.vue"
import VButton from "../atoms/td-button.vue"
import VList from "../molecules/td-lists.vue"
import VForm from "../organisms/td-taskForm.vue" 
import { useKanban } from "../../stores/useKanban"
const buttonType = 'submit'
const buttonName = 'Add Task'
const items = ['TODO', 'In-Progress', 'Done']

let show = false
const store = useKanban()
const title = ref('')
const description = ref('')
const status = ref('')
const add = () => {
    store.add(title.value, description.value, status.value, localStorage.getItem('current'))
    title.value = ''
    description.value = ''
    status.value = ''
}
const remove = (id: number) => {
    store.remove(id)
}
</script>

<style scoped>

    .container {
        background-color: #2C2C37;
        display: grid;
    }
    .header {
        display: flex;
        justify-content: flex-end;
    }
    .sidebar {
        background-color: #5D6270;
    }

    .button {
        border-radius: 20px;
        padding: 1rem;
        color: white;
        background-color: #4AC1E3
    }
</style>