exports.up = function(knex, Promise) {
  return knex.schema.createTable("name_fitClass", tbl => {
    tbl.increments();
    tbl
      .integer("class_id")
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("class_name", 255);
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


// exports.up = async function(knex, Promise) {
//   await knex.schema.createTable("name_fitClass", tbl => {
//     tbl.increments();
//     tbl
//       .integer("class_id")
//       .unsigned()
//       .notNullable()
//       .references('id')
//       .inTable('users')
//       .onDelete("CASCADE")
//       .onUpdate("CASCADE");
//     tbl.string("class_type");
//     tbl.string("class_name");
//    tbl.date('class_date').defaultTo('Pending');
//    tbl.string('class_time').defaultTo('Pending');
//     tbl.string("class_duration").defaultTo('Pending');
//     tbl.string('class_city').defaultTo('Pending');
//     tbl.string('class_state').defaultTo('Pending');
//     tbl.string("class_intensity_level");
//     tbl.integer("total_registered");
//     tbl.integer("max_allowed_registered");
//   });
// };

// exports.down = function(knex, Promise) {
//   return knex.schema.dropTableIfExists("name_fitClass");
// };
