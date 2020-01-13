const database = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy,
    findById, 
     update,
    remove
};

function find() {
    return database('users');
}

function findBy(filter) {
    return database('users')
    .where(filter);
}

async function add(user) {
 const [id] = await db('users')
 .insert(user, 'id');
return findById(id);
}

function findById(id) {
    return database('users')
    .where({ id })
    .first();
}


function update(user, id) {
    return database('users')
    .where({ id })
    .update(user)
}

function remove(id) {
    return database('users')
    .where({ id })
    .del();
}

