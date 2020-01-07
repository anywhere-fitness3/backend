exports.up = function(knex, Promise) {
  return knex.schema.createTable("name_fitClass", tbl => {
    tbl.incrementss();
    tbl
      .integer("class_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tble.string("class_name", 255);
    tbl.string("class_type", 255);
    tbl.string("class_duration", 255);
    tbl.string("class_intensity_level", 255);
    tbl.string("class_location");
    tbl.string("total_registered", 10);
    tbl.string("max_allowed_registered", 10);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("name_fitClass");
};
