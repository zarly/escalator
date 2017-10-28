
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('TestResult', {
	metricId: String,
	metricMin: Number,
	metricMax: Number,
	description: String,
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
