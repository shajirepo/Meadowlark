var properties = require('../modules/properties.js');
var utility = require('../modules/utility.js');
var jobs = require('../model/job');
var navController = require('../controller/navigationsController');
var Attraction = require('../model/attraction');

var rest = require('connect-rest');

module.exports = function(app) {

    // route to the default home page
    app.get('/',utility.isLoggedIn, navController.index);

    // route to /about page
    app.get('/about',utility.isLoggedIn, navController.about);

    // API configuration
    var apiOptions = {
        context: '/api',
        domain: require('domain').create()
    };
    // link API into pipeline
    app.use(rest.rester(apiOptions));

    rest.get('/attractions', function(req, content, cb){
        Attraction.find({ approved: true }, function(err, attractions){
        if(err)
            return cb({ error: 'Internal error.' });
            console.log('Attractions:' + attractions);
            cb(null, attractions.map(function(a){
            return {
                name: a.name,
                description: a.description,
                location: a.location
            };
        })); });
    });
    rest.post('/attraction', function(req, content, cb){
        var a = new Attraction({
        name: req.body.name,
        description: req.body.description,
        location: { lat: req.body.lat, lng: req.body.lng },
        history: {
            event: 'created', email: req.body.email, date: new Date(),
        },
        approved: false, });
        a.save(function(err, a){
            if(err) return cb({ error: 'Unable to add attraction.' }); cb(null, { id: a._id });
        }); });
    rest.get('/attraction/:id', function(req, content, cb){ Attraction.findById(req.params.id, function(err, a){
        if(err) return cb({ error: 'Unable to retrieve attraction.' });
        cb(null, {
            name: attraction.name,
            description: attraction.description,
            location: attraction.location
        }); });
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
