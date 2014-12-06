/**
 * Created by Shaji on 25/11/2014.
 */
var packages = require('../model/package');

exports.createPackages = function(req,res, next){
    packages.create(req,res, next);
    req.packageAdded = true;
    next();
}

