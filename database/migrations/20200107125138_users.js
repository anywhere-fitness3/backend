exports.up = async function(knex, Promise) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments('user_id').primary();
    tbl
      .string("first_name")
      .notNullable();
    tbl.string("last_name").notNullable();
    tbl.string("username").notNullable();
    tbl.string("password").notNullable();
    tbl.string("email").notNullable().unique();
    tbl.boolean("instructor").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
