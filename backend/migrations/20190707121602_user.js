exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("user");

  return await knex.schema.createTable("user", table => {
    table.increments("id").primary(),
      table.string("fullname"),
      table.string("username"),
      table.string("email"),
      table.string("password");
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("user");
};
