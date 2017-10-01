<template>
	<div class="panel">
		<Tezis v-for="item in list" :object="item"></Tezis>
	</div>
</template>

<script>
	import Tezis from '@/components/Tezis'

	export default {
		name: 'panel',
		components: {
			Tezis
		},
		data () {
			return {
				list: [
					{text: 'first item', pos: [], neg: []},
					{text: 'second item', pos: [], neg: []}
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
