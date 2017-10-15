<template>
	<div class="TezisTitle">
		<div class="flex-row">

		</div>
		<router-link :to="'/tezis/' + object.id" class="title" v-text="object.text"></router-link>
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
	@import "../styles/_variables.less";

	.TezisTitle {
		text-align: left;
		padding: 20px;

		.title {
			color: @dark-blue;
			font-size: @title-font-size;
			font-weight: bold;
			text-decoration: none;
		}

		.flex-row {
			display: flex;
			justify-content: space-between;

			.flex-cell {
				flex: 1;
			}
		}
	}
</style>
