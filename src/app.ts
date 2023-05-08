const express = require("express")
const cors = require("cors")
import dotenv from 'dotenv'

export const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.listen(3003, ()=>{
    console.log("servidor rodando na porta 3003")
})