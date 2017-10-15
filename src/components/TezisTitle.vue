<template>
	<div class="TezisTitle">
		<div class="flex-row">

		</div>
		<h3 v-text="object.text"></h3>
		<div class="flex-row">

		</div>
	</div>
</template>

<script>
	import Argument from '@/components/Argument'
	import TezisModel from '@/models/tezis'

	export default {
		name: 'TezisTitle',
		props: ['object'],
		components: {
			Argument
		},
		data () {
			return {}
		},
		methods: {
		}
	};
</script>

<style lang="less" scoped>
	.TezisTitle {
		text-align: left;
		border-top: 1px solid #cca;
		padding: 10px;

		.flex-row {
			display: flex;
			justify-content: space-between;

			.flex-cell {
				flex: 1;
			}
		}

		.splitter-h {
			height: 1px;
			background: #cca;
			margin: 0 10px;
		}
	}
</style>
