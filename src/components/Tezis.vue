<template>
	<div class="Tezis">
		<h3>{{ object.text }}</h3>
		<div class="flex-row">
			<button class="vote-btn" @click="voteUp()">За</button>
			<button class="vote-btn" @click="offerChange()">Переформулировать</button>
			<button class="vote-btn" @click="voteDown()">Против</button>
		</div>
		<div class="flex-row">
			<div class="flex-cell">
				<div>
					<b>Аргументы за</b>
					<button @click="addPos()">+</button>
				</div>
			</div>
			<div class="flex-cell">
				<div>
					<b>Аргументы против</b>
					<button @click="addNeg()">+</button>
				</div>
			</div>
		</div>
		<div class="splitter-h"></div>
		<div class="flex-row">
			<div class="flex-cell">
				<Argument v-for="item in object.pos" :object="item" :key="item.id"></Argument>
			</div>
			<div class="splitter-v"></div>
			<div class="flex-cell">
				<Argument v-for="item in object.neg" :object="item" :key="item.id"></Argument>
			</div>
		</div>
	</div>
</template>

<script>
	import Argument from '@/components/Argument'
	import TezisModel from '@/models/tezis'

	export default {
		name: 'Tezis',
		props: ['object'],
		components: {
			Argument
		},
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
				console.log('vote up');
			},
			voteDown: function () {
				console.log('vote down');
			},
			offerChange: function () {
				console.log('change');
			}
		}
	};
</script>

<style lang="less" scoped>
	.Tezis {
		border: 1px solid #cca;
		background: #ffc;
		margin: 10px;
		padding: 10px;

		.vote-btn {
			width: 150px;
			flex-basis: 1;
			margin: 10px;
		}

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

		.splitter-v {
			width: 1px;
			background: #cca;
		}
	}
</style>
