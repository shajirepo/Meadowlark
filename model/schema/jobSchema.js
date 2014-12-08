/**
 * Created by Shaji on 25/11/2014.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var packageSchema = require('./packageSchema');
var jobStatusSchema = require('./jobStatusSchema');

var jobSchema = new Schema({
    jobId: Number,
    jobTitle: String,
    jobClosingDate: Date,
    jobAdvertisementDate: Date,
    jobAdvertisementClosingDate: Date,
    salary: String,
    packageId: [packageSchema],
    status:[jobStatusSchema],
    TSL_OrganisationId: Number,
    shortDescription: String,
    jobStartDate: Date,
    location: String,
    externalId: String
})

module.exports = jobSchema;

