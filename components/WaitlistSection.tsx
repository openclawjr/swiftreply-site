"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit() {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    // TODO: wire to Resend / Supabase
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="waitlist" id="waitlist">
      <h2>
        Stop letting RFPs and security<br />
        <span>questionnaires stall your deals</span>
      </h2>
      <p>Join the waitlist. Be first when we launch.</p>

      {submitted ? (
        <p className="waitlist-success">🎉 You&apos;re on the list! We&apos;ll be in touch soon.</p>
      ) : (
        <div className="waitlist-form">
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(false); }}
            style={error ? { borderColor: "#ff4444" } : {}}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "..." : "Get early access"}
          </button>
        </div>
      )}

      <p className="waitlist-note">No spam. Early access pricing locked in for waitlist members.</p>
    </section>
  );
}
