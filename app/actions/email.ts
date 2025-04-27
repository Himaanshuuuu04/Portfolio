"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data

  // Create a test account if you don't have real credentials
  // For production, use your actual email credentials
  const testAccount = await nodemailer.createTestAccount()

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.ethereal.email",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER || testAccount.user,
      pass: process.env.EMAIL_PASS || testAccount.pass,
    },
  })

  // Email content
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_FROM || "contact@example.com"}>`,
    to: process.env.EMAIL_TO || "your.email@example.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #16a34a;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #16a34a;">
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
    `,
  }

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions)

    // For development: Log the URL to preview the email (when using Ethereal)
    if (process.env.NODE_ENV !== "production" && info.messageId) {
      console.log("Message sent: %s", info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
