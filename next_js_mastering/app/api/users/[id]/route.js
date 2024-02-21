import { users } from "@/app/util/db.js"
import { NextResponse } from "next/server"
import fs from "fs"

//get specific data
export async function GET(_, res) {
    const { id } = await res.params
    const found = users.filter((user) => user.id === parseInt(id));
    if (!found) return NextResponse.json({ ok: false })
    return NextResponse.json({ found, ok: true })
}

//LOGIN request
export async function POST(req, res) {
    let { name, email, password } = await req.json()
    const { id } = res.params

    if (id > users.length) { // Use >= to include last element
        return NextResponse.json({ msg: "out of bounds" })
    }
    const { name: uName, email: uEmail, password: uPassword } =
        users.find((user) => user.id === parseInt(id))

    if (uName === name && uEmail === email && uPassword === password) {
        return NextResponse.json([{ status: 202 }, {
            success: `berhasil login sebagai 
        ${uName}`
        }])
    }
    else if (!name || !email || !password) {
        return NextResponse.json({ info: "Credentials masuk perlu diisi" }, { status: 402 })
    }
    else {
        return NextResponse.json({ error: "Data login yang anda masukkan salah" }, { status: 401 })
    }
}

//Update 1 USER fully 
export async function PUT(req, res) {
    const { id } = await res.params
    const { name, age, email, password } = await req.json()

    if (!id || !name || !age || !email || !password) return NextResponse.json({ msg: "Perlu memasukkan data semua field" })

    const foundIndex = users.findIndex((user) => {
        return user.id === parseInt(id)
    })
    if (foundIndex === -1) return NextResponse.json({ error: "out of bounds params" })

    const data = {
        id: parseInt(id), name: name, age: age, email: email, password: password
    }
    users[foundIndex] = data

    const updatedUsers = users
    const toInsertData = JSON.stringify(updatedUsers, null, 2)

    fs.writeFileSync("app/util/db.js", `export const users = ${toInsertData}`, "utf-8")


    return NextResponse.json({ msg: "sukses isi 2" })
}

export async function PATCH(req, res) {
    const { id } = await res.params
    const { name, age, email, password } = await req.json()
    if (!id) return NextResponse.json({ msg: 'perlu memasukkan id' })
    const foundIndex = users.findIndex((user) => {
        return user.id === parseInt(id)
    })
    if (foundIndex === -1) return NextResponse.json({ error: "ID demikian tidak ditemukan" })
    try {
        users[foundIndex].id = parseInt(id)
        name ? users[foundIndex].name = name : users[foundIndex].name
        age ? users[foundIndex].age = age : users[foundIndex].age
        email ? users[foundIndex].email = email : users[foundIndex].email
        password ? users[foundIndex].password = password : users[foundIndex].password
    } catch (error) {
        return NextResponse.json({Error: error})
    }
    
    const updatedUsers = users
    const toInsertData = JSON.stringify(updatedUsers, null, 2)

    try {
        fs.writeFileSync('app/util/db.js', `export const users = ${toInsertData}`, "utf-8")
    } catch (error) {
        return NextResponse.json({Error: error})
    }
    return NextResponse.json({ found: users[foundIndex] })

}

//DELETE specific user
export async function DELETE(req, res) {
    const { id } = await res.params
    if (!id) return NextResponse.json({ msg: "perlu memasukkan id di params" })
    const foundIndex = users.findIndex((user) => {
        return user.id === parseInt(id)
    })
    if (foundIndex === -1) return NextResponse.json({ msg: 'params out of bounds/tak ditemukan' })
    
    //hapus
    users.splice(foundIndex, 1)
    //dapatkan users yang baru setelah operasi
    const updatedUsers = users
    //Converts a JavaScript value to a JavaScript Object Notation (JSON)
    const updatedData = JSON.stringify(updatedUsers, null, 2)
    //hubungkan dengan util/db.js dan ganti semua dengan updatedusers
    fs.writeFileSync('app/util/db.js', `export const users = ${updatedData}`, "utf-8")

    return NextResponse.json({ succes: "sukses menghapus 1 user" })
}