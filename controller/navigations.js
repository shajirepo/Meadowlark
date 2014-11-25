var navigation = require('mongoose').model('Navigation');

exports.index =  function(req, res, next) {
    navigation.find({ }, function (err, navdata) {
        if (err) return next(err);
        return navdata;
    });
}