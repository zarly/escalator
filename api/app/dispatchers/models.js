
var glob = require('glob');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config/config');

module.exports = {
	db: null,
	initPromise: null,
	init: function () {
		if (!this.initPromise) {
			console.log('db connecting...');
			mongoose.Promise = global.Promise;

			var models = glob.sync(config.root + '/app/models/*.js');
			models.forEach(function (model) {
				require(model);
			});

			this.initPromise = mongoose.connect(config.db, { useMongoClient: true })
				.then(function () {
					console.log('db connected');
				})
				.catch(function (err) {
					console.error(err);
					throw new Error('unable to connect to database at ' + config.db);
				});
			this.db = mongoose.connection;
		}
		return this.initPromise;
	},
	define: function (modelName, modelConfig, methods, statics) {
		var ModelSchema = new Schema(modelConfig, {
			collection: modelName
		});

		ModelSchema.virtual('date')
			.get(function(){
				return this._id.getTimestamp();
			});

		Object.keys(methods || {}).forEach(function (methodName) {
			ModelSchema.methods[methodName] = methods[methodName];
		});

		Object.keys(statics || {}).forEach(function (methodName) {
			ModelSchema.statics[methodName] = statics[methodName];
		});

		mongoose.model(modelName, ModelSchema);
		return ModelSchema;
	},
	model: function (name) {
		return mongoose.model(name);
	}
};
