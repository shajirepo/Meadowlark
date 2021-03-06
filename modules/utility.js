/**
 * Created by admin on 13/11/2014.
 */

var fs = require('fs');

//register all partials
exports.registerPartials = function(hbs, subDir) {

    // get all the partial filenames in the partials folder
    var filenames = fs.readdirSync(hbs.partialsDir + subDir);

    // register each partial file and use the filename as the partial name
    filenames.forEach(function (filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var template = fs.readFileSync(hbs.partialsDir + subDir + '/' + filename, 'utf8');
        hbs.registerPartial(name, template);
    });
}

//setup db connection
exports.dbSetup = function(){

    var mongoose = require('mongoose');
    var config = require('../config.js');

    var opts={
        server: {
            socketOptions: { keepAlive: 1 }
        }
    };

    mongoose.connect(config.mongo.development.connectionString, opts);

}

exports.serviceSetup = function(){
    var mongoose = require('mongoose');
    var config = require('../config.js');

    var opts={
        server: {
            socketOptions: { keepAlive: 1 }
        }
    };

    mongoose.connect(config.mongoService.development.connectionString, opts);

}

//gets the logged in status
exports.isLoggedIn =function(req, res, next) {

    if(req.query['loggedIn']) {
        var a = "true";
        req.session.isLoggedInValue = (a === req.query['loggedIn']);
    }
    next();
}







