/**
 * Created by admin on 17/11/2014.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var navigationSchema = new Schema({
    href: String,
    title: String
})

module.exports = navigationSchema;
