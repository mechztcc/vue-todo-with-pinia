<template>
	<div>
		<div class="card" v-bind:class="{ success: item.done, default: item.done }">
			<div class="card-header">
				<span>{{ item.name }}</span>
			</div>
			<div class="card-body">
				<button
					v-if="item.done"
					class="reopen"
					type="button"
					@click="undone(item.id)"
				>
					Reabrir
				</button>
				<button
					v-if="!item.done"
					class="success"
					type="button"
					@click="done(item.id)"
				>
					Completar
				</button>
				<button class="danger" type="button" @click="remove(item.id)">
					Fechar
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'pinia';
import { todoStore } from '../stores/todo.ts';

export default {
	setup() {},

	beforeUpdate() {},

	name: 'app-card',
	props: {
		item: Object,
	},
	data() {
		const store = todoStore();
		return {
			text: '',
			store,
		};
	},
	methods: {
		...mapActions(todoStore, ['exclude', 'completeTask', 'undoneTask']),
		remove(id) {
			this.exclude(id);
		},
		done(id) {
			this.completeTask(id);
		},
		undone(id) {
			this.undoneTask(id);
		},
	},
};
</script>
<style scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: #393e46;
	height: 100%;
	width: 100%;
	border-radius: 5px;
	text-overflow: ellipsis;
}

.card-header {
	font-size: 22px;
	font-weight: bold;
	margin-top: 10%;
}

.card-body {
	display: flex;
	align-items: center;
	padding: 15px;
}

button {
	padding: 5px 15px;
	border: none;
	border-radius: 5px;
	color: white;
	font-weight: 600;
}

.default {
	background-color: #393e46;
}

.success {
	background-color: #00adb5;
}

.danger {
	background-color: tomato;
}

.reopen {
	border: 2px solid white;
	background-color: transparent;
}

.completed {
	background-color: #30e34e;
}
</style>
