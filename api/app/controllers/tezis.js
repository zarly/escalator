
var ModelDispatcher = require('../dispatchers/models');
var Tezis = ModelDispatcher.model('Tezis');

module.exports = {
	base: '/api',
	routes: [
		{
			method: 'get',
			path: '/tezis',
			handler: function (req, res, next) {
				Tezis
					.find({})
					.sort({created_at: -1})
					.limit(20)
					.exec(function (err, records) {
						if (err) return next(err);
						records = records.map(function (rec) {
							return {
								id: rec._id,
								title: rec.title,
								description: rec.description,
								created_at: rec.created_at
							};
						});
						res.json({records: records});
					});
			}
		},
		{
			method: 'post',
			path: '/tezis',
			handler: function (req, res, next) {
				let data = req.body;
				let tezis = new Tezis({
					author: 'me',
					title: data.title,
					description: data.description,
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
