const db = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy,
    findById,
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

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}