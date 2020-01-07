
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('user_name', 256).notNullable().unique();
      tbl.string('password').notNullable();
      tbl.boolean('instructor').notNullable();
      tbl.string('class_id').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};


// ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("class_id") REFERENCES "Users"("class_id");

