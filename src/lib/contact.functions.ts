import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    // E-Mail-Versand wird aktiviert, sobald die Absender-Adresse eingerichtet ist.
    console.log("Kontaktanfrage", { name: data.name, email: data.email });
    return { sent: false as const, reason: "email_not_configured" as const };
  });
