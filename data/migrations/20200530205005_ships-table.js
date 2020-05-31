
exports.up = function(knex) {
    return knex.schema.createTable("ships", tbl => {
        tbl.increments();
        
        tbl.integer("game_id")
        .references("id")
        .inTable("games")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        
        tbl.integer("player_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        
        tbl.string("name");
        tbl.string("start_coord");
        tbl.string("end_coord");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("ships")
};
