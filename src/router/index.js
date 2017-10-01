import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import Panel from '@/pages/Panel'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/hello',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/',
			name: 'Panel',
			component: Panel
		}
	]
});
