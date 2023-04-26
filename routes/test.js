var express = require('express');
var router = express.Router();
const path = require('path')

/* GET users listing. */
router.get('/hello', function (req, res, next) {
  res.send('hello world!!');
});

module.exports = router;
