var express = require('express');
var app = express();

// Initialize express
require('./config/express')(app);

// Initialize routes
require('./config/routes')(app);

// Initialize database
require('./config/database');

var HttpStatus = require('http-status-codes');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = HttpStatus.UNAUTHORIZED;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
    res.render('error');
});

module.exports = app;
