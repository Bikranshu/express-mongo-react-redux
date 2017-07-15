var jwt = require('jsonwebtoken');
// Verifies token on a request
exports.verifyToken = function(token, callback) {
    return jwt.verify(
        token, // The token to be verified
        process.env.TOKEN_SECRET_KEY, // Same token we used to sign
        {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
        callback //Pass errors or decoded token to callback
    );
};