var express = require('express');

var Item = require('../domain/model/item');
var Choice = require('../domain/model/choice');
var Reply = require('../domain/model/reply');
var Vote = require('../domain/model/vote');

var router = express.Router();

// GET /items?category={category}
router.get('/', function(req, res) { });

// POST /items
router.post('/', function (req, res) { });

// GET /items/{id}
router.get('/:id', function (req, res) { });

// DELETE /items/{id}
router.delete('/:id', function (req, res) { });

// GET /items/{id}/choices
router.get('/:id/choices', function (req, res) { });

// POST /items/{id}/choices
router.post('/:id/choices', function (req, res) { });

// POST /items/{id}/vote
router.post('/:id/vote', function (req, res) { });

// GET /items/{id}/replies
router.get('/:id/replies', function (req, res) { });

// POST /items/{id}/replies
router.post('/:id/replies', function (req, res) { });


module.exports = router;
