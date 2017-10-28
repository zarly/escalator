
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('Tezis', {
	author: String,
	title: String,
	description: String,
	votes: Object,
	meta: Object,
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
