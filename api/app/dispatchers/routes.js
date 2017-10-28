
var glob = require('glob');
var express = require('express');
var Auth = require('../auth');
var router = express.Router();
var config = require('../../config/config');

function RoutesHelper (app, routeConfig) {
	routeConfig.routes.forEach(function (route) {
		if (route.auth === 'hr') {
			router[route.method](route.path, Auth.onlyHR, route.handler);
		}
		if (route.auth === 'admin') {
			router[route.method](route.path, Auth.onlyAdmin, route.handler);
		}
		router[route.method](route.path, route.handler);
	});
	if (app) app.use('/', router);

	return {};
}

module.exports = {
	controllers: null,
	hash: {},
	init: function () {
		var hash = this.hash;
		this.controllers = glob.sync(config.root + '/app/controllers/*.js').map(require);

		this.controllers.forEach(function (controller) {
			controller.routes.forEach(function (route) {
				if (!hash[route.method]) hash[route.method] = {};
				if (!hash[route.method][route.path]) hash[route.method][route.path] = route.handler;
			});
		});
	},
	initExpress: function (app) {
		this.controllers.forEach(function (controller) {
			RoutesHelper(app, controller);
		});
	},
	request: function (method, path, query) {
		var hash = this.hash;
		return new Promise(function (resolve, reject) {
			hash[method][path]({body: query}, {
				json: resolve
			}, reject);
		});
	}
};
