
var expect = require('expect');
var ModelDispatcher = require('../../app/dispatchers/models');
var RouteDispatcher = require('../../app/dispatchers/routes');

describe('Route /feedback', function () {
	this.timeout(5000);

	beforeEach(function () {
		ModelDispatcher.init();
		RouteDispatcher.init();
	});

	it('request', function () {
		return RouteDispatcher.request('post', '/feedback', {message: 'Hello'})
			.then(function (json) {
				console.log('success');
				expect(json).toExist();
				expect(json.success).toEqual(true);
			})
			.catch(function (err) {
				console.log('error');
				throw err;
			});
	});
});
