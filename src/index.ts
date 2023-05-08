import { app } from "./app";
import { createUser } from "./endpoints/createUser";
import { deleteUser } from "./endpoints/deleteUser";

import { getUsers } from "./endpoints/getUsers";
import { upDateUser } from "./endpoints/upDateUser";

app.get("/users", getUsers)//busca por id com query
app.post("/users", createUser)
app.put("/users/:id", upDateUser)
app.delete("/users/:id", deleteUser)

app.get("/tasks", () => { })//busca tasks por id do usuario, por id da task
app.post("/taks", () => { })
app.put("/taks/:id", () => { })
app.delete("/taks/:id", () => { })
