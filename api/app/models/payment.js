
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('Payment', {
	type: String,
	callback: Object,
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
