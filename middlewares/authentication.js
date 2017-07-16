var HttpStatus = require('http-status-codes');
var jwtToken = require('../utils/jwtToken');

/**
 * Route authentication middleware to verify a token
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 *
 */
module.exports = function (req, res, next) {
    if (req.headers.authorization) {
        var token = null;
        var authorization = req.headers.authorization.split(" ");
        if (authorization.length === 2) {
            var key = authorization[0];
            var val = authorization[1];

            if (/^Bearer$/i.test(key)) {
                token = val.replace(/"/g, "");
                // decode token
                if (token) {
                    // verifies secret and checks exp
                    jwtToken.verifyToken(token, function (err, decoded) {
                        if (err) {
                            return res.json({success: false, message: 'You are not authenticated!'});
                        } else {
                            // if everything is good, save to request for use in other routes
                            req.decoded = decoded;
                            next();
                        }
                    });
                }
            }
        } else {
            // if there is no token
            // return an error
            res.status(HttpStatus.UNAUTHORIZED).send('You are not authorized to perform this operation!');

        }
    } else {
        // if there is no token
        // return an error
        res.status(HttpStatus.UNAUTHORIZED).send('You are not authorized to perform this operation!');

    }
};