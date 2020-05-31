
exports.up = function(knex) {
  return knex.schema.createTable("turns", tbl => {
      tbl.increments();
      
      tbl.integer("game_id")
      .references("id")
      .inTable("games")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

      tbl.string("next_turn_hash");
      tbl.string("move")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("turns")
};
