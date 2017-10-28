
var ModelDispatcher = require('../dispatchers/models');
var Visit = ModelDispatcher.model('Visit');

module.exports = {
	base: '/api',
	routes: [
		{
			method: 'post',
			path: '/visit',
			handler: function (req, res, next) {
				var visit = new Visit({
					message: req.body.message
				});
				visit.save(function (err) {
					if (err) return next(err);
					res.json({success: true});
				});
			}
		}
	]
};
