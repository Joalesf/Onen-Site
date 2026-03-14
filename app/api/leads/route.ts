import { NextResponse } from "next/server";
import { z } from "zod";

const leadPayloadSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(2),
  message: z.string().min(8),
  source: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Payload invalido", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const lead = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
    };

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ?? process.env.N8N_WEBHOOK_URL;

    let webhookStatus: "not_configured" | "sent" | "failed" = "not_configured";

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lead),
        });

        webhookStatus = webhookResponse.ok ? "sent" : "failed";
      } catch {
        webhookStatus = "failed";
      }
    }

    // Placeholder for future email/CRM connectors.
    console.info("[LEAD_RECEIVED]", { source: lead.source, service: lead.service, webhookStatus });

    return NextResponse.json({
      ok: true,
      message: "Lead recibido",
      webhookStatus,
    });
  } catch {
    return NextResponse.json({ ok: false, message: "Error interno al procesar lead" }, { status: 500 });
  }
}
