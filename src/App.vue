<template>
	<div class="area">
		<Header />
		<StatusBar />
		<Grid />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import StatusBar from './components/StatusBar.vue';
import Grid from './components/Grid.vue';

export default {
	name: 'App',
	components: {
		Header,
		StatusBar,
		Grid,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: white;
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	width: 100vw;
	height: 100vh;
}

body {
	display: flex;
	justify-content: center;
	background-color: #222831;
}

.area {
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
