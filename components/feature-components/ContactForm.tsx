"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ── Schema ────────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name:    z.string().min(2, "Your name must be at least 2 characters"),
  email:   z.string().email("A valid scroll address is required"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Your message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Sub-components ────────────────────────────────────────────────────────────

function CornerOrnament() {
  return (
    <svg viewBox="0 0 20 20" className="w-full h-full overflow-visible">
      <path
        d="M2 18 L2 2 L18 2"
        fill="none"
        stroke="rgba(180,140,40,0.7)"
        strokeWidth="1"
      />
      <rect
        x="0" y="0" width="6" height="6" rx="1"
        fill="rgba(120,90,20,0.6)"
        stroke="rgba(180,140,40,0.7)"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="cf-label">
      <span className="cf-label-gem" />
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="cf-error">✦ {message}</span>;
}

function SuccessState() {
  return (
    <div className="cf-success">
      <div className="cf-success-gem" />
      <p className="cf-success-title">Your scroll has been dispatched!</p>
      <p className="cf-success-sub">
        I shall respond within 1–2 business days, brave adventurer.
      </p>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    // TODO: wire up to Server Action later
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <div className="cf-shell">
      {/* frames */}
      <div className="cf-frame-outer" />
      <div className="cf-frame-inner" />

      {/* corners */}
      <div className="cf-corner cf-corner-tl"><CornerOrnament /></div>
      <div className="cf-corner cf-corner-tr"><CornerOrnament /></div>
      <div className="cf-corner cf-corner-bl"><CornerOrnament /></div>
      <div className="cf-corner cf-corner-br"><CornerOrnament /></div>

      <div className="cf-content">
        {submitted ? (
          <SuccessState />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* name + email */}
            <div className="cf-row">
              <div className="cf-field">
                <FieldLabel>Your Name</FieldLabel>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Sir Adventurer"
                  className={cn("cf-input", errors.name && "cf-input-error")}
                />
                <FieldError message={errors.name?.message} />
              </div>

              <div className="cf-field">
                <FieldLabel>Your Email</FieldLabel>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="mage@realm.com"
                  className={cn("cf-input", errors.email && "cf-input-error")}
                />
                <FieldError message={errors.email?.message} />
              </div>
            </div>

            {/* subject */}
            <div className="cf-field">
              <FieldLabel>Subject</FieldLabel>
              <input
                {...register("subject")}
                type="text"
                placeholder="Quest proposal, alliance offer..."
                className={cn("cf-input", errors.subject && "cf-input-error")}
              />
              <FieldError message={errors.subject?.message} />
            </div>

            {/* message */}
            <div className="cf-field">
              <FieldLabel>Message</FieldLabel>
              <textarea
                {...register("message")}
                placeholder="Describe your quest in detail, brave adventurer..."
                className={cn("cf-textarea", errors.message && "cf-input-error")}
              />
              <FieldError message={errors.message?.message} />
            </div>

            <div className="cf-divider" />

            {/* submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="cf-submit"
            >
              <Send className="w-[14px] h-[14px]" />
              {isSubmitting ? "Dispatching..." : "Dispatch the Message"}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}