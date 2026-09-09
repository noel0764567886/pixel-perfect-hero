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
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "pending-setup" | "error">("idle");

  const mailtoHref = `mailto:frulicious@outlook.com?subject=${encodeURIComponent(
    `Kontaktanfrage von ${name || "der Website"}`,
  )}&body=${encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)}`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const result = await sendContactMessage({ data: { name, email, message } });
      if (result?.sent) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("pending-setup");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-brand/20 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-brand transition";

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <section className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-10 pt-16 pb-24 flex-1">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">· Kontakt</p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-foreground">
          Schreib uns.
        </h1>
        <p className="mt-5 text-sm sm:text-base text-foreground/70 max-w-xl leading-relaxed">
          Fragen zu unseren Sorten, Bestellungen oder einer Zusammenarbeit? Wir freuen uns über deine Nachricht
          und melden uns so schnell wie möglich.
        </p>

        <form onSubmit={onSubmit} className="mt-12 space-y-5 rounded-3xl bg-white/70 border border-brand/10 p-6 sm:p-8 shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm text-foreground/80 mb-2">Name</label>
            <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Dein Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-foreground/80 mb-2">E-Mail</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="dein@beispiel.ch" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-foreground/80 mb-2">Nachricht</label>
            <textarea id="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass + " resize-y"} placeholder="Wie können wir helfen?" />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-brand text-white px-7 py-3 text-sm font-medium hover:bg-brand/90 transition disabled:opacity-60"
            >
              {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
            </button>
            {status === "sent" && <span className="text-sm text-foreground/70">Danke! Deine Nachricht ist unterwegs.</span>}
            {status === "pending-setup" && (
              <span className="text-sm text-foreground/70">
                Der automatische Versand ist noch nicht aktiv –{" "}
                <a href={mailtoHref} className="text-brand underline underline-offset-2">
                  hier direkt per E-Mail senden
                </a>
                .
              </span>
            )}
            {status === "error" && <span className="text-sm text-brand">Das hat leider nicht geklappt. Bitte versuch es nochmals.</span>}
          </div>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
