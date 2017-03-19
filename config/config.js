var config = {
    development: {
        host: '127.0.0.1',
        port: 27017,
        database: expressReact
    },
    test: {
        host: '127.0.0.1',
        port: 27017,
        database: expressReact
    },
    production: {
        host: '127.0.0.1',
        port: 27017,
        database: expressReact
    }
};
module.exports = function (mode) {
    return config[mode || 'development'] || config.development;
};

