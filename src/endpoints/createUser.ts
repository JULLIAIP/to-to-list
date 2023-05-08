import { Request, Response } from "express";
import { connection } from "../connection";

export async function createUser(req: Request, res: Response) {
    let status = 200;
    let message = 'Operação concluída com sucesso '
    try {

        //validar entradas
        const {name, nickname, email} = req.body

        //consulta banco
        const result = await connection('toDoListUser')
        .insert({name, nickname, email})

        //validar saidas
        if (!result) {
            throw new Error()
        }
        //envia a resposta
        res.send(message).status(status).end()

    } catch (error: unknown) {
        if (error instanceof Error) {
            res.send(error.message).status(400).end()
        } else {
            res.send("Ocorreu um erro inesperado").status(500).end()
        }

    }
}