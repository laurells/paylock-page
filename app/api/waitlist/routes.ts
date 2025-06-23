import { type NextRequest, NextResponse } from "next/server"

interface WaitlistEntry {
  email: string
  name?: string
  company?: string
  interests?: string[]
  referralSource?: string
  timestamp: string
  id: string
}

// In a real app, this would be stored in a database
// For demo purposes, we'll simulate database operations
const waitlistDatabase: WaitlistEntry[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, company, interests, referralSource } = body

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }

    // Check if email already exists
    const existingEntry = waitlistDatabase.find((entry) => entry.email.toLowerCase() === email.toLowerCase())
    if (existingEntry) {
      return NextResponse.json({ error: "Email already registered for waitlist" }, { status: 409 })
    }

    // Create new waitlist entry
    const newEntry: WaitlistEntry = {
      email: email.toLowerCase(),
      name: name || "",
      company: company || "",
      interests: interests || [],
      referralSource: referralSource || "direct",
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substring(2, 15),
    }

    // Add to database (in real app, this would be a database insert)
    waitlistDatabase.push(newEntry)

    // Send welcome email (in real app, this would use a service like SendGrid, Resend, etc.)
    await sendWelcomeEmail(newEntry)

    // Calculate position in waitlist
    const position = waitlistDatabase.length

    return NextResponse.json({
      success: true,
      message: "Successfully added to waitlist",
      position,
      totalSignups: waitlistDatabase.length,
    })
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  // Get waitlist stats (admin endpoint)
  const totalSignups = waitlistDatabase.length
  const recentSignups = waitlistDatabase
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 10)

  return NextResponse.json({
    totalSignups,
    recentSignups: recentSignups.map((entry) => ({
      email: entry.email,
      name: entry.name,
      company: entry.company,
      timestamp: entry.timestamp,
    })),
  })
}

async function sendWelcomeEmail(entry: WaitlistEntry) {
  // In a real application, you would use a service like:
  // - Resend
  // - SendGrid
  // - AWS SES
  // - Mailgun

  console.log(`Sending welcome email to ${entry.email}`)

  // Simulate email sending
  const emailContent = {
    to: entry.email,
    subject: "Welcome to the Renvue Waitlist! 🚀",
    html: generateWelcomeEmailHTML(entry),
  }

  // Here you would actually send the email
  // await emailService.send(emailContent)

  return true
}

function generateWelcomeEmailHTML(entry: WaitlistEntry): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Renvue Waitlist</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #1e40af; font-size: 28px; margin-bottom: 10px;">Welcome to Renvue!</h1>
        <p style="color: #64748b; font-size: 16px;">You're now on the waitlist for the future of secure escrow services</p>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
        <h2 style="color: #1e40af; margin-top: 0;">What's Next?</h2>
        <ul style="color: #475569; padding-left: 20px;">
          <li>We'll keep you updated on our development progress</li>
          <li>You'll get early access when we launch our beta</li>
          <li>Exclusive insights into new features and updates</li>
          <li>Priority support when the platform goes live</li>
        </ul>
      </div>
      
      <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="color: #1e40af; margin-top: 0;">Your Waitlist Details</h3>
        <p style="margin: 5px 0;"><strong>Email:</strong> ${entry.email}</p>
        ${entry.name ? `<p style="margin: 5px 0;"><strong>Name:</strong> ${entry.name}</p>` : ""}
        ${entry.company ? `<p style="margin: 5px 0;"><strong>Company:</strong> ${entry.company}</p>` : ""}
        <p style="margin: 5px 0;"><strong>Joined:</strong> ${new Date(entry.timestamp).toLocaleDateString()}</p>
      </div>
      
      <div style="text-align: center; margin-bottom: 25px;">
        <h3 style="color: #1e40af;">Follow Our Progress</h3>
        <p style="color: #64748b; margin-bottom: 15px;">Stay connected for the latest updates</p>
        <div>
          <a href="#" style="display: inline-block; margin: 0 10px; color: #1e40af; text-decoration: none;">Twitter</a>
          <a href="#" style="display: inline-block; margin: 0 10px; color: #1e40af; text-decoration: none;">LinkedIn</a>
          <a href="#" style="display: inline-block; margin: 0 10px; color: #1e40af; text-decoration: none;">Blog</a>
        </div>
      </div>
      
      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
        <p>Thanks for your interest in Renvue!</p>
        <p>The Renvue Team</p>
      </div>
    </body>
    </html>
  `
}
