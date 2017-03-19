var express = require('express');
var router = express.Router();

router.route('/auth/login')

    /**
     * Authenticate  user
     *
     * HTTP POST http://localhost:3000/api/auth/login
     * @return list of users in JSON format
     */
    .post(function (req, res) {
        res.json({message: 'hooray! welcome to our api!'});
    });

module.exports = router;
