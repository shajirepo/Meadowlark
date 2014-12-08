/**
 * Created by admin on 17/11/2014.
 */

var mongoose = require('mongoose');
var navigationSchema = require('./schema/navigationSchema');

var Navigation = mongoose.model('Navigation', navigationSchema);
module.exports = Navigation;

/** Add navigation items ***/
//module.exports.create = function ( req, res ) {
//       new Navigation({
//            href: '/nursery-teaching-jobs/',
//            title: 'NURSERY'
//        }).save();
//
//        new Navigation({
//            href: '/primary-teaching-jobs/',
//            title: 'PRIMARY'
//        }).save();
//
//        new Navigation({
//            href: '/middle-teaching-jobs/',
//            title: 'MIDDLE'
//        }).save();
//
//        new Navigation({
//            href: '/secondary-teaching-jobs/',
//            title: 'SECONDARY'
//
//        }).save();
//        new Navigation({
//            href: '/independent-pre-prep-jobs/',
//            title: 'INDEPENDENT PRE-PREP'
//        }).save();
//
//        new Navigation({
//            href: '/independent-senior-teaching-jobs/',
//            title: 'INDEPENDENT SENIOR'
//        }).save();
//
//        new Navigation({
//            href: '/special-education-teaching-jobs/',
//            title: 'SPECIAL EDUCATION'
//        }).save();
//
//        new Navigation({
//            href: '/further-education-teaching-and-lecturing-jobs/',
//            title: 'FURTHER EDUCATION JOBS'
//
//        }).save();
//};


// Find all movies.
Navigation.find(function(err, navigation) {
    if (err) return console.error(err);
    module.exports.navItems = navigation;
    //console.dir(navigation);
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
