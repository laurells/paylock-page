import { type NextRequest, NextResponse } from "next/server"
import { waitlist } from "@/app/lib/db/schema"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { eq } from "drizzle-orm"

const client = postgres(process.env.POSTGRES_URL!)
const db = drizzle(client)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }
    // Check if email already exists
    const existing = await db.select().from(waitlist).where(eq(waitlist.email, email))
    if (existing.length > 0) {
      return NextResponse.json({ error: "Email already registered for waitlist" }, { status: 409 })
    }
    // Insert new waitlist entry
    await db.insert(waitlist).values({ email })
    return NextResponse.json({ success: true, message: "Successfully added to waitlist" })
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
