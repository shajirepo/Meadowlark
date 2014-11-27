var properties = require('../modules/properties.js');
var utility = require('../modules/utility.js');
var jobs = require('../model/job');
var navController = require('../controller/navigations');
var jobController = require('../controller/jobs');

module.exports = function(app) {

    // route to the default home page
    app.get('/',utility.isLoggedIn, navController.index);
    app.get('/',utility.isLoggedIn, jobController.featuredJobs);

//    app.get('/*', function(req, res, next){
//        res.setHeader('Last-Modified', (new Date()).toUTCString());
//        next();
//    });

    // route to /about page
    app.get('/about',utility.isLoggedIn, navController.about);

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
