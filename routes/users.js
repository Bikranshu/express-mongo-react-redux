var express = require('express');
var router = express.Router();
var User = require('../controllers/UserController');
var isAuthenticated = require('../middlewares/authentication');

/*  "/api/users"
 *    GET: finds all users
 *    POST: creates a new user
 */
router.route('/users')

    /**
     * Creates a new user
     *
     * HTTP POST http://localhost:3000/api/users
     * @return list of users in JSON format
     */
    .post(function (req, res) {
        User.store(req, res);
    })

    /**
     * find all the users
     *
     * HTTP GET http://localhost:3000/api/users
     * @return list of users in JSON format
     */
    .get(isAuthenticated, function (req, res) {
       User.findAll(req, res);
    });


/*  "/api/users/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */
router.route('/users/:id')

    /**
     * Find the user with that id
     *
     * HTTP GET http://localhost:3000/api/users/:id
     * @return list of users in JSON format
     */
    .get(isAuthenticated, function (req, res) {
        User.findById(req, res);
    })

    /**
     * Update the user with that id
     *
     * HTTP PUT http://localhost:3000/api/users/:id
     * @return list of users in JSON format
     */
    .put(isAuthenticated, function (req, res) {
       User.update(req, res);
    })

    /**
     * Delete the user with that id
     *
     * HTTP DELETE http://localhost:3000/api/users/:id
     * @return list of users in JSON format
     */
    .delete(isAuthenticated, function (req, res) {
       User.delete(req, res);
    });

module.exports = router;
