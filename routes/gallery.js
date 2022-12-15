const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function(req, res, next) {
  const img2 = [
    {
      img: 'images/artur-nakhodkin-warhammer-40k-7.jpg',
      description: "Dark Angels fighting orks"
    },
    {
      img: "images/gallery-artic-world.jpg",
      description: "Dark Angels fighting on an artic planet"
    },
    {
      img: "images/gallery-chapter-fighting.jpg",
      description: "Dark Angels fighting world eaters"
    },
    {
      img: "images/gallery-heresy.webp",
      description: "Dark Angels cleansing heresy"
    }
  ]

  res.render('gallery', {img2});
});

module.exports = router;