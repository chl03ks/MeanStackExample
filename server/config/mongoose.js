mongoose = require('mongoose');

module.exports =function (config) {

    mongoose.connect(config.db);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection erorr...'));

    db.once('open', function () {
        console.log('Mean db opened');
    });

};
