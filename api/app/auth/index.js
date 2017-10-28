
var passport = require('passport');
var Account = require('./account.model');
var LocalStrategy = require('passport-local').Strategy;
var router = require('./router');

module.exports = {
	init: async function init (app) {
		app.use(passport.initialize());
		app.use(passport.session());

		passport.use(new LocalStrategy(Account.authenticate()));
		passport.serializeUser(Account.serializeUser());
		passport.deserializeUser(Account.deserializeUser());

		app.use('/auth/', router);
	},
	onlyHR: function (req, res, next) {
		if (req.user && (req.user.role === 'hr' || req.user.role === 'admin')) {
			next();
		} else {
			res.json(401, {auth: false});
		}
	},
	onlyAdmin: function (req, res, next) {
		if (req.user && req.user.role === 'admin') {
			next();
		} else {
			res.json(401, {error: 'Permission denied'});
		}
	}
};
