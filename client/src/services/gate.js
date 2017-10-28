
export default {
	install (Vue) {
		Vue.prototype.$gate = this.request.bind(this);
	},
	request (...args) {
		return fetch(...args);
	}
}
