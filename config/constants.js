var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    modelsDir: rootPath + '/models',
    viewsDir: rootPath + '/views',
    assetsDir: rootPath + '/public',
    secret:'krishnatimilsina'
};


