var navigation = require('mongoose').model('Navigation');
var data = require('../modules/data.js');
var jobs = require('./jobs');

//res.render('home', {
//    menuData: data.menuItems,
//    navData:navigationItems.navItems,
//    featuredJobsData:jobs.jobItems});

exports.index =  function(req, res, next) {
    navigation.find({ }, function (err, navdata) {
        if (err) return next(err);

        res.render('home', {
            menuData: data.menuItems,
            navData: navdata,
            featuredJobsData:jobs.featuredJobs
        });
    });
}

exports.about =  function (req, res) {

    var randomFortune = data.fortunes[Math.floor(Math.random() * data.fortunes.length)];
    res.render('about', {fortune: randomFortune, currentSession: req.session});

}



