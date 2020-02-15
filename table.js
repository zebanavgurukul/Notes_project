var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "Notes"
    },
    useNullAsDefault: true
});
module.exports = knex;

knex.schema.hasTable('your_Notes').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('your_Notes', (table) => {
            table.increments('Notes_id')
            table.string('Tasks')
            table.string('Notes')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});