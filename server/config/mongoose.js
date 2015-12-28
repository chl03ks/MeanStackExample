mongoose = require('mongoose');

module.exports =function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection erorr...'));
    db.once('open', function () {
        console.log('Mean db opened');
    });
};

var userSchema = mongoose.Schema({
    firstName: String,
    lastName:  String,
    username:  String,
});

var User = mongoose.model('User', userSchema);

User.find({}).exec(function (err, collection) {
    if(collection.length === 0){
        User.create({firstName: 'Daniel', lastName:'Garcia', username: 'gvsdan'});
        User.create({firstName: 'John', lastName:'Better', username: 'betterjohn'});
        User.create({firstName: 'Wall', lastName:'Goin', username: 'yougoit'});
    }
});
