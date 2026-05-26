"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CardShell from "../wow-components/CardShell";

// ── Schema ────────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(2, "Your name must be at least 2 characters"),
  email: z.string().email("A valid scroll address is required"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Your message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Sub-components ────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-1.5 font-heading text-wow-xs tracking-[0.18em] uppercase text-ink-light">
      <span className="w-1 h-1 rotate-45 shrink-0 inline-block bg-accent shadow-glow-subtle" />
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span className="font-heading text-2xs tracking-widest text-intern-text">
      ✦ {message}
    </span>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center gap-2.5 px-5 py-8 text-center">
      <div className="w-2.5 h-2.5 rotate-45 bg-success shadow-glow-success-12-a60" />
      <p className="font-heading text-wow-xl font-bold tracking-widest uppercase text-success-text-muted [text-shadow:0_0_10px_var(--color-success-text-muted)]">
        Your scroll has been dispatched!
      </p>
      <p className="font-heading text-wow-xs tracking-widest italic text-success-text-muted/80">
        I shall respond within 1–2 business days, brave adventurer.
      </p>
    </div>
  );
}

const fieldClassName =
  "w-full rounded-[3px] border bg-[rgba(20,16,8,0.8)] px-3.5 py-2.5 font-heading text-wow-md tracking-[0.06em] text-primary caret-accent outline-none transition-[border-color,box-shadow] duration-200 placeholder:italic placeholder:text-alpha-a20 focus:border-alpha-a45 focus:shadow-input";

const submitClassName =
  "group relative inline-flex items-center justify-center gap-2 w-full h-12 px-8 rounded-[3px] font-heading text-wow-md font-semibold tracking-[0.14em] uppercase cursor-pointer overflow-hidden [background:var(--surface-button)] text-primary border border-border-primary shadow-btn text-shadow-primary transition-[border-color,box-shadow] duration-200 hover:border-ink-light hover:shadow-btn-hover disabled:opacity-60 disabled:cursor-not-allowed after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:opacity-0 after:transition-opacity after:duration-150 after:bg-[linear-gradient(105deg,transparent_35%,var(--alpha-a10)_50%,transparent_65%)] after:bg-size-[200%_100%] after:bg-[-100%_0] hover:after:opacity-100 hover:after:animate-[cf-shimmer_0.8s_ease_forwards]";

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

  const onSubmit = async (data: ContactFormData) => {
    // TODO: wire up to Server Action later
    void data;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <CardShell className="p-8">
      <div className="relative z-20">
        {submitted ? (
          <SuccessState />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* name + email */}
            <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-4 mb-4">
              <div className="flex flex-col gap-1.5 mb-4">
                <FieldLabel>Your Name</FieldLabel>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Sir Adventurer"
                  className={cn(
                    fieldClassName,
                    errors.name
                      ? "border-intern-border-a30"
                      : "border-alpha-a20",
                  )}
                />
                <FieldError message={errors.name?.message} />
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <FieldLabel>Your Email</FieldLabel>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="mage@realm.com"
                  className={cn(
                    fieldClassName,
                    errors.email
                      ? "border-intern-border-a30"
                      : "border-alpha-a20",
                  )}
                />
                <FieldError message={errors.email?.message} />
              </div>
            </div>

            {/* subject */}
            <div className="flex flex-col gap-1.5 mb-4">
              <FieldLabel>Subject</FieldLabel>
              <input
                {...register("subject")}
                type="text"
                placeholder="Quest proposal, alliance offer..."
                className={cn(
                  fieldClassName,
                  errors.subject
                    ? "border-intern-border-a30"
                    : "border-alpha-a20",
                )}
              />
              <FieldError message={errors.subject?.message} />
            </div>

            {/* message */}
            <div className="flex flex-col gap-1.5 mb-4">
              <FieldLabel>Message</FieldLabel>
              <textarea
                {...register("message")}
                placeholder="Describe your quest in detail, brave adventurer..."
                className={cn(
                  fieldClassName,
                  "resize-y min-h-30",
                  errors.message
                    ? "border-intern-border-a30"
                    : "border-alpha-a20",
                )}
              />
              <FieldError message={errors.message?.message} />
            </div>

            <div className="w-full h-px my-5 bg-line-primary" />

            {/* submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={submitClassName}
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              {isSubmitting ? "Dispatching..." : "Dispatch the Message"}
            </button>
          </form>
        )}
      </div>
    </CardShell>
  );
}
