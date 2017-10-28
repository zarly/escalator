<template>
	<div class="panel">
		<Tezis :object="tezis"></Tezis>
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
				list: TezisModel.exampleList,
				tezis: TezisModel.exampleList[this.$route.params.tezisId - 1]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
