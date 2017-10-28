
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('TestMetric', {
	id: String,
	type: String,
	title: String,
	valueMin: {type: Number, default: 0},
	valueMax: {type: Number, default: 1},
	valueInitial: {type: Number, default: 0.5},
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
