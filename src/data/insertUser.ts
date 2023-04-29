import { connection } from "..";

export default async function insertUser(name: string, nickname: string, email: string) {

    await connection.insert({
        name, nickname, email
    }).into("todolistuser")

}