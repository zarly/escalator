
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('TestModule', {
	id: String,
	title: String,
	priority: Number,
	maxLength: Number,
	checked: Boolean,
	metrics: [],
	created_at: {type: Date, default: Date.now}
}, {}, {
	findByIds: async function (ids) {
		return new Promise(function (resolve, reject) {
			this.find({id: {$in: ids}}).exec(function (err, data) {
				console.log('go', err, data);
				if (err) return reject(err);
				resolve(data);
			});
		}.bind(this));
	}
});

module.exports = Schema;
