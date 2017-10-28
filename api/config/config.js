
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';
env = env.replace(/ /g, '');
console.log('env =', env);

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'escalator'
		},
		port: process.env.PORT || 8070,
		db: 'mongodb://localhost/escalator-development'
	},

	test: {
		root: rootPath,
		app: {
			name: 'escalator'
		},
		port: process.env.PORT || 8070,
		db: 'mongodb://localhost/escalator-test'
	},

	production: {
		root: rootPath,
		app: {
			name: 'escalator'
		},
		port: process.env.PORT || 8070,
		db: 'mongodb://localhost/escalator-production'
	}
};

module.exports = config[env];
