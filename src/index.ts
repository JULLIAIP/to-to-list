import dotenv from "dotenv";
import knex from "knex";
import express from "express";
import cors from 'cors'
import  CreateUser  from "./enpoints/createUser";

dotenv.config()

export const connection = knex({
    client:"mysql", 
    connection:{
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:3306        
    }
})

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})
app.put("/", CreateUser)