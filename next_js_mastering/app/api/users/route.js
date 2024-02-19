import { users } from "@/app/util/db.js"
import { NextResponse } from "next/server"
import fs from 'fs'

//Get ALL Users
export async function GET(req, res) {
    const data = users
    return NextResponse.json({ data }, { ok: true }, { status: 200 })
}

//Create New user 
export async function POST(req, res) {
    const { name, age, email, password } = await req.json()
    const pathDb = 'app/util/db.js'

    if (!name || !age || !email || !password) return NextResponse.json({ msg: "Data harus di isi semua " })
    users.push({
        id: users[users.length - 1].id + 1,
        name: name,
        age: age,
        email: email,
        password: password
    })

    const updatedUsers = users

    const updatedData = JSON.stringify(updatedUsers, null, 2)

    fs.writeFileSync(pathDb, `export const users = ${updatedData}`, "utf-8")

    return NextResponse.json({ succes: "sukses" })
}