/**
 * Created by shaji on 16/11/14.
 */
var navigationItems = require('../model/navigation');
var jobs = require('../model/job');

    module.exports = {
        menuItems: [
            {   href: '/jobs/', title: 'JOBS'},
            {   href: '/teaching-resources/', title: 'RESOURCES'},
            {   href: 'http://community.tes.co.uk', title: 'COMMUNITY'},
            {   href: 'http://news.tes.co.uk', title: 'SCHOOL NEWS' },
            {   href: 'http://news.tes.co.uk/further-education/', title: 'FE NEWS'}
        ],

        navItems: [
            {   href: '/nursery-teaching-jobs/', title: 'NURSERY2'},
            {   href: '/primary-teaching-jobs/', title: 'PRIMARY'},
            {   href: '/middle-teaching-jobs/', title: 'MIDDLE'},
            {   href: '/secondary-teaching-jobs/', title: 'SECONDARY' },
            {   href: '/independent-pre-prep-jobs/', title: 'INDEPENDENT PRE-PREP'},
            {   href: '/independent-preparatory-teaching-jobs/', title: 'INDEPENDENT PREP'},
            {   href: '/independent-senior-teaching-jobs/', title: 'INDEPENDENT SENIOR'},
            {   href: '/special-education-teaching-jobs/', title: 'SPECIAL EDUCATION'},
            {   href: '/further-education-teaching-and-lecturing-jobs/', title: 'FURTHER EDUCATION'},
            {   href: '/higher-education-teaching-and-lecturing-jobs/', title: 'HIGHER EDUCATION'},
            {   href: '/other-teaching-and-lecturing-jobs/', title: 'OTHER WORKPLACES'}
        ],

        fortunes: [
            "Conquer your fears or they will conquer you.",
            "Rivers need springs.",
            "Do not fear what you don't know.",
            "You will have a pleasant surprise.",
            "Whenever possible, keep it simple.",
        ]

    }

    module.exports.jobshome = {
        menuItems2: [
            {   href: '/jobs/', title: 'JOBS2'},
            {   href: '/teaching-resources/', title: 'RESOURCES'},
            {   href: 'http://community.tes.co.uk', title: 'COMMUNITY'},
            {   href: 'http://news.tes.co.uk', title: 'SCHOOL NEWS' },
            {   href: 'http://news.tes.co.uk/further-education/', title: 'FE NEWS'}
        ],
        navItems2: navigationItems.navItems

       // jobItems:jobs.jobItems
    }