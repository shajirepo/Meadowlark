/**
 * Created by Shaji on 25/11/2014.
 */

var jobs = require('../model/job');



exports.featuredJobs =  function featuredJobs (req, res, next) {
    jobs.find({},function(err, jobs) {
        if (err) return next(err);
        console.dir('JOBS; ' + jobs);
        req.featuredJobs =jobs;
        next();

    });
}


