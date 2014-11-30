var navigations = require('../model/navigation');
var jobs = require('./jobs')
var data = require('../modules/data')


exports.navData =  function getNavData (req, res, next) {
    navigations.find({},function(err, navItems) {
        if (err) return next(err);
        console.dir('NAV: ' + navItems);
        req.navAll = navItems;
        next();

    });
}

exports.menuData = function(req,res,next) {
    req.menuItems = data.menuItems;
    next();
}

exports.index =  function (req, res) {
    res.render('home', {
        menuData: req.menuItems,
        navData:req.navAll,
        featuredJobsData:req.featuredJobs,
        currentSession: req.session
    });
}

exports.about =  function (req, res) {
    var randomFortune = data.fortunes[Math.floor(Math.random() * data.fortunes.length)];

    res.render('about', {
        fortune: randomFortune,
        menuData: req.menuItems,
        navData: req.navAll,
        featuredJobsData: req.featuredJobs,
        currentSession: req.session
    });
}



