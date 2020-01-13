const db = require('../database/db-config.js');

module.exports = {
    add, 
    find, 
    findBy,
    findById
    // remove, 
    // update
};

function find() {
return db('users')
    .select('id', 'username', 
    'password');  
}
//  'first_name', 
//     'last_name',
// , 'email'

function findBy(filter) {
 return db('users')
    .where(filter);  
}

 async function add(user) {
 return await db('users')
  .insert(user);
// return findById(id);     
}

function findById(id) {
    return db('users')
       .where({ id })
    //    .first();  
   }

// async function remove(id) {
//     const removed = await db('users')
//     .where({ id })
//     .del();
// return removed;
// }

// async function update(id, changes) {
//     await db('users')
//     .where({ id })
//     .update(changes);
//     const updatedUser = await findbyId(id);
//     return updatedUser;
// }



