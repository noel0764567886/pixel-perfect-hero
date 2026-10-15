import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getRequestHeader } from "@tanstack/react-start/server";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte gib deinen Namen an.").max(100),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an.").max(200),
  message: z.string().trim().min(10, "Bitte schreib uns etwas mehr.").max(2000),
  // Honeypot: von echten Personen nie ausgefüllt
  company: z.string().max(0).optional().default(""),
});

// Einfache Rate-Begrenzung pro Server-Instanz
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(key: string) {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 500) recent.clear();
  return hits.length > MAX_PER_WINDOW;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) {
      // Bot erkannt – still verwerfen
      return { sent: true as const };
    }

    const ip =
      getRequestHeader("cf-connecting-ip") ??
      getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (isRateLimited(`ip:${ip}`) || isRateLimited(`mail:${data.email.toLowerCase()}`)) {
      return { sent: false as const, reason: "rate_limited" as const };
    }

    // E-Mail-Versand wird aktiviert, sobald die Absender-Adresse eingerichtet ist.
    return { sent: false as const, reason: "email_not_configured" as const };
  });
