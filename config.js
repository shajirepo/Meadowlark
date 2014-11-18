/**
 * Created by admin on 18/11/2014.
 */
module.exports = {
    mongo: {
        development: {
            connectionString: 'mongodb://tes:tesdb@ds063889.mongolab.com:63889/shaji-test-db'
        },
        production: {
            connectionString: 'mongodb://<dbuser>:<dbpassword>@ds063889.mongolab.com:63889/shaji-test-db'
        }
    }
};
