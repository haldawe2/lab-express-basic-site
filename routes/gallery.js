const express = require('express');
const router = express.Router();
const img = require('../data/galleryData.js')

router.get('/', function(req, res, next) {
  res.render('gallery', {img});
});

module.exports = router;