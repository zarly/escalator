import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Panel from '@/pages/Panel'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/list',
			name: 'List',
			component: List
		},
		{
			path: '/tezis/:tezisId',
			name: 'Panel',
			component: Panel
		},
		{
			path: '/',
			component: List
		}
	]
});
