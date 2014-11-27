/**
 * Created by admin on 26/11/2014.
 */

var navigation       = require('../controller/navigations');
var utility = require('../modules/utility.js');

module.exports = function(app) {

    app.get('/', utility.isLoggedIn, navigation.index);

}





