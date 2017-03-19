var express = require('express');
var router = express.Router();
var Auth = require('../controllers/AuthController');

router.route('/auth/login')

    /**
     * Authenticate  user
     *
     * HTTP POST http://localhost:3000/api/auth/login
     * @return list of users in JSON format
     */
    .post(function (req, res) {
        Auth.authenticate(req, res);
    });

module.exports = router;
