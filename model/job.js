/**
 * Created by Shaji on 25/11/2014.
 */

var mongoose = require('mongoose');
var jobSchema = require('./schema/jobSchema');

var Job = mongoose.model('Job', jobSchema);
module.exports = Job;

module.exports.create = function ( req, res ) {

   Job.remove({});

    new Job({
        jobId: '277826',
        jobTitle: 'Teacher Spanish',
        jobClosingDate: '2014-11-28 00:00:00',
        jobAdvertisementDate: '2014-11-19 00:00:00',
        jobAdvertisementClosingDate: '2014-11-28 23:59:00',
        salary: 'Group 2 L15 - L21 (£61,186 - £69,750)',
        packageId: [{
            PackageId: 168,
            PackageName: 'Jobs - silver',
            DateCreated: '2011-11-17T11:10',
            DateCreated: '2011-11-17T11:10',
            Status: 1,
            priority: 2
        }],
        status: [{
            statusId: 2,
            statusName: 'Published'
        }],
        TSL_OrganisationId: '1055170',
        shortDescription: 'As a key member of the British School of Chicagos teaching team',
        jobStartDate: ' ',
        location: 'China',
        externalId: '04C6H70021'
    }).save();

    new Job({ jobId: '277825',
        jobTitle:'Teacher Physics',
        jobClosingDate: ' 2014-11-28 00:00:00 ',
        jobAdvertisementDate: ' 2014-11-19 00:00:00 ',
        jobAdvertisementClosingDate: ' 2014-11-28 23:59:00 ',
        salary:'Group 1 L14 - L20 (£51,186 - £59,750)',
        packageId: [{
            PackageId: 168,
            PackageName: 'Jobs - silver',
            DateCreated: '2011-11-17T11:10',
            DateCreated: '2011-11-17T11:10',
            Status: 1,
            priority: 2
        }],
        status: [{
            statusId: 2,
            statusName: 'Published'
        }],
        TSL_OrganisationId: ' 1055170 ',
        shortDescription: ' As a key member of the British School of Chicagos teaching team',
        jobStartDate: ' ',
        location: 'Chicago',
        externalId: ' 04C6H70020 '
    }).save();

    new Job({ jobId: ' 277824 ',
        jobTitle:'Teacher PE',
        jobClosingDate: ' 2014-11-28 00:00:00 ',
        jobAdvertisementDate: ' 2014-11-19 00:00:00 ',
        jobAdvertisementClosingDate: ' 2014-11-28 23:59:00 ',
        salary:'£62,186 - £71,750)',
        packageId: [{
            PackageId: 167,
            PackageName: 'Jobs - bronze',
            DateCreated: '2011-11-17T11:10',
            DateCreated: '2011-11-17T11:10',
            Status: 1,
            priority: 2
        }],
        status: [{
            statusId: 2,
            statusName: 'Published'
        }],
        TSL_OrganisationId: ' 1055170 ',
        shortDescription: ' As a key member of the British School of Chicago ? s teaching team',
        jobStartDate: ' ',
        externalId: ' 04C6H70019 ',
        location: 'France',
    }).save();

     new Job({ JobId: ' 277823 ',
         jobTitle:'Teacher Music',
         sobClosingDate: ' 2014-11-28 00:00:00 ',
         jobAdvertisementDate: ' 2014-11-19 00:00:00 ',
         jobAdvertisementClosingDate: ' 2014-11-28 23:59:00 ',
         salary:'£41,186 - £49,750)',
         packageId:[{
             PackageId: 172,
             PackageName: 'Jobs - gold',
             DateCreated: '2011-11-17T11:10',
             DateCreated: '2011-11-17T11:10',
             Status: 1,
             priority: 2
         }],
         status: [{
             statusId: 2,
             statusName: 'Published'
         }],
         TSL_OrganisationId: '1055170',
         shortDescription: ' As a key member of the British School of Chicago ? s teaching team',
         jobStartDate: ' ',
         location: 'Germany',
         externalId: '04C6H70018 '
     }).save();

    new Job({ JobId: ' 277823 ',
        jobTitle:'Teacher of Mathematics',
        jobClosingDate: ' 2014-11-28 00:00:00 ',
        jobAdvertisementDate: ' 2014-11-19 00:00:00 ',
        jobAdvertisementClosingDate: ' 2014-11-28 23:59:00 ',
        salary:'Group 2 L17 - L23 (£81,186 - £89,750)',
        packageId: [{
            PackageId: 174,
            PackageName: 'Jobs - starter',
            DateCreated: '2011-11-17T11:10',
            DateCreated: '2011-11-17T11:10',
            Status: 1,
            priority: 2
        }],
        status:[{
            statusId: 1,
            statusName: 'Hold'
        }],
        TSL_OrganisationId: '1055170',
        shortDescription: ' As a key member of the British School of Chicago ? s teaching team',
        jobStartDate: ' ',
        location: 'London',
        externalId: '04C6H70018 '
    }).save();

//    new Job({ JobId: ' 277822 ', JobClosingDate: ' 2014 - 11 - 28 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 11 - 28 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1055170 ', ShortDescription: ' As a key member of the British School of Chicago ? s teaching team,
//                        a Teacher of Mandarin will be acco ', JobStartDate: ' ', ExternalId: ' 04C6H70017 '}).save();
//
//                        new Job({ JobId: ' 277821 ', JobClosingDate: ' 2014 - 11 - 28 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 11 - 28 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1055170 ', ShortDescription: ' As a key member of the British School of Chicago ? s teaching team,
//                            a Teacher of Chemistry will be acc ', JobStartDate: ' ', ExternalId: ' 04C6H70016 '}).save();
//                            new Job({ JobId: ' 277820 ', JobClosingDate: ' 2014 - 11 - 28 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 11 - 28 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1055170 ', ShortDescription: ' As a key member of the British School of Chicago ? s teaching team,
//                                a Teacher of French will be accoun ', JobStartDate: ' ', ExternalId: ' 04C6H70015 '}).save();
//                                new Job({ JobId: ' 277819 ', JobClosingDate: ' 2014 - 11 - 28 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 30 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1055170 ', ShortDescription: ' As a key member of the British School of Chicago ? s teaching team,
//                                    a Teacher of Chemistry will be acc ', JobStartDate: ' ', ExternalId: ' 04C6H70014 '}).save();
//                                    new Job({ JobId: ' 277818 ', JobClosingDate: ' 2014 - 11 - 28 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 11 - 28 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1055170 ', ShortDescription: ' As a key member of the British School of Chicago ? s teaching team,
//                                        a Teacher of Art will be accountab ', JobStartDate: ' ', ExternalId: ' 04C6H70013 '}).save();
//                                        new Job({ JobId: ' 277817 ', JobClosingDate: ' 2014 - 11 - 28 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 11 - 28 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1055170 ', ShortDescription: ' As a key member of the British School of Chicago ? s teaching team,
//                                            a Learning Resource / Support Teache ', JobStartDate: ' ', ExternalId: ' 04C6H70012 '}).save();
//                                        new Job({ JobId: ' 277816 ', JobClosingDate: ' 2014 - 12 - 03 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 03 23 : 59 : 00 ', PackageId: ' 172 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1058939 ', ShortDescription: ' We are seeking to appoint a highly qualified,
//                                            ambitious,
//                                            enthusiastic teacher to join our Mathematic ', JobStartDate: ' May / Sept ', ExternalId: ' 04C7AG0001 '}).save();
//                                            new Job({ JobId: ' 277815 ', JobClosingDate: ' 2014 - 12 - 01 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 01 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1057474 ', ShortDescription: ' The Governors seek to appoint an energetic,
//                                                imaginative and forward - looking teacher who is an outsta ', JobStartDate: ' February 2 ', ExternalId: ' 04C7A90001 '}).save();
//                                                new Job({ JobId: ' 277814 ', JobClosingDate: ' 2014 - 12 - 05 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 20 16 : 34 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 05 23 : 59 : 00 ', PackageId: ' 167 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1051075 ', ShortDescription: ' ', JobStartDate: ' Required a ', ExternalId: ' 04C7AF0001 '}).save();
//    new Job({ JobId: ' 277813 ', JobClosingDate: ' 2014 - 12 - 08 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 20 16 : 39 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 08 23 : 59 : 00 ', PackageId: ' 174 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1050347 ', ShortDescription: ' ', JobStartDate: ' as soon as ', ExternalId: ' 04C7910001 '}).save();
//    new Job({ JobId: ' 277812 ', JobClosingDate: ' 2014 - 12 - 05 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 05 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1046144 ', ShortDescription: ' The Boswells School is looking to appoint a Key Stage 3 Co - ordinator in English.The role involves w ', JobStartDate: ' April or S ', ExternalId: ' 04C7550001 '}).save();
//    new Job({ JobId: ' 277811 ', JobClosingDate: ' 2014 - 12 - 18 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 16 : 29 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 17 23 : 59 : 00 ', PackageId: ' 174 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1034244 ', ShortDescription: ' ', JobStartDate: ' ', ExternalId: ' 04C78E0001 '}).save();
//    new Job({ JobId: ' 277809 ', JobClosingDate: ' 2014 - 12 - 01 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 20 16 : 31 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 01 23 : 59 : 00 ', PackageId: ' 174 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1050496 ', ShortDescription: ' ', JobStartDate: ' January / Fe ', ExternalId: ' 04C7900001 '}).save();
//    new Job({ JobId: ' 277808 ', JobClosingDate: ' 2014 - 12 - 04 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 04 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1066824 ', ShortDescription: ' The successful candidate will have the relevant experience for the post,
//        the drive and enthusiasm to ', JobStartDate: ' ', ExternalId: ' 04C7280001 '}).save();
//        new Job({ JobId: ' 277807 ', JobClosingDate: ' 2014 - 12 - 04 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 00 : 00 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 04 23 : 59 : 00 ', PackageId: ' 168 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1012492 ', ShortDescription: ' Based within the engineering and construction programme team,
//            your main involvement will be in the d ', JobStartDate: ' ', ExternalId: ' 04C74E0001 '}).save();
//            new Job({ JobId: ' 277806 ', JobClosingDate: ' 2014 - 12 - 18 00 : 00 : 00 ', JobAdvertisementDate: ' 2014 - 11 - 19 16 : 20 : 00 ', JobAdvertisementClosingDate: ' 2014 - 12 - 17 23 : 59 : 00 ', PackageId: ' 174 ', StatusId: ' 2 ' TSL_OrganisationId: ' 1034244 ', ShortDescription: ' ', JobStartDate: ' ', ExternalId: ' 04C78D0001 '}).save();
}

// Find all jobs.
Job.find(function(err, jobs) {
    if (err) return console.error(err);
    module.exports.jobItems = jobs;
    //console.dir(navigation);
});

// Find a single jobs by name.
Job.findOne({ title: 'NURSERY' }, function(err, nursery) {
    if (err) return console.error(err);
    console.dir(nursery);
});

//// Find all movies that have a credit cookie.
//Navigation.find({ hasCreditCookie: true }, function(err, movies) {
//    if (err) return console.error(err);
//    console.dir(movies);
//});
