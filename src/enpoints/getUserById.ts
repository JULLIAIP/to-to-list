import { Request, Response } from "express";
import selectUserById from "../data/selectUser";

export async function getUserById(req: Request, res: Response) {

    try {
        //validar entradas

        //consulta banco

        const user = await selectUserById(req.params.id)
        //corrigir o banco pra aceitar o envio sem ID


        if (!user) {

            throw new Error()
        }
        res.send(user).status(200)
    } catch (error: unknown) {

        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("An unknown error occurred.");
        }
    }
}