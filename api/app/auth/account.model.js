
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
	username: String,
	password: String,
	role: {type: String, default: 'hr'},

	firstName: String,
	lastName: String,
	email: String,
	phone: String,

	accountType: String,
	company: String,
	position: String,
	inn: String,
	site: String,
	invite: String,
	autoInvite: String,

	money: Object,
	subscription: Object,
	plan: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
