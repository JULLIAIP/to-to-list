export const connection = require("knex")({
    client :'mysql', 
    connection:{
        host:process.env.DB_HOST, 
        port:process.env.DB_PORT,
        user:process.env.DB_USER,
        password:"", 
        database:"to_do_list"
    }
})