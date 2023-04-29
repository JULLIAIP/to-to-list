import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function CreateUser(req: Request, res: Response) {
    let status = 200;
    let message = 'Usuário criado com sucesso '

    try {

        //validar entradas
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) {
            throw new Error()
        }

        //consulta banco
        //corrigir o banco pra aceitar o envio sem ID

        await insertUser(name, nickname, email)

        //validar saidas

        //enviar resposta
        const result = ''

        if (!result) {
            throw new Error()
        }

        res.send(message).status(status).end()

    } catch (error) {

        res.send(message).status(status).end()

    }
}