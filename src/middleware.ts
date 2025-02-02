// Temporarily disable Clerk middleware for local development
import { NextResponse } from "next/server";

export default function middleware() {
    return NextResponse.next();
}

// Configure matcher
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};