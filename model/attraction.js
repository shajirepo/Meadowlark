/**
 * Created by Shaji on 25/11/2014.
 */

var mongoose = require('mongoose');
var attractionSchema = require('./schema/attractionSchema');

var Attraction = mongoose.model('Attraction', attractionSchema);

//    new Attraction({
//        location:{
//            lat: 45.516011,
//            lng: -122.682062
//        },
//        name: 'Portland Art Museum',
//        description: 'Founded in 1892, the Portland Art Museum\'s colleciton of native art is not to be missed. If modern art is more to your liking, there are six stories of modern art for your enjoyment.',
//        history: {
//            event: 'qqqqq',
//            notes: 'qweqweqweqweqwew',
//            email: 'test@meadowlarktravel.com',
//            date: '2014-12-17'
//        },
//        updatedId:'1111111',
//        approved: true
//    }).save();

module.exports = Attraction;

