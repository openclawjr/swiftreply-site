import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const body = await req.json();
    const { email, volume, timeToComplete, currentTool, biggestPain } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Save to Supabase
    const { error: dbError } = await supabase.from("waitlist").insert([
      {
        email,
        volume: volume || null,
        time_to_complete: timeToComplete || null,
        current_tool: currentTool || null,
        biggest_pain: biggestPain || null,
      },
    ]);

    if (dbError && dbError.code !== "23505") {
      // 23505 = duplicate, ignore it
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "DB error" }, { status: 500 });
    }

    // Send confirmation email via Resend
    await resend.emails.send({
      from: "SwiftReply <hello@swiftreply.io>",
      to: email,
      subject: "You're on the SwiftReply waitlist",
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px; color: #0a0a0a;">
          <p style="font-size: 22px; font-weight: 700; margin-bottom: 16px;">You're on the list. 🎉</p>
          <p style="font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 16px;">
            Thanks for joining the SwiftReply waitlist. We're building AI that answers security questionnaires
            and RFPs so your team doesn't have to.
          </p>
          <p style="font-size: 15px; color: #555; line-height: 1.6; margin-bottom: 16px;">
            We're onboarding a small group of beta users first — you'll hear from us personally when it's your turn.
            Early access pricing is locked in for you.
          </p>
          <p style="font-size: 15px; color: #555; line-height: 1.6;">
            In the meantime, hit reply if you want to share anything about your current process. We read everything.
          </p>
          <p style="margin-top: 32px; font-size: 14px; color: #888;">— The SwiftReply team</p>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #bbb;">SwiftReply · swiftreply.io</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
