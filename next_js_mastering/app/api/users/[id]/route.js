import { NextResponse } from "next/server"

export function GET(req, res) {
    const { params: { id } } = res
    return NextResponse.json({ id: id })
}