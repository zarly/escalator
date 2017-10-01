<template>
	<div class="Tezis">
		<h3>{{ object.text }}</h3>
		<div>
			<div>
				<b>За</b>
				<button @click="addPos()">+</button>
			</div>
			<Tezis v-for="item in object.pos" :object="item"></Tezis>
		</div>
		<div>
			<div>
				<b>Против</b>
				<button @click="addNeg()">+</button>
			</div>
			<Tezis v-for="item in object.neg" :object="item"></Tezis>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tezis',
		props: ['object'],
		data () {
			return {}
		},
		methods: {
			addPos: function () {
				var text = prompt('Введите текст:');
				this.object.pos.push({text: text, pos: [], neg: []});
			},
			addNeg: function () {
				var text = prompt('Введите текст:');
				this.object.neg.push({text: text, pos: [], neg: []});
			},
			voteUp: function () {

			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Tezis {
		border: 1px solid #008;
	}
</style>
