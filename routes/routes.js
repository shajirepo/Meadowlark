var data = require('../modules/data.js');
var properties = require('../modules/properties.js');
var navigationItems = require('../model/navigation');
var utility = require('../modules/utility.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var sess;
module.exports = function(app) {

    // route to the default home page
    app.get('/',utility.isLoggedIn, function (req, res) {

        res.render('home', { menuData: data.menuItems, navData: data.navItems });
    });

    // route to /about page
    app.get('/about',utility.isLoggedIn, function (req, res) {

        var randomFortune = data.fortunes[Math.floor(Math.random() * data.fortunes.length)];
        res.render('about', {fortune: randomFortune, currentSession:req.session});

    });

    //custom 404 page
    app.use(function(req,res){
        res.status(404);
        res.render('404', {loggedIn:properties.auth.isLoggedIn});
    });

    //custom 500 page
    app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
    });

};
