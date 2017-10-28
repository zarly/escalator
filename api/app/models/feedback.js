
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('Feedback', {
	message: String,
	ip: String,
	visit: Object,
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
