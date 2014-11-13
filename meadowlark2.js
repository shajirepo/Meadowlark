var express = require('express');
var hbs = require('express-hbs');
var fs = require('fs');

var app = express();

var routes = require('./routes/routes')(app);


var hbsConfig = hbs.express3(
    {
        defaultLayout:__dirname + '/views/layouts/tes-header.hbs',
        layoutsDir : __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    });

// setup handlebars view engine
app.engine('hbs', hbsConfig);
app.set('view engine','hbs');

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));


registerPartials(hbs.partialsDir);



//var formidable = require('formidable');
//
//app.get('/contest/vacation-photo', function(req,res){
//    var now = new Date();
//    res.render('contest/vacation-photo', {year: now.getFullYear(), month: now.getMonth()});
//});
//
//app.post('/contest/vacation-photo/:year/:month', function(req,res){
//    var form = new formidable.IncomingForm();
//    var now2 = new Date();
//    form.parse(req, function(err,fields, files){
//        if (err) return res.redirect(303,'/error');
//        console.log('received fields:');
//        console.log(fields);
//        console.log('received files:');
//        console.log(files);
//        console.log('render URL:');
//        console.log(now2.getFullYear() + ' --- ' + now2.getMonth());
//        res.redirect(303,'/thank-you');
//    })
//})


//register all partials
function registerPartials(partialsFolder) {

    // get all the partial filenames in the partials folder
    var filenames = fs.readdirSync(partialsFolder);

    // register each partial file and use the filename as the partial name
    filenames.forEach(function (filename) {
        var matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        var name = matches[1];
        var template = fs.readFileSync(partialsFolder + '/' + filename, 'utf8');
        hbs.registerPartial(name, template);
    });
}

app.listen(app.get('port'), function(){
    console.log('Express started on localhost:' + app.get('port'));

});



