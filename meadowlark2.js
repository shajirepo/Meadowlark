var express = require('express');
var hbs = require('express-hbs');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var utils = require('./modules/utility');
var data = require('./modules/data');

var app = express();

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(session({secret: '1234567890QWERTY'}));

require('./routes/routes')(app);


var hbsConfig = hbs.express3(
    {
        defaultLayout:__dirname + '/views/layouts/tes-header.hbs',
        layoutsDir : __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials'
    });

// setup handlebars view engine
app.engine('hbs', hbsConfig);
app.set('view engine','hbs');

// load all partials
utils.registerPartials(hbs,'');
utils.registerPartials(hbs,'/jobs');

utils.dbSetup();
//utils.serviceSetup();

app.listen(app.get('port'), function(){
    console.log('Express started on localhost:' + app.get('port'));

});

