import { app } from "./app";

import { getUsers } from "./endpoints/getUsers";

app.get("/users", getUsers)//busca por id com query
app.post("/users", ()=>{})
app.put("/users/:id", ()=>{})
app.delete("/users/:id", ()=>{})

app.get("/tasks", ()=>{})//busca tasks por id do usuario, por id da task
app.post("/taks", ()=>{})
app.put("/taks/:id", ()=>{})
app.delete("/taks/:id", ()=>{})
