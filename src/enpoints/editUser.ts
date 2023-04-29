import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {

    try {
        //validar entradas
        const { name, nickname, email } = req.body

        if (!name && !nickname && !email) {
            throw new Error("Ao menos um campo deve ser editado")
        }
        if (name === '' || nickname === '' || email === '') {
            throw new Error("Nenhum dos campos pode estar em branco")
        }

        //consulta banco
        await updateUser(Number(req.params.id), name, nickname, email)

        //validar saidas

        //enviar resposta
        res.send("Campo(s) editados com sucesso").status(200)

    } catch (error: unknown) {

        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("An unknown error occurred.");
        }
    }
}