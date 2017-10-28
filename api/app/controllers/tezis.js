
var ModelDispatcher = require('../dispatchers/models');
var Tezis = ModelDispatcher.model('Tezis');

module.exports = {
	base: '/api',
	routes: [
		{
			method: 'post',
			path: '/tezis',
			handler: function (req, res, next) {
				var tezis = new Tezis({
					author: 'me',
					meta: req.body
				});
				tezis.save(function (err) {
					if (err) return next(err);
					res.json({success: true});
				});
			}
		}
	]
};
