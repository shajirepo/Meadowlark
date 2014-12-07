/**
 * Created by Shaji on 25/11/2014.
 */

var jobStatus = require('../model/jobStatus');

exports.createJobStatus = function(req,res, next){
    jobStatus.create(req,res);
    console.dir('JOBSSTATUS: ');
    next();
}


