/**
 * Created by admin on 18/11/2014.
 */

var Navigation = require('../model/navigation.js');

// query db for all todo items
exports.index = function ( req, res ){
    Navigation.find( function ( err, navigation, count ){
        res.render( '/views/partials/jobs/', {
            navData : navigation
        });
    });
};
