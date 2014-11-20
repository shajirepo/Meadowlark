var data = require('../modules/data.js');
var properties = require('../modules/properties.js');
var navigationItems = require('../model/navigation');

module.exports = function(app) {

    // route to the default home page
    app.get('/', function (req, res) {

        var a = "true";
        properties.auth.isLoggedIn = (a === req.query['loggedIn']);

        //navigationItems.create();
        res.render('home',{
            menuData: data.menuItems,
            loggedIn:properties.auth.isLoggedIn,
            navData: data.navItems
        });
    });

    // route to /about page
    app.get('/about', function (req, res) {

        var randomFortune = data.fortunes[Math.floor(Math.random() * data.fortunes.length)];
        res.render('about', {fortune: randomFortune, loggedIn:properties.auth.isLoggedIn});

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
