import { type NextRequest, NextResponse } from "next/server"

interface UpdateEmail {
  subject: string
  content: string
  type: "progress" | "announcement" | "beta" | "launch"
  targetAudience?: "all" | "recent" | "beta_testers"
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { subject, content, type, targetAudience = "all" } = body as UpdateEmail

    // Validate admin access (in real app, check authentication)
    const adminKey = request.headers.get("x-admin-key")
    if (adminKey !== "your-admin-key") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get waitlist entries (from database in real app)
    const waitlistEntries = await getWaitlistEntries(targetAudience)

    // Send update emails
    const emailPromises = waitlistEntries.map((entry) => sendUpdateEmail(entry, { subject, content, type }))

    await Promise.all(emailPromises)

    return NextResponse.json({
      success: true,
      message: `Update sent to ${waitlistEntries.length} subscribers`,
      recipientCount: waitlistEntries.length,
    })
  } catch (error) {
    console.error("Update email error:", error)
    return NextResponse.json({ error: "Failed to send update" }, { status: 500 })
  }
}

async function getWaitlistEntries(targetAudience: string) {
  // In real app, this would query your database
  // For demo, return mock data
  return [
    {
      email: "user@example.com",
      name: "John Doe",
      timestamp: new Date().toISOString(),
    },
  ]
}

async function sendUpdateEmail(entry: any, update: UpdateEmail) {
  console.log(`Sending ${update.type} update to ${entry.email}: ${update.subject}`)

  const emailContent = {
    to: entry.email,
    subject: `Paylock Update: ${update.subject}`,
    html: generateUpdateEmailHTML(entry, update),
  }

  // Here you would actually send the email using your email service
  return true
}

function generateUpdateEmailHTML(entry: any, update: UpdateEmail): string {
  const typeEmojis = {
    progress: "🚀",
    announcement: "📢",
    beta: "🎯",
    launch: "🎉",
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Paylock Update</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e40af; font-size: 28px; margin-bottom: 10px;">
          ${typeEmojis[update.type]} ${update.subject}
        </h1>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
        ${update.content}
      </div>
      
      <div style="text-align: center; margin-bottom: 25px;">
        <a href="https://paylock.com" style="display: inline-block; background: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
          Visit Paylock
        </a>
      </div>
      
      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
        <p>You're receiving this because you're on the Paylock waitlist.</p>
        <p><a href="#" style="color: #64748b;">Unsubscribe</a> | <a href="#" style="color: #64748b;">Update Preferences</a></p>
      </div>
    </body>
    </html>
  `
}
