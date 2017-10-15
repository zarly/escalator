import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Add from '@/pages/Add'
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
			path: '/add',
			name: 'Add',
			component: Add
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
