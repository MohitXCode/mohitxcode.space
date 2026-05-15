import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(254).toLowerCase(),
  subject: z.enum(['collaboration', 'feedback', 'question', 'other']),
  message: z.string().min(10).max(2000),
  _honey: z.string().max(0).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = ContactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { _honey, ...data } = result.data

    if (_honey) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // TODO: Add Resend email sending here when API key is available
    console.log('Contact form submission:', data)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}