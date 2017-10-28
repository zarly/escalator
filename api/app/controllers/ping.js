
module.exports = {
	base: '/api',
	routes: [
		{
			method: 'get',
			path: '/ping',
			handler: function (req, res, next) {
				res.end('pong');
				next();
			}
		}
	]
};
