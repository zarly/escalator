
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('Visit', {
	message: String,
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
