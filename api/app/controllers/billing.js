
var ModelDispatcher = require('../dispatchers/models');
var Payment = ModelDispatcher.model('Payment');

module.exports = {
	base: '/api',
	routes: [
		{
			method: 'post',
			path: '/billing/yandex_payment_callback',
			handler: function (req, res, next) {
				var payment = new Payment({
					type: 'yandex_payment_callback',
					callback: req.body
				});
				payment.save(function (err) {
					if (err) return next(err);
					res.json({success: true});
				});
			}
		}
	]
};
