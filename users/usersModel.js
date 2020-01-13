const db = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy,
    remove, 
    update
};

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

async function add(user) {
  const [id] = await db('users')
  .returning('id')
  .insert(user, 'id');
return findById(id);     
}

function findById(id) {
    return db('users')
       .where({ id })
       .first();  
   }

async function remove(id) {
    const removed = await db('users')
    .where({ id })
    .del();
return removed;
}

async function update(id, changes) {
    await db('users')
    .where({ id })
    .update(changes);
    const updatedUser = await findbyId(id);
    return updatedUser;
}



