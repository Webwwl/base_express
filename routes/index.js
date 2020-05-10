const express = require('express');
const router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile(path.resolve(__dirname, '../public/index.html'))
});

module.exports = router;
