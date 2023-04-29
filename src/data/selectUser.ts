import { connection } from "..";

export default async function selectUserById(id: string) {

    const result = await connection("todolistuser")
        .select('*')
        .where({ id })
    //acessar o objeto , ao invés do obj dentro de um array
    return result[0]

}