exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
  .truncate()
  .then(function() {
    // insert seed entries
    return knex("users").insert([
      {
        first_name: "Jane",
        last_name: "Fonda",
        username: "janefonda",
        password: "password",
        email: "jf@gmail.com",
        instructor: false
      },
    ]);
  });
};
