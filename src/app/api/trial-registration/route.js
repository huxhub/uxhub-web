import { NextResponse } from "next/server";

const ENDPOINT = "https://uxhubglobal.com/register.php";
const required = ["name", "email", "employees", "company", "store_url", "sku_count"];
const allowed = [
  "name", "role", "email", "employees", "company", "country",
  "store_url", "competitors", "sku_count", "platform",
];

export async function POST(request) {
  let input;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  if (input.website) return NextResponse.json({ success: true });
  const payload = Object.fromEntries(
    allowed.map((key) => [key, String(input[key] || "").trim().slice(0, 500)]),
  );
  payload.ref = "124076";

  if (required.some((key) => !payload[key]) || !/^\S+@\S+\.\S+$/.test(payload.email)) {
    return NextResponse.json(
      { success: false, message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const result = await upstream.json();
    if (!upstream.ok || result.success !== true || result.mail_sent !== true) {
      throw new Error(result.message || "Registration service unavailable.");
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Trial registration forwarding failed:", error.message);
    return NextResponse.json(
      { success: false, message: "Unable to send your request. Please try again or email nasik@uxhubglobal.com." },
      { status: 502 },
    );
  }
}
