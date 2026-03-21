import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z
  .record(z.string(), z.string())
  .refine((obj) => typeof obj.typ === "string" && obj.typ.length > 0, {
    message: "Pole 'typ' jest wymagane",
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: Record<string, string>): string {
  const rows = Object.entries(data)
    .filter(([key]) => key !== "typ")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">${escapeHtml(key)}</td><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<table style="font-family:sans-serif;font-size:14px">${rows}</table>`;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues[0].message },
      { status: 400 },
    );
  }

  const data = result.data as Record<string, string>;

  try {
    await resend.emails.send({
      from: "formularz@logafit.pl",
      to: process.env.CONTACT_EMAIL!,
      subject: `Zgłoszenie: ${data.typ}`,
      html: buildEmailHtml(data),
    });
  } catch {
    return NextResponse.json(
      { error: "Email delivery failed" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
