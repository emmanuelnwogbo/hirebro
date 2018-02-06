const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/', (req, res, next) => {
  res.send('hello item')
});

module.exports = router;