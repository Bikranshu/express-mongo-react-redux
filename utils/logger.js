var fs = require('fs');
var winston = require('winston');
require('winston-daily-rotate-file');

var tsFormat = new Date().toISOString();
var logDir = process.env.LOGGING_DIR || 'logs';

// Create logs directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.DailyRotateFile)({
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            filename: logDir + '/-log.log',
            level: 'info'
        })
    ]
});