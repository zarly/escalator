<template>
	<div>
		<header>
			<router-link to="/" class="back-link">
				Назад
			</router-link>
		</header>
		<div class="panel">
			<form @submit.prevent="submit">
				<label>
					<div>Заголовок:</div>
					<input type="text" v-model="title" />
				</label>
				<label>
					<div>Описание:</div>
					<textarea v-model="description"></textarea>
				</label>
				<div>
					<button type="submit">Создать</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import TezisModel from '@/models/tezis'

	export default {
		name: 'panel',
		components: {
		},
		data () {
			return {
				title: '',
				description: '',
			}
		},
		methods: {
			submit () {
				this.$gate('api/tezis', {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: JSON.stringify({
						title: this.title,
						description: this.description,
					})
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../styles/_variables.less";
</style>
