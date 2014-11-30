/**
 * Created by Shaji on 25/11/2014.
 */

var jobs = require('../model/job');

exports.createJobs = function(req,res){
    jobs.create(req,res);
}


exports.featuredJobs =  function (req, res, next) {
   //jobs.create(req,res);
    jobs.find({},function(err, jobs) {
        if (err) return next(err);
        console.dir('JOBS; ' + jobs);
        req.featuredJobs =jobs;
        next();

    });
}


exports.jobOfWeek =  function (req, res, next) {
    // jobs.create(req,res);
    jobs.find(function(err, jobs) {
        if (err) return next(err);
        console.dir('JOBWEEK; ' + jobs);
        req.jobOfWeek =jobs;
        next();

    });
}

