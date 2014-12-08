/**
 * Created by shaji on 06/12/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var packageSchema = new Schema({
    PackageId: Number,
    PackageName: String,
    DateCreated: Date,
    DateCreated: Date,
    Status: Number,
    priority: Number
});

module.exports = packageSchema;




