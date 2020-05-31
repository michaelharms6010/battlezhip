
exports.up = function(knex) {  
    return knex.schema.createTable("games", tbl => {
        tbl.increments();

        tbl.string("p1_id", 64)
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

        tbl.string("p2_id", 64)
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        
        tbl.string("board_state");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("games");
};
