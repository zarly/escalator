
var express = require('express');
var config = require('./config/config');
var ModelDispatcher = require('./app/dispatchers/models');

ModelDispatcher.init();

var app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, function () {
	console.log('Express server listening on port ' + config.port);
});
