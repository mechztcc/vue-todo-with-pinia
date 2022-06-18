import { defineStore } from 'pinia';

export const todoStore = defineStore('todo', {
	state: () => ({
		tasks: [
			// {
			// 	id: 1,
			// 	name: 'Beber agua',
			// 	done: true,
			// },
			// {
			// 	id: 2,
			// 	name: 'Beber Suco',
			// 	done: true,
			// },
			// {
			// 	id: 3,
			// 	name: 'Beber Suco',
			// 	done: false,
			// },
		],
	}),
	actions: {
		add(task) {
			this.tasks.push(task);
		},
		exclude(id) {
			this.tasks.forEach((el, i) => {
				el.id == id ? this.tasks.splice(i, 1) : '';
			});
		},

		completeTask(id) {
			this.tasks.forEach((el, i) => {
				if (el.id == id) {
					el.done = true;
				}
			});
		},

		undoneTask(id) {
			this.tasks.forEach((el, i) => {
				if (el.id == id) {
					el.done = false;
				}
			});
		},
	},
	getters: {
		total: (state) => state.tasks.length,
		percent: (state) => {
			if (state.tasks.length == 0) {
				return 0;
			}
			const total = state.tasks.length;
			const doneTasks = state.tasks.filter((el) => el.done == true);

			let percent = (doneTasks.length / total) * 100;

			return percent.toFixed(2);
		},
	},
});
