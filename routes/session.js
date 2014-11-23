/**
 * Created by admin on 23/11/2014.
 */
/*
 * Session Routes
 */

 module.exports = function(app) {
    app.dynamicHelpers({
        session: function (req, res) {
            return req.session;
        }
    });
}
