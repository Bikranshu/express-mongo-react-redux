var config = {
    development: {
        host: '127.0.0.1',
        port: 27017,
        database: express_react
    },
    test: {
        host: '127.0.0.1',
        port: 27017,
        database: express_react
    },
    production: {
        host: '127.0.0.1',
        port: 27017,
        database: express_react
    }
};
module.exports = function (mode) {
    return config[mode || 'development'] || config.development;
};

