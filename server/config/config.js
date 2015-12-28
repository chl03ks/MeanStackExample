var path = require('path');
var rootPath =  path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/meanapp',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://admin:meanapp@ds047911.mongolab.com:47911/meanapp',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};
