import { Request, Response } from "express"
import { connection } from "../connection"

export async function getUsers(req: Request, res: Response) {
    try {
        const id = req.query.user

        const result = await connection("todolistuser")
        .select().where(id ? { id } : {})

        // const query = connection("todolistuser").select()
        // if(id){
        //     query.where({id})
        // }

        // const result = await query         
       

        res.send(result).status(200)
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message).status(400)
        } else {
            res.send("Ocorreu um erro").status(500)
        }
    }
}