"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Your name must be at least 2 characters"),
  email: z.string().email("A valid email address is required"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Your message must be at least 20 characters"),
});

export type ContactActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export type ContactFormData = z.infer<typeof contactSchema>;

export const sendContactEmail = async (
  formData: ContactFormData,
): Promise<ContactActionState> => {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { status: "error", message: "Invalid form data" };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Portfolio ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:var(--theme-color-primary);">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border-color:var(--theme-color-muted);"/>
          <p style="white-space:pre-wrap;">${message}</p>
        </div>
      `,
    });
    if (error) {
      console.error("Resend API Error:", error);
      return { status: "error", message: "Failed to send email" };
    }

    return { status: "success" };
  } catch (error) {
    console.error("Internal Server Error:", error);
    return { status: "error", message: "Failed to send email" };
  }
};
