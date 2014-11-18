/**
 * Created by admin on 17/11/2014.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var navigationSchema = new Schema({
    href: String,
    title: String
})

var Navigation = mongoose.model('Navigation', navigationSchema);
module.exports = Navigation;

//Navigation.find(function(err, navigations) {
//    if (navigations.length) return;
//    new Navigation({
//        href: '/nursery-teaching-jobs/',
//        title: 'NURSERY'
//    }).save();
//
//    new Navigation({
//        href: '/primary-teaching-jobs/',
//        title: 'PRIMARY'
//    }).save();
//
//    new Navigation({
//        href: '/middle-teaching-jobs/',
//        title: 'MIDDLE'
//    }).save();
//
//    new Navigation({
//        href: '/secondary-teaching-jobs/',
//        title: 'SECONDARY'
//    }).save();
//});


// Find all movies.
Navigation.find(function(err, navigation) {
    if (err) return console.error(err);
    console.dir(navigation);
});

// Find a single movie by name.
Navigation.findOne({ title: 'NURSERY' }, function(err, nursery) {
    if (err) return console.error(err);
    console.dir(nursery);
});

//// Find all movies that have a credit cookie.
//Navigation.find({ hasCreditCookie: true }, function(err, movies) {
//    if (err) return console.error(err);
//    console.dir(movies);
//});
