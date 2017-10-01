<template>
	<div class="Tezis">
		<h3>{{ object.text }}</h3>
		<div class="children">
			<div class="tez-pos">
				<div>
					<b>За</b>
					<button @click="addPos()">+</button>
				</div>
				<Tezis v-for="item in object.pos" :object="item" :key="item.id"></Tezis>
			</div>
			<div class="tez-neg">
				<div>
					<b>Против</b>
					<button @click="addNeg()">+</button>
				</div>
				<Tezis v-for="item in object.neg" :object="item" :key="item.id"></Tezis>
			</div>
		</div>
	</div>
</template>

<script>
	import TezisModel from '@/models/tezis'

	export default {
		name: 'Tezis',
		props: ['object'],
		data () {
			return {}
		},
		methods: {
			addPos: function () {
				var text = prompt('Введите текст:');
				this.object.addPos({text: text});
			},
			addNeg: function () {
				var text = prompt('Введите текст:');
				this.object.addNeg({text: text});
			},
			voteUp: function () {

			}
		}
	};
</script>

<style lang="less" scoped>
	.Tezis {
		border: 1px solid #008;

		.children {
			display: flex;

			.tez-pos {
				flex: 1;
				background: rgba(0, 255, 0, 0.2);
			}

			.tez-neg {
				flex: 1;
				background: rgba(255, 0, 0, 0.2);
			}
		}
	}
</style>
