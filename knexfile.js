module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "Sistema_eleitoral",
      user: "postgres",
      password: "123",
      port: "5433"
    },
    migrations: {
      tablename: "knex_migrations",
      directory:  __dirname + "/src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/src/database/seeds"
    }
  }
};
