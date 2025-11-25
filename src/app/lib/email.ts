import nodemailer from "nodemailer";

export interface ContactEmailData {
  contactName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const transporter = nodemailer.createTransport({
    host: "posti.zoner.fi",
    port: 465,
    secure: true, // true for port 465, false for port 587
    auth: {
      user: "noreply@siivousote.fi",
      pass: "Alienkiss66",
    },
  });

  // Verify connection configuration
  try {
    await transporter.verify();
  } catch (error) {
    console.error("SMTP connection error:", error);
    throw new Error("Email service configuration error");
  }

  const { contactName, email, phone, companyName, service, message } = data;

  // Service type labels
  const serviceLabels: Record<string, string> = {
    'office': 'Toimistosiivoukset / Office Cleaning',
    'business': 'Liiketilojen siivous / Commercial Cleaning',
    'industrial': 'Teollisuussiivoukset / Industrial Cleaning',
    'home_cleaning': 'Kotisiivous / Home Cleaning',
    'other': 'Muu palvelu / Other Service',
  };
  const serviceLabel = serviceLabels[service] || service;

  // Email content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #003580; border-bottom: 2px solid #003580; padding-bottom: 10px;">
        Uusi tarjouspyyntö / New Quote Request
      </h2>

      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #003580; margin-top: 0;">Yhteystiedot / Contact Information</h3>
        <p><strong>Nimi / Name:</strong> ${contactName}</p>
        <p><strong>Sähköposti / Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Puhelin / Phone:</strong> ${phone}</p>
        <p><strong>Yritys / Company:</strong> ${companyName}</p>
        <p><strong>Palvelu / Service:</strong> ${serviceLabel}</p>
      </div>

      <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
        <h3 style="color: #003580; margin-top: 0;">Viesti / Message</h3>
        <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>

      <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
        <p>This email was sent from the Siivousote contact form at ${new Date().toLocaleString(
          "fi-FI",
          { timeZone: "Europe/Helsinki" }
        )}.</p>
      </div>
    </div>
  `;

  const textContent = `
Uusi tarjouspyyntö / New Quote Request

Yhteystiedot / Contact Information:
Nimi / Name: ${contactName}
Sähköposti / Email: ${email}
Puhelin / Phone: ${phone}
Yritys / Company: ${companyName}
Palvelu / Service: ${serviceLabel}

Viesti / Message:
${message}

---
This email was sent from the Siivousote contact form at ${new Date().toLocaleString(
    "fi-FI",
    { timeZone: "Europe/Helsinki" }
  )}.
  `;

  // Send mail
  const info = await transporter.sendMail({
    from: `"Siivousote Tarjouslomake" <${
      process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@siivousote.fi"
    }>`,
    to: "info@siivousote.fi",
    subject: `Uusi tarjouspyyntö: ${contactName} - ${companyName}`,
    text: textContent,
    html: htmlContent,
    replyTo: email,
  });

  console.log("Email sent successfully:", info.messageId);
  return info;
}
