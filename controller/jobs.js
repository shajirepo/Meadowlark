/**
 * Created by Shaji on 25/11/2014.
 */

var jobs = require('../model/job');
var jobsStatus = require('./jobsStatus');
var packages = require('./packages');


exports.createJobs = function(req,res){
    jobs.create(req,res);
}

exports.featuredJobs =  function (req, res, next) {
   //jobs.create(req,res);
    packages.createPackages(req,res, next);
    jobs.find({statusId:2}).limit(4).exec(function(err, jobs) {
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

