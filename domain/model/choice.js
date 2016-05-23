var Sequelize = require('sequelize');
var connection = require('../../config/connection');

var choice = connection.define('choice', {

    content : Sequelize.STRING
});

module.exports = choice;
