exports.up = function(knex, Promise) {
  return knex.schema.createTable("user_course", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("class_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("name_fitClass")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_course");
};
