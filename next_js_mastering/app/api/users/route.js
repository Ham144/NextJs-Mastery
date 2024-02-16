import { NextResponse } from "next/server";
import { users } from "@/app/util/db";

export function GET() { //harus huruf besar GET, tidak boleh Get
    const data = users
    const updated = data.filter((item, index) => {
        return index < data.length - 1 && item.id !== data[index + 1].id
    })
    updated.push(data[data.length - 1])
    return NextResponse.json({ updated })

}