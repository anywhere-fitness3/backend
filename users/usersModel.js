const db = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy,
    findById,
    remove, 
    update
};

async function add(user) {
  const [id] = await db('users')
  .insert(user)
return findById(id);     
}

function find() {
return db('users')
    .select('id', 'first_name', 
    'last_name', 'username', 
    'password', 'email');  
}

function findBy(filter) {
 return db('users')
    .where(filter);  
}

function remove(id) {
    return db('users')
    .where('id', id)
    .del();
}

function update(id, changes) {
    return db('users')
    .where({ id })
    .update(changes)
    .select('users');
}



