const database = require('../data/dbConfig');

module.exports = {
    add, 
    find,
    findBy,
    findById,
    remove,
    update
};

function find() {
    return database('users')
    .select('id', 'first_name','last_name', 
    'username','password', 'email','instructor');
}

function findBy(filter) {
    return database('users').where(filter);
}

async function add(user) {
    const [id] = await database('users').insert(user);
    return findById(id);
}

function findById(id) {
    return database('users')
    .where({ id })
    .first();
}

function update(id, changes) {
    return database('users')
    .where({ id })
    .update(changes)
    .select('users');
}
 