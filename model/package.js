/**
 * Created by shaji on 06/12/14.
 */

var mongoose = require('mongoose');
var packageSchema = require('./schema/packageSchema');

var package = mongoose.model('package', packageSchema);
module.exports = package;


module.exports.create = function ( req, res ) {

    package.remove({});

    new package({
        PackageId: 167,
        PackageName: 'Jobs - bronze',
        DateCreated: '2011-11-17T11:10',
        DateCreated: '2011-11-17T11:10',
        Status: 2,
        priority: 3
    }).save();

    new package({
        PackageId: 168,
        PackageName: 'Jobs - silver',
        DateCreated: '2011-11-17T11:10',
        DateCreated: '2011-11-17T11:10',
        Status: 1,
        priority: 2
    }).save();

    new package({
        PackageId: 172,
        PackageName: 'Jobs - gold',
        DateCreated: '2011-11-17T11:10',
        DateCreated: '2011-11-17T11:10',
        Status: 1,
        priority: 1
    }).save()

    new package({
        PackageId: 174,
        PackageName: 'Jobs - starter',
        DateCreated: '2011-11-17T11:10',
        DateCreated: '2011-11-17T11:10',
        Status: 2,
        priority: 4
    }).save()


}


