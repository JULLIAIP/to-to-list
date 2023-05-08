import { Request, Response } from "express";
import { connection } from "../connection";

export async function deleteUser(req: Request, res: Response) {
    let status = 200;
    let message = 'Usuário deletado com sucesso '
    try {

        //validar entradas
        const id = req.params.id
        //consulta banco
        await connection('toDoListUser').delete().where({ id })

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