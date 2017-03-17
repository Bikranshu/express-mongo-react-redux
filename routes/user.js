var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  console.log('user ' + req.body.email + ' is calling signup');
});

router.post('/forgot', function(req, res, next) {
  console.log('user ' + req.body.email + ' is calling forgot');
});

module.exports = router;
