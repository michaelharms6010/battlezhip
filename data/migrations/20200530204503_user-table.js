
exports.up = function(knex) {  
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string("username", 64);
        tbl.string("password");
        tbl.string("zaddr");
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
