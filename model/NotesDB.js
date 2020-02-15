const knex = require("../knex");

// 1
let post_data = (add) => {
    return knex('your_Notes').insert(add)
};

// 2
let get = () => {
    return knex('your_Notes').select('*')
};

// 3
let get_id = (Notes_id) => {
    return knex('your_Notes').select('*').where('Notes_id',Notes_id)
};

// 4
let put = (updata,Notes_id) => {
    return knex('your_Notes').update(updata).where('Notes_id',Notes_id)
};

module.exports = {post_data,get,get_id,put}