exports.up = async function(knex, Promise) {
  await knex.schema.createTable("name_fitClass", tbl => {
    tbl.increments();
    tbl
      .integer("class_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("class_name");
    tbl.string("class_type");
    tbl.string("class_date").defaultTo("Pending");
    tbl.string("class_time").defaultTo("Pending");
    tbl.integer("class_duration").defaultTo("Pending");
    tbl.string("class_city").defaultTo("Pending");
    tbl.string("class_state").defaultTo("Pending");
    tbl.string("class_intensity_level");
    tbl.integer("total_registered").defaultTo("Pending");
    tbl.integer("max_allowed_registered").defaultTo("Pending");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("name_fitClass");
};
