var express = require('express');

var Item = require('../domain/model/item');
var Choice = require('../domain/model/choice');
var Reply = require('../domain/model/reply');
var Vote = require('../domain/model/vote');

var router = express.Router();

// GET /items?category={category}
router.get('/', function(req, res) {

    var category = req.query.category;

    Item.findAll({

              where : { category : category },
              order : 'createdAt DESC'
        })
        .then(function (data) {

              res.status(200).json(data);
        })
        .catch(function (e) {

              res.sendStatus(503);
        });
});

// POST /items
router.post('/', function (req, res) {

  var title = req.body.title;
  var content = req.body.content;
  var category = req.body.category

  Item.create({

            title : title,
            content : content,
            category : category
      })
      .then(function (data) {

            res.status(201).json(data);
      })
      .catch(function (e) {

            res.sendStatus(503);
      });
});

// GET /items/{id}
router.get('/:id', function (req, res) {

    var id = req.params.id;

    Item.findById(id)
        .then(function (data) {

            res.status(200).json(data);
        })
        .catch(function (e) {

            res.sendStatus(503);
        });
});

// DELETE /items/{id}
router.delete('/:id', function (req, res) {

    var id = req.params.id;

    Item.destroy({

            where : { id : id }
        })
        .then (function () {

            res.sendStatus(200);
        })
        .catch(function (e) {

            res.sendStatus(503);
        });
});

// GET /items/{id}/choices
router.get('/:id/choices', function (req, res) {

    var id = req.params.id;

    Choice.findAll({

              where : { itemId : id }
          })
          .then(function (data) {

              res.status(200).json(data);
          })
          .catch(function (e) {

              res.sendStatus(503);
          });
});

// POST /items/{id}/choices
router.post('/:id/choices', function (req, res) {

  var id = req.params.id;
  var content = req.body.content;

  Choice.create({

            itemId : id,
            content : content
        })
        .then(function (data) {

            res.status(200).json(data);
        })
        .catch(function (e) {

            res.sendStatus(503);
        });
});

// POST /items/{id}/vote
router.post('/:id/vote', function (req, res) {

  var id = req.params.id;
  var choiceId = req.body.choiceId;

  Vote.create({

            itemId : id,
            choiceId : choiceId
      })
      .then(function (data) {

          res.status(200).json(data);
      })
      .catch(function (e) {

          res.sendStatus(503);
      });
});

// GET /items/{id}/replies
router.get('/:id/replies', function (req, res) {

    var id = req.params.id;

    Reply.findAll({

            where : { itemId : id }
         })
         .then(function (data) {

            res.status(200).json(data);
         })
         .catch(function (e) {

            res.sendStatus(503);
         });
});

// POST /items/{id}/replies
router.post('/:id/replies', function (req, res) {

  var id = req.params.id;
  var content = req.body.content;

  Reply.create({

          itemId : id,
          content : content
       })
       .then(function (data) {

          res.status(201).send(data);
       })
       .catch(function (e) {

          res.sendStatus(503);
       });
});


module.exports = router;
