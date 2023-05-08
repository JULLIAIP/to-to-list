import { Request, Response } from "express"
import { connection } from "../connection"

export async function getUsers(req: Request, res: Response) {
    try {
        const result = await connection("todolistuser")
            .select()

        res.send(result).status(200)
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message).status(400)
        } else {
            res.send("Ocorreu um erro").status(500)
        }
    }
}