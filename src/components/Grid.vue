<template >
    <div class="grid">
        <Card v-for="item in store.tasks" v-bind:key="item" :item="item"  />
    </div>
</template>
<script>

import Card from './Card.vue'
import { todoStore } from '../stores/todo.ts'
export default {

    setup() {
        const store = todoStore()
        return {
            store
        }
    },

    name: 'app-grid',
    components: {
        Card
    }, 
    data() {
        return {

        }
    }
}
</script>
<style >
.grid {
    display: grid;
    margin-top: 5%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}
</style>