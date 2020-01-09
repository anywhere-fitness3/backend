exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_course").then(function() {
    // insert seed entries
    return knex("user_course").insert([
      {
        user_id: 1,
        class_id: 1,
      },
    ]);
  });
};

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex("name_fitClass")
//   .truncate()
//   .then(function() {
//     // insert seed entries
//     return knex("name_fitClass").insert([
//       {
//         user_id: 1,
//         class_id: 2,
//       },
//     ]);
//   });
// };