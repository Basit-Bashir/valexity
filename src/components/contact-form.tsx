"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { cx } from "./ui";

type Option = { group: string; items: string[] };

type Props = {
  options: Option[];
  defaultInterest?: string;
  email: string;
  phone: string;
  tone?: "light" | "dark";
};

/**
 * Contact form. Submissions go to EmailJS (named as the contact-form processor in the privacy policy)
 * when NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 * are set. Without them, the form opens a pre-filled email to the sales inbox instead.
 */
export function ContactForm({ options, defaultInterest = "", email, phone, tone = "light" }: Props) {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dark = tone === "dark";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) next.email = "Please enter a valid email address.";
    if (data.phone && data.phone.replace(/\D/g, "").length < 10) next.phone = "Please enter a 10-digit phone number.";
    if (!data.message?.trim()) next.message = "Please tell us a little about what you need.";
    if (!data.consent) next.consent = "Please confirm you agree to the Privacy Policy and Terms.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const body = [
        `Name: ${data.name}`,
        `Company: ${data.company || "-"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "-"}`,
        `Interested in: ${data.interest || "-"}`,
        `SMS opt-in: ${data.sms ? "Yes" : "No"}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        `Website inquiry: ${data.interest || "General"}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: { ...data, sms: data.sms ? "Yes" : "No", page: window.location.pathname },
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const label = cx("block text-sm font-medium", dark ? "text-ink-200" : "text-ink-800");
  const field = cx(
    "mt-2 block w-full rounded-xl px-4 py-3 text-[0.9375rem] outline-none transition-shadow",
    dark
      ? "bg-white/5 text-white ring-1 ring-white/15 placeholder:text-ink-500 focus:ring-2 focus:ring-brand-400"
      : "bg-white text-ink-950 ring-1 ring-ink-200 placeholder:text-ink-400 focus:ring-2 focus:ring-brand-500",
  );
  const err = (name: string) =>
    errors[name] ? (
      <p id={`${id}-${name}-err`} className="mt-1.5 text-sm text-red-600" role="alert">
        {errors[name]}
      </p>
    ) : null;
  const a11y = (name: string) => ({
    "aria-invalid": Boolean(errors[name]) || undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-err` : undefined,
  });

  if (status === "sent") {
    return (
      <div role="status" className={cx("rounded-3xl p-10 text-center", dark ? "bg-white/5 ring-1 ring-white/10" : "bg-brand-50 ring-1 ring-brand-100")}>
        <CircleCheck aria-hidden className="mx-auto size-10 text-brand-600" />
        <p className={cx("mt-4 text-xl font-semibold", dark ? "text-white" : "text-ink-950")}>Thanks, we&apos;ve got it.</p>
        <p className={cx("mt-2", dark ? "text-ink-300" : "text-ink-600")}>
          A member of our team will get back to you shortly. For anything urgent, call {phone}.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-interest`} className={label}>
          What can we help with?
        </label>
        <select id={`${id}-interest`} name="interest" defaultValue={defaultInterest} className={field}>
          <option value="">Choose a service (optional)</option>
          {options.map((o) => (
            <optgroup key={o.group} label={o.group}>
              {o.items.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-name`} className={label}>
          Full name <span aria-hidden className="text-brand-600">*</span>
        </label>
        <input id={`${id}-name`} name="name" autoComplete="name" required className={field} {...a11y("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor={`${id}-company`} className={label}>
          Company
        </label>
        <input id={`${id}-company`} name="company" autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={label}>
          Work email <span aria-hidden className="text-brand-600">*</span>
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={field} {...a11y("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>
          Phone number
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="(312) 555-0123" className={field} {...a11y("phone")} />
        {err("phone")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={label}>
          How can we help? <span aria-hidden className="text-brand-600">*</span>
        </label>
        <textarea id={`${id}-message`} name="message" rows={5} required className={cx(field, "resize-y")} placeholder="Tell us about your team, your current setup and what you'd like to improve." {...a11y("message")} />
        {err("message")}
      </div>

      <div className={cx("space-y-4 text-sm leading-6 sm:col-span-2", dark ? "text-ink-400" : "text-ink-600")}>
        <label className="flex gap-3">
          <input type="checkbox" name="consent" value="yes" className="mt-1 size-4 shrink-0 accent-brand-600" {...a11y("consent")} />
          <span>
            I have read and agree to the{" "}
            <Link href="/privacy-policy" className="font-medium underline underline-offset-4">Privacy Policy</Link> and{" "}
            <Link href="/terms-and-conditions" className="font-medium underline underline-offset-4">Terms &amp; Conditions</Link>. By submitting this form I confirm I am 13 years of age or older.{" "}
            <span aria-hidden className="text-brand-600">*</span>
          </span>
        </label>
        {err("consent")}
        <label className="flex gap-3">
          <input type="checkbox" name="sms" value="yes" className="mt-1 size-4 shrink-0 accent-brand-600" />
          <span>
            Optional: I agree to receive SMS messages from Valexity Technologies about my inquiry and IT support, including support
            responses, MFA passcodes, security alerts and delivery notifications. Message frequency varies. Message and data rates may
            apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{" "}
            <Link href="/sms-privacy-policy" className="font-medium underline underline-offset-4">SMS Privacy Policy</Link> and{" "}
            <Link href="/sms-terms-and-conditions" className="font-medium underline underline-offset-4">SMS Terms</Link>.
          </span>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-600 px-7 font-medium text-white shadow-[0_8px_24px_-8px] shadow-brand-600/60 transition-colors hover:bg-brand-500 disabled:opacity-70"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-600">
            Something went wrong. Please email {email} or call {phone}.
          </p>
        )}
      </div>
    </form>
  );
}
