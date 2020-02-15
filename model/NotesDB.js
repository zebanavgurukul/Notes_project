const knex = require("../knex");

// 1
let post_data = (add) => {
    return knex('your_Notes').insert(add)
};

module.exports = {post_data}