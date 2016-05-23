var item = require('../model/item.js');

var choice = require('../model/choice.js');
var reply = require('../model/reply.js');
var vote = require('../model/vote.js');

item.hasMany(choice);
item.hasMany(reply);
item.hasMany(vote);

choice.hasMany(vote);

item.sync().then(function () {

    reply.sync();
    choice.sync().then(function () {

        vote.sync();
    });
});
