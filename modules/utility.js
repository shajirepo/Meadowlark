/**
 * Created by admin on 13/11/2014.
 */

var fs = require('fs');

//register all partials
exports.registerPartials = function(hbs, subDir) {

    // get all the partial filenames in the partials folder
    var filenames = fs.readdirSync(hbs.partialsDir + subDir);

    // register each partial file and use the filename as the partial name
    filenames.forEach(function (filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var template = fs.readFileSync(hbs.partialsDir + subDir + '/' + filename, 'utf8');
        hbs.registerPartial(name, template);
    });
}

