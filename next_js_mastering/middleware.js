import { redirect } from "next/dist/server/api-utils"
import { NextResponse } from "next/server"

export function middleware(request) {
    if (request.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/registerlogin/login", request.url))
    }
    console.log(`middleware ran`)
    return NextResponse.json({ success: "middleware run successfully" })
}

export const config = {
    matcher: ["/userlist/:path*"]
}