var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  console.log('user ' + req.body.email + ' is calling login');
});


module.exports = router;
