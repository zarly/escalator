<template>
	<div>
		<header>
			<router-link to="/add" class="add-link">
				<span class="add-label">Добавить</span>
				<div class="add-btn">+</div>
			</router-link>
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
	@import "../styles/_variables.less";

	header {
		padding: 10px;
		margin-bottom: 20px;
		text-align: right;

		.add-link {
			box-sizing: border-box;
			display: inline-block;
			position: relative;
			width: 150px;
			height: 50px;
			padding-right: 55px;
			padding-top: 14px;
			text-decoration: none;

			.add-label {
				color: @dark-blue;
				font-size: @title-font-size;
				text-decoration: none;
			}

			.add-btn {
				box-sizing: border-box;
				position: absolute;
				top: 0;
				right: 0;
				width: 50px;
				height: 50px;
				border-radius: 25px;
				background: @head-blue;
				color: @white;
				text-align: center;
				font-size: 44px;
			}
		}
	}
</style>
