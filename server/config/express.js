var express = require('express');
var logger = require('morgan');
var stylus = require('stylus');
var bodyParser  = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

module.exports = function( app, config ){

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', config.rootPath + '/server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(stylus.middleware(
    {
        src: config.rootPath + '/public',
        compile: compile
    }
));

app.use(express.static(config.rootPath + '/public'));

};
