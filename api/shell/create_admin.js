#!/usr/bin/env node

var argv = require('yargs')
	.option('username', {alias: 'u'})
	.option('password', {alias: 'p'})
	.argv;
var ModelDispatcher = require('../app/dispatchers/models');
var Account = require('../app/auth/account.model');

ModelDispatcher.init()
	.then(function () {
		var account = new Account({
			username : argv.username,
			role: 'admin'
		});

		Account.register(account, argv.password, function(err, account) {
			if (err && err.name === 'UserExistsError') {
				console.log('User already exists');
				process.exit(1);
			}
			else if (!err && account) {
				console.log('User created');
				process.exit(0);
			}
			else {
				console.log(err);
				console.log(account);
				console.log('Some bullshit happened');
				process.exit(1);
			}
		});
	})
	.catch(function (error) {
		console.error('Unexpected error:', error);
		process.exit(1);
	});
