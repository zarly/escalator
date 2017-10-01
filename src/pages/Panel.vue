<template>
	<div class="panel">
		<Tezis v-for="item in list" :object="item" :key="item.id"></Tezis>
	</div>
</template>

<script>
	import Tezis from '@/components/Tezis'
	import TezisModel from '@/models/tezis'

	export default {
		name: 'panel',
		components: {
			Tezis
		},
		data () {
			return {
				list: [
					new TezisModel({text: 'first item'}),
					new TezisModel({text: 'second item'})
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
