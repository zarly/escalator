<template>
	<div class="Argument">
		<h3>{{ object.text }}</h3>
		<div class="children">
			<div class="tez-pos">
				<div>
					<button @click="voteUp()">За</button>
				</div>
			</div>
			<div class="tez-neg">
				<div>
					<button @click="voteDown()">Против</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TezisModel from '@/models/tezis'

	export default {
		name: 'Argument',
		props: ['object'],
		data () {
			return {}
		},
		methods: {
			voteUp: function () {
				console.log('vote up');
			},
			voteDown: function () {
				console.log('vote down');
			}
		}
	};
</script>

<style lang="less" scoped>
	.Argument {
		.children {
			display: flex;

			.tez-pos {
				flex: 1;
			}

			.tez-neg {
				flex: 1;
			}
		}
	}
</style>
