var Sequelize = require('sequelize');
var connection = require('../../config/connection');

var item = connection.define('item', {

    title : Sequelize.STRING,
    content : Sequelize.STRING,
    category : Sequelize.STRING,
});

module.exports = item;
