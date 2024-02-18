import { NextResponse } from "next/server"

export async function POST(req, res) {
    const { name, age, hobby } = await req.json()
    if (!name || !age || !hobby) {
        console.log(`perlu name, age, hobby`)
        return NextResponse.json({ error: "haha error" }, { status: 402 })

    }
    else {
        console.log(name, age, hobby)

        return NextResponse.json(
            { ok: true }, //harus diatas ini response.ok ini kampret kampret
            { success: "Selamat ya udah isi, eh udah berapa bulan?" },
            { status: 201 },
        )
    }
} 
