var express = require('express');
var hbs = require('express-hbs');

var app = express();

var routes = require('./routes/routes')(app);
var utils = require('./modules/utility');


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


utils.registerPartials(hbs,'');
utils.registerPartials(hbs,'/jobs');

hbs.registerPartial('loggedOutState', '{loggedInOutState}')

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

var db = require('./model/navigation.js');





app.listen(app.get('port'), function(){
    console.log('Express started on localhost:' + app.get('port'));

});



