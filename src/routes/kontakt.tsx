import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { sendContactMessage } from "@/lib/contact.functions";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – frulicious" },
      { name: "description", content: "Schreib uns eine Nachricht – wir melden uns so schnell wie möglich zurück." },
      { property: "og:title", content: "Kontakt – frulicious" },
      { property: "og:description", content: "Schreib uns eine Nachricht – wir melden uns so schnell wie möglich zurück." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontaktPage,
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(name: string, email: string, message: string): Errors {
  const errors: Errors = {};
  if (name.trim().length < 2) errors.name = "Bitte gib deinen Namen an.";
  if (name.trim().length > 100) errors.name = "Der Name ist zu lang.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) errors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
  if (message.trim().length < 10) errors.message = "Bitte schreib uns mindestens 10 Zeichen.";
  if (message.trim().length > 2000) errors.message = "Die Nachricht ist zu lang (max. 2000 Zeichen).";
  return errors;
}

function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // Honeypot
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "pending-setup" | "rate-limited" | "error"
  >("idle");

  const mailtoHref = `mailto:frulicious@outlook.com?subject=${encodeURIComponent(
    `Kontaktanfrage von ${name.trim() || "der Website"}`,
  )}&body=${encodeURIComponent(`Name: ${name.trim()}\nE-Mail: ${email.trim()}\n\n${message.trim()}`)}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(name, email, message);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("sending");
    try {
      const result = await sendContactMessage({
        data: { name: name.trim(), email: email.trim(), message: message.trim(), company },
      });
      if (result?.sent) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else if (result?.reason === "rate_limited") {
        setStatus("rate-limited");
      } else {
        setStatus("pending-setup");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-brand/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-brand transition";
  const errorClass = "mt-2 text-sm text-[rgb(78,10,25)]";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-10 pt-16 pb-24 flex-1">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">· Kontakt</p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-foreground">Schreib uns.</h1>
        <p className="mt-5 text-sm sm:text-base text-foreground/70 max-w-xl leading-relaxed">
          Fragen zu unseren Sorten, Bestellungen oder einer Zusammenarbeit? Wir freuen uns über deine Nachricht
          und melden uns so schnell wie möglich.
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="mt-12 space-y-5 rounded-3xl bg-white/70 border border-brand/10 p-6 sm:p-8 shadow-sm"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-foreground/80 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="Dein Name"
            />
            {errors.name && (
              <p id="name-error" className={errorClass}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-foreground/80 mb-2">
              E-Mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={200}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              placeholder="dein@beispiel.ch"
            />
            {errors.email && (
              <p id="email-error" className={errorClass}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-foreground/80 mb-2">
              Nachricht
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              maxLength={2000}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : "message-count"}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass + " resize-y"}
              placeholder="Wie können wir helfen?"
            />
            {errors.message ? (
              <p id="message-error" className={errorClass}>
                {errors.message}
              </p>
            ) : (
              <p id="message-count" className="mt-2 text-xs text-foreground/50">
                {message.length}/2000 Zeichen
              </p>
            )}
          </div>

          {/* Honeypot gegen Spam – für Menschen unsichtbar */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Firma</label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-brand text-white px-7 py-3 text-sm font-medium hover:bg-brand/90 transition disabled:opacity-60"
            >
              {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
            </button>

            <p aria-live="polite" className="text-sm text-foreground/70">
              {status === "sent" && "Danke! Deine Nachricht ist unterwegs."}
              {status === "rate-limited" && "Du hast gerade mehrere Nachrichten gesendet. Bitte warte kurz."}
              {status === "error" && "Das hat leider nicht geklappt. Bitte versuch es nochmals."}
              {status === "pending-setup" && (
                <>
                  Der automatische Versand ist noch nicht aktiv –{" "}
                  <a href={mailtoHref} className="text-brand underline underline-offset-2">
                    hier direkt per E-Mail senden
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
