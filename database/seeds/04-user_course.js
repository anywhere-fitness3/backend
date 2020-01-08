exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("name_fitClass").then(function() {
    // insert seed entries
    return knex("name_fitClass").insert([
      {
        user_id: 1,
        class_id: 1,
      },
    ]);
  });
};