const database = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy,
    findById,
    remove, 
    update
};

async function add() {
    return database('users')
    .select('id', 'first_name', 
    'last_name', 'username', 
    'password', 'email')
}

function find(filter) {
    return database('users')
    .where(filter);
}

function findBy(id) {
    return database('users')
    .where({ id })
    .first();
}

function remove(id) {
    return database('users')
    .where('id', id)
    .del();
}

function update(id, changes) {
    return database('users')
    .where({ id })
    .update(changes)
    .select('users');
}