var express = require('express');
var router = express.Router();
const path = require('path')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res) {
  res.sendfile(path.resolve(__dirname, '../public/login.html'));
});

module.exports = router;
