<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="less" src="./styles/normalize.less"></style>
<style lang="less" scoped>
	#app {
		padding: 10px;
	}
</style>
