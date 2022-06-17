<template>
    <div>
        <div class="card" v-bind:class="{ 'success': item.active, 'default': !item.active}">
            <div class="card-header">
                <span>{{ item.name }}</span>
            </div>
            <div class="card-body">
                <button class="success" type="button" @click="done">{{ item.active ? 'Reabrir' : 'Completar' }}</button>
                <button class="danger" type="button" @click="remove">Fechar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-card',
    props: {
        item: Object
    },
    data() {
        return {
            text: ''
        }
    },
    methods: {
        remove() {
            console.log('deletando');
        },
        done() {
            console.log('completando');
        }
    },

}
</script>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #393E46;
    height: 100px;
    width: 100%;
    border-radius: 5px;
}

.card-header {
    font-size: 22px;
    font-weight: bold;
}

.card-body {
    display: flex;
    align-items: center;
}

button {
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    margin: 2%;
}

.default {
    background-color: #393E46;
}

.success {
    background-color: #00ADB5;

}

.danger {
    background-color: tomato;
}

.completed {
    background-color: #30e34e;
}
</style>