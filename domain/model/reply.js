var Sequelize = require('sequelize');
var connection = require('../../config/connection');

var reply = connection.define('reply', {

    content : Sequelize.STRING
});

module.exports = reply;
