
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('TestQuestion', {
	testId: String,
	type: String,
	question: String,
	answers: Object,
	correctAnswer: Number,
	correctAnswers: [Number],
	complexityLevel: Number,
	metricsGain: [],
	created_at: {type: Date, default: Date.now}
});

module.exports = Schema;
