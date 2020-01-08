exports.up = async function(knex, Promise) {
    await knex.schema.createTable("user_course", tbl => {
      tbl.increments("id").primary();
      tbl
        .integer("user_id");
        tbl
        .integer("class_id");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("user_course");
  };