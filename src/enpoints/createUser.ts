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


        res.send(message).status(status).end()

    } catch (error: unknown) {

        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("An unknown error occurred.");
        }
    }
}