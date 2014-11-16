/**
 * Created by shaji on 16/11/14.
 */

var isLoggedInvalue;

    module.exports ={
         menuItems :
            [
                {   href: '/jobs/', title: 'JOBS'},
                {   href: '/teaching-resources/', title: 'RESOURCES'},
                {   href: 'http://community.tes.co.uk', title: 'COMMUNITY'},
                {   href: 'http://news.tes.co.uk', title: 'SCHOOL NEWS' },
                {   href: 'http://news.tes.co.uk/further-education/', title: 'FE NEWS'}
            ],



        setLoggedIn : function(loggedIn){
            isLoggedInvalue = loggedIn;
        },

        getLoggedIn: function(){
            return isLoggedInvalue;
        }

    };
