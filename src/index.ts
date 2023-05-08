import dotenv from "dotenv";
import express from "express";
import cors from 'cors'

app.get("/users", getUsers)//busca por id com query
app.post("/users", createUser)
app.put("/users/:id", upDateUser)
app.delete("/users/:id", deleteUser)
const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})