var navigations = require('../model/navigation');
var jobs = require('./jobs')
var data = require('../modules/data')


var allNavItems;
exports.navData =  function getNavData (req, res, next) {
    navigations.find({},function(err, navItems) {
        if (err) return next(err);
        console.dir('NAV: ' + navItems);
        allNavItems = navItems;
        module.exports.navData = allNavItems;
        next();

    });
}

exports.index =  function (req, res) {

    res.render('home', {
        navData:allNavItems,
        featuredJobsData:jobs.featuredJobs,
        currentSession: req.session
    });

}

exports.about =  function (req, res) {

    var randomFortune = data.fortunes[Math.floor(Math.random() * data.fortunes.length)];

    res.render('about', {
        fortune: randomFortune,
        navData: allNavItems,
        featuredJobsData: jobs.featuredJobs,
        currentSession: req.session
    });

}



