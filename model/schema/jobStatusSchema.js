/**
 * Created by shaji on 06/12/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobStatusSchema = new Schema({
    statusId:Number,
    statusName:String
})

module.exports = jobStatusSchema;


