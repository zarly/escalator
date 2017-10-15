<template>
	<div>
		<header>
			<router-link to="/" class="back-link">
				Назад
			</router-link>
		</header>
		<div class="panel">
			Add
		</div>
	</div>
</template>

<script>
	import TezisModel from '@/models/tezis'

	export default {
		name: 'panel',
		components: {
		},
		data () {
			return {
				list: TezisModel.exampleList
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../styles/_variables.less";
</style>
