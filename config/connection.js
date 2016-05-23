var Sequelize = require('sequelize');
var connection = new Sequelize('mysql://user:password@localhost:3306/nq');

module.exports = connection;
