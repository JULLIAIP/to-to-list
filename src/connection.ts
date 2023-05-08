export const connection = require("knex")({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSORD,
        database: "to_do_list"
    }
})