const express = require('express');
const router = express.Router();
const _ = require('lodash');

const Item = require('../models/item');

const {ObjectID} = require('mongodb');

router.get('/:id', (req, res, next) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Item.findOne({
    _id: id
  }).then(item => {
    res.send(item);
  })
});

router.post('/new', (req, res, next) => {
  let item = new Item({
    ItemType: 'question',
    subject: req.body.subject,
    text: req.body.text
  });

  item.save()
    .then( doc => {
      res.send(doc);
    }).catch(e => {
      res.status(400).send();
    });
})

router.patch('/:id', (req, res, next) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['subject', 'text'])

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Item.findOneAndUpdate({
    _id: id,
  }, {$set: body}, {new: true})
  .then(item => {
    if(!item) {
      return res.status(404).send();
    }
    res.send(item)
  })
  .catch(e => {
    res.status(400).send();
  })
})

module.exports = router;