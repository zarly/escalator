
var express = require('express');
var passport = require('passport');
var Account = require('./account.model');
var router = express.Router();
var inviteCodes = {
	earlybird: {},
	forfriends: {},
	betaaccess: {},

	fromgoogle: {},
	fromyandex: {},
	fromyoutube: {},
	fromhabr: {}
};

router.post('/register', function(req, res, next) {
	var invite = (req.body.invite || '').toLowerCase().replace(/[ \-_\t\n\.]/g, '');
	if (!invite) {
		return res.json({error: {message: 'В настоящее время доступна регистрация только по приглашениям'}});
	}
	else if (!inviteCodes[invite]) {
		return res.json({error: {message: 'Неверный код приглашения'}});
	}

	var account = new Account({
		username : req.body.username,

		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		phone: req.body.phone,

		accountType: req.body.accountType,
		company: req.body.company,
		position: req.body.position,
		inn: req.body.inn,
		site: req.body.site,
		invite: req.body.invite,
		autoInvite: req.body.autoInvite
	});
	Account.register(account, req.body.password, function(err, account) {
		if (err && err.name === 'UserExistsError') return res.status(409).json({error: err.message});
		if (err) return next(err);

		passport.authenticate('local')(req, res, function () {
			req.session.save(function (err) {
				if (err) return next(err);

				res.json({account: account});
			});
		});
	});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
	res.json({success: true});
});

router.get('/logout', function(req, res) {
	req.logout();
	res.json({success: true});
});

router.get('/account', function(req, res) {
	var user = req.user;
	if (!user) return res.json(401, {auth: false});

	res.json({
		user: req.user
	});
});

module.exports = router;
