import { connection } from './../connection';
import { Request, Response } from "express";

export async function upDateUser(req: Request, res: Response) {
    let status = 200;
    let message = 'Operação concluída com sucesso '
    try {

        //validar entradas
        const id = req.params.id
        const { name, nickname, email } = req.body

        //if(!name&& !nickname&& !email)

        //consulta banco
        await connection('toDoListUser').update({ name, nickname, email }).where({ id })

        //validar saidas

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