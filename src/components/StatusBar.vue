<template>
	<div class="status">
		<div class="grow" :style="{ width: store.percent + '%' }"></div>
		<span>{{store.percent + '%'}}</span>
	</div>
</template>
<script>
import { todoStore } from '../stores/todo.ts';

export default {
	name: 'app-statusbar',
	setup() {
		const store = todoStore();
		return { store };
	},
	data() {
		return {
		};
	},
	methods: {
	},
};
</script>
<style>
.status {
	height: 20px;
	width: 100%;
	background-color: #393e46;
	border-radius: 20px;
	margin-top: 1%;
}

.grow {
	height: 20px;
	border-radius: 20px 20px 20px 20px;
	background-color: #00adb5;
}

span {
	font-weight: bold;
}
</style>
