
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongoose = require('mongoose');
const compress = require('compression');
const methodOverride = require('method-override');
const RouteDispatcher = require('../app/dispatchers/routes');
const Auth = require('../app/auth');

module.exports = function(app, config) {
	var env = process.env.NODE_ENV || 'development';
	app.locals.ENV = env;
	app.locals.ENV_DEVELOPMENT = env == 'development';


	// app.use(favicon(config.root + '/public/img/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(cookieParser());
	app.use(expressSession({
		secret: 'frontgrade-secret',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({mongooseConnection: mongoose.connection})
	}));
	app.use(compress());
	app.use(express.static(config.root + '/public'));
	app.use(methodOverride());

	Auth.init(app);
	RouteDispatcher.init();
	RouteDispatcher.initExpress(app);

	app.use(function (req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		errorTemplate.render({
			message: err.message,
			error: {},
			title: 'error'
		}, res);
	});

	return app;
};
