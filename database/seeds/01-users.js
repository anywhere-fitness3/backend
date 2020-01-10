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
        password: "password1",
        email: "janefonda@gmail.com",
        instructor: false
      },
      {
        first_name: "Olivia",
        last_name: "Newton",
        username: "olivianewton",
        password: "password2",
        email: "olivianewton@gmail.com",
        instructor: true
      },
      {
        first_name: "Suzanne",
        last_name: "Somers",
        username: "suzannesomers",
        password: "password3",
        email: "suzannesomers@gmail.com",
        instructor: false
      },
    ]);
  });
};
