
var ModelDispatcher = require('../dispatchers/models');
var Feedback = ModelDispatcher.model('Feedback');

module.exports = {
	base: '/api',
	routes: [
		{
			method: 'post',
			path: '/feedback',
			handler: function (req, res, next) {
				var feedback = new Feedback({
					message: req.body.message,
					username: req.user && req.user.username
				});
				feedback.save(function (err) {
					if (err) return next(err);
					res.json({success: true});
				});
			}
		}
	]
};
