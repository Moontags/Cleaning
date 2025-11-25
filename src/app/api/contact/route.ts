import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactEmailData } from '@/app/lib/email';

// Type for request body validation
interface ContactFormRequest {
  company: string;
  contact: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Validation helper
function validateContactForm(data: unknown): data is ContactFormRequest {
  if (!data || typeof data !== 'object') return false;

  const d = data as Record<string, unknown>;

  return (
    typeof d.company === 'string' && d.company.trim().length > 0 &&
    typeof d.contact === 'string' && d.contact.trim().length > 0 &&
    typeof d.email === 'string' && d.email.trim().length > 0 &&
    typeof d.phone === 'string' && d.phone.trim().length > 0 &&
    typeof d.service === 'string' && d.service.trim().length > 0 &&
    typeof d.message === 'string'
  );
}

// Email validation regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request structure
    if (!validateContactForm(body)) {
      return NextResponse.json(
        { error: 'Puuttuvat tai virheelliset kentät / Missing or invalid fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Virheellinen sähköpostiosoite / Invalid email address' },
        { status: 400 }
      );
    }

    // Map form data to email data
    const emailData: ContactEmailData = {
      contactName: body.contact,
      email: body.email,
      phone: body.phone,
      companyName: body.company,
      service: body.service,
      message: body.message,
    };

    // Send email
    await sendContactEmail(emailData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Viesti lähetetty onnistuneesti / Message sent successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);

    // Handle specific error types
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Virheellinen pyyntö / Invalid request format' },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        error: 'Viestin lähetys epäonnistui / Failed to send message',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}
