
var ModelDispatcher = require('../dispatchers/models');

var Schema = ModelDispatcher.define('TestPass', {
	id: String,
	hrId: String,
	tests: [String],
	maxLength: Number,
	questions: {type: Array, default: []},
	candidateData: Object,
	activeQuestion: Object,
	intermediateMetrics: Object,
	results: Object,
	status: {type: Number, default: 1},
	startedAt: Date,
	completedAt: Date,
	honestyMonitoringEvents: {type: Array, default: []},
	is_deleted: {type: Boolean, default: false},
	created_at: {type: Date, default: Date.now}
}, {
	questionsDuration: function () {
		return this.questions.reduce(function (duration, q) {
			return duration + Math.min(60000, q.duration || 60000);
		}, 0);
	},
	getStatus: function () {
		switch (this.status || 1) {
			case Schema.STATUSES.created:
				return {type: 'created', date: this.created_at};
			case Schema.STATUSES.started:
				return {type: 'started', date: this.startedAt};
			case Schema.STATUSES.in_progress:
				return {type: 'in_progress', current: this.questions.length, total: this.maxLength};
			case Schema.STATUSES.completed:
				return {type: 'completed', rating: this.getTotalRating()};
			default:
				throw new Error('Unexpected status');
		}
	},
	getTotalRating: function () {
		if (!this.results) throw new Error('TestPass is not completed yet');

		var summary = this.results.reduce(function (o, r) {
			o.plus += r.plus;
			o.minus += r.minus;
			return o;
		}, {
			plus: 0,
			minus: 0
		});

		return summary.plus / (summary.plus + summary.minus);
	}
});

Schema.STATUSES = {
	created: 1,
	started: 2,
	in_progress: 3,
	completed: 4
};

module.exports = Schema;
