import { Request, Response } from "express";

export async function nomeDoEndpoint(req: Request, res: Response) {
    let status = 200;
    let message = 'Operação concluída com sucesso '
    try {

        //validar entradas

        //consulta banco
        const result = await ''

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