const cleaner = require("knex-cleaner");

const knex = require("../db-config.js");

exports.seed = function( knex, Promise) {
  // Deletes ALL existing entries
 
  return cleaner.clean( knex );
  // return cleaner.clean( knex, {
  //   mode: "truncate",
  //   ignoreTables: ["knex_migrations", "knex_migrations_lock"]
  // });
};
