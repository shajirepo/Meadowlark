
module.exports = function(app) {

    // route to the default home page
    app.get('/', function (req, res) {
        var menuItems =
        [
            {   href: '/jobs/', title: 'JOBS'},
            {   href: '/teaching-resources/', title: 'RESOURCES'},
            {   href: 'http://community.tes.co.uk', title: 'COMMUNITY'},
            {   href: 'http://news.tes.co.uk', title: 'SCHOOL NEWS' },
            {   href: 'http://news.tes.co.uk/further-education/', title: 'FE NEWS'}
        ];

        res.render('home',{menuData: menuItems});
    });

    // route to /about page
    app.get('/about', function (req, res) {

        var fortunes =
        [
            "Conquer your fears or they will conquer you.",
            "Rivers need springs.",
            "Do not fear what you don't know.",
            "You will have a pleasant surprise.",
            "Whenever possible, keep it simple.",
        ];

        var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        res.render('about', {fortune: randomFortune});

    });

    //custom 404 page
    app.use(function(req,res){
        res.status(404);
        res.render('404');
    });

//custom 500 page
    app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
    });

};
