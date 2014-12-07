/**
 * Created by shaji on 06/12/14.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobStatusSchema = new Schema({
    statusId:Number,
    statusName:String
})

var JobStatus = mongoose.model('JobStatus', jobStatusSchema);
module.exports = JobStatus;
exports.jobStatusSchema = jobStatusSchema;

module.exports.create = function ( req, res ) {

    JobStatus.remove({});

    new JobStatus({
        statusId: 0,
        statusName: 'Awaiting'
    }).save();

    new JobStatus({
        statusId: 1,
        statusName: 'Hold'
    }).save();

    new JobStatus({
        statusId: 2,
        statusName: 'Published'
    }).save()
}


