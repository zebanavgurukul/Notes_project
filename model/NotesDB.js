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

// 5
let delete_data = (Notes_id) => {
    return knex('your_Notes').where("Notes_id",Notes_id).del()
};

// 6
let search = (search_value) => {
    return knex.select('*')
    .from('your_Notes')
    .where('Tasks','like',  '%' +search_value+ '%')
};

// 7
let reminder = (insert_data) => {
    return knex('reminder').insert(insert_data)
};

// 8
let dataget = (Notes_id) => {
    return knex('your_Notes').select('*').where('Notes_id',Notes_id)
};

let postdata = (updata) => {
    return knex('Attachments').insert(updata)
};

// 9
let get_data = (Attachments_id) => {
    return knex('Attachments').select('*').where('Attachments_id',Attachments_id)
};

// 10
let set_data = () => {
    return knex('reminder').select('*')
};

module.exports = {post_data,get,get_id,put,delete_data,search,reminder,dataget,postdata,get_data,set_data}