<template>
	<div class="card">
		<div class="card-header">
			<h1>{{ text ? text : 'Informe o nome da tarefa' }}</h1>
		</div>
		<div class="card-body">
			<input type="text" v-model="text" placeholder="nome da tarefa">
			<button type="button" @click="save">Enviar</button>
		</div>
	</div>

</template>
<script>
import { todoStore } from '../stores/todo.ts'
import { mapActions } from 'pinia'


export default {


	name: 'app-todo',
	data() {
		return {
			text: ''
		}
	},
	methods: {
		...mapActions(todoStore, ['add']),
		save() {
			this.add()
		},

	}
}
</script>
<style scoped>
.card {
	background-color: #393E46;
	border-radius: 5px;

}

.card-body {
	display: flex;
	justify-content: space-around;
	padding: 0 3% 3% 3%;
}

input {
	width: 100%;
	height: 25px;
	border-radius: 5px 0 0 5px;
	outline: none;

}

button {
	padding: 5px 15px;
	background-color: #00ADB5;
	color: white;
	font-weight: bold;
	border: none;
	height: 30px;
	width: 20%;
	border-radius: 0 5px 5px 0;
}
</style>