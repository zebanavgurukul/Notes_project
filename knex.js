const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password : "navgurukul",
        database : "Notes"
    }
};

module.exports = knex(connection);