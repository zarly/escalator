<template>
	<div>
		<header>
			<button>Добавить</button>
		</header>
		<div class="panel">
			<TezisTitle v-for="item in list" :object="item" :key="item.id"></TezisTitle>
		</div>
	</div>
</template>

<script>
	import TezisTitle from '@/components/TezisTitle'
	import TezisModel from '@/models/tezis'

	export default {
		name: 'panel',
		components: {
			TezisTitle
		},
		data () {
			return {
				list: TezisModel.exampleList
			}
		}
	}
</script>

<style lang="less" scoped>
	header {
		padding: 10px;
		margin-bottom: 20px;
		text-align: right;
	}
</style>
