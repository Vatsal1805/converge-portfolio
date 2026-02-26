import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter
// Allows max 3 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000 // 1 hour
    })
    return false
  }

  if (limit.count >= 3) return true

  limit.count++
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await req.json()
    const { name, email, company, budget,
      projectType, message, website } = body

    // Honeypot check
    if (website) {
      // Bot filled the honeypot — silently succeed
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Converge Contact <contact@yourverifieddomain.com>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New inquiry from ${name} — ${projectType || 'General'}`,
      html: `
        <div style="font-family: monospace; background: #0c0c0b; 
                    color: #ffffff; padding: 40px; 
                    max-width: 600px;">
          
          <h2 style="font-size: 24px; font-weight: 500; 
                     margin-bottom: 32px; color: #ffffff;">
            New Project Inquiry
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); 
                         font-size: 11px; text-transform: uppercase; 
                         letter-spacing: 0.1em; width: 140px;">
                Name
              </td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">
                ${name}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); 
                         font-size: 11px; text-transform: uppercase; 
                         letter-spacing: 0.1em;">
                Email
              </td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">
                <a href="mailto:${email}" style="color: #4ade80;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); 
                         font-size: 11px; text-transform: uppercase; 
                         letter-spacing: 0.1em;">
                Company
              </td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">
                ${company || '—'}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); 
                         font-size: 11px; text-transform: uppercase; 
                         letter-spacing: 0.1em;">
                Project Type
              </td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">
                ${projectType || '—'}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.07);">
              <td style="padding: 12px 0; color: rgba(255,255,255,0.4); 
                         font-size: 11px; text-transform: uppercase; 
                         letter-spacing: 0.1em;">
                Budget
              </td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px;">
                ${budget || '—'}
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 24px 0 0;">
                <p style="color: rgba(255,255,255,0.4); font-size: 11px; 
                           text-transform: uppercase; letter-spacing: 0.1em; 
                           margin-bottom: 12px;">
                  Message
                </p>
                <p style="color: rgba(255,255,255,0.8); font-size: 15px; 
                           line-height: 1.8; margin: 0;">
                  ${message.replace(/\n/g, '<br>')}
                </p>
              </td>
            </tr>
          </table>

          <div style="margin-top: 40px; padding-top: 24px; 
                      border-top: 1px solid rgba(255,255,255,0.07);">
            <p style="color: rgba(255,255,255,0.3); font-size: 11px; 
                       text-transform: uppercase; letter-spacing: 0.1em;">
              Sent from Converge Digitals contact form
            </p>
          </div>
        </div>
      `,
    })

    // Send auto-reply to client
    await resend.emails.send({
      from: 'Raunak at Converge <contact@yourverifieddomain.com>',
      to: email,
      subject: `Got your message — Converge Digitals`,
      html: `
        <div style="font-family: monospace; background: #0c0c0b; 
                    color: #ffffff; padding: 40px; 
                    max-width: 600px;">
          
          <h2 style="font-size: 24px; font-weight: 500; 
                     margin-bottom: 24px; color: #ffffff;">
            Thanks for reaching out.
          </h2>

          <p style="color: rgba(255,255,255,0.65); font-size: 15px; 
                     line-height: 1.8; margin-bottom: 24px;">
            Hi ${name},
          </p>

          <p style="color: rgba(255,255,255,0.65); font-size: 15px; 
                     line-height: 1.8; margin-bottom: 24px;">
            We've received your message and will get back to you 
            within 24 hours. If your project is a good fit, 
            we'll schedule a 15-minute intro call to learn more.
          </p>

          <p style="color: rgba(255,255,255,0.65); font-size: 15px; 
                     line-height: 1.8; margin-bottom: 40px;">
            In the meantime, feel free to review our process at 
            convergedigital.com/process — it'll give you a clear 
            picture of how we work.
          </p>

          <p style="color: rgba(255,255,255,0.65); font-size: 15px; 
                     line-height: 1.8;">
            — Raunak<br>
            <span style="color: rgba(255,255,255,0.35);">
              Founder, Converge Digitals
            </span>
          </p>

          <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.07);">
            <p style="color: rgba(255,255,255,0.3); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">
              Sent from Converge Digitals contact form
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
