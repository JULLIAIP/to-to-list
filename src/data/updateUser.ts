import { connection } from ".."

export default async function updateUser(

    id: number,
    name?: string,
    nickname?: string,
    email?: string) {

if (name) { await connection("todolistuser").update({name}).where({id}) }
    if (nickname) { await connection("todolistuser").update({nickname}).where({id}) }
    if (email) { await connection("todolistuser").update({email}).where({id}) }

}