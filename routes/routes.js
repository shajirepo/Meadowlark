var data = require('../modules/data.js');
var properties = require('../modules/properties.js');

module.exports = function(app) {

    // route to the default home page
    app.get('/', function (req, res) {

        var a = "true";
        //auth = new properties.auth();
        properties.isLoggedIn = (a === req.query['loggedIn']);
        //data.setLoggedIn(loggedInValue);


        res.render('home',{menuData: data.menuItems, loggedIn:properties.isLoggedIn});
    });

    // route to /about page
    app.get('/about', function (req, res) {


        var fortunes =
        [
            "Conquer your fears or they will conquer you.",
            "Rivers need springs.",
            "Do not fear what you don't know.",
            "You will have a pleasant surprise.",
            "Whenever possible, keep it simple.",
        ];

        var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        res.render('about', {fortune: randomFortune, loggedIn:properties.isLoggedIn});

    });

    //custom 404 page
    app.use(function(req,res){
        res.status(404);
        res.render('404', {loggedIn:properties.isLoggedIn});
    });

    //custom 500 page
    app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
    });

};
