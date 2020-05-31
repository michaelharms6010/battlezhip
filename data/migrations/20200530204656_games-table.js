
exports.up = function(knex) {  
    return knex.schema.createTable("games", tbl => {
        tbl.increments();

        tbl.integer("p1_id", 64)
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

        tbl.integer("p2_id", 64)
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("games");
};
