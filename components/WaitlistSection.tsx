"use client";

import { useState } from "react";

type Step = "email" | "questions" | "done";

type Answers = {
  volume: string;
  timeToComplete: string;
  currentTool: string;
  biggestPain: string;
};

const empty: Answers = {
  volume: "",
  timeToComplete: "",
  currentTool: "",
  biggestPain: "",
};

export default function WaitlistSection() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [answers, setAnswers] = useState<Answers>(empty);
  const [loading, setLoading] = useState(false);

  function pick(field: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  }

  async function submitEmail() {
    if (!email || !email.includes("@")) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setStep("questions");
  }

  async function submitAnswers() {
    setLoading(true);
    // TODO: send { email, ...answers } to Supabase / Resend
    await new Promise((r) => setTimeout(r, 800));
    setStep("done");
    setLoading(false);
  }

  return (
    <section className="waitlist" id="waitlist">

      {step === "email" && (
        <>
          <h2>
            Stop letting RFPs and security<br />
            <span>questionnaires stall your deals</span>
          </h2>
          <p>Join the waitlist. Be first when we launch.</p>
          <div className="waitlist-form">
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
              onKeyDown={(e) => e.key === "Enter" && submitEmail()}
              style={emailError ? { borderColor: "#ff4444" } : {}}
              autoFocus
            />
            <button onClick={submitEmail}>Get early access →</button>
          </div>
          <p className="waitlist-note">No spam. Early access pricing locked in for waitlist members.</p>
        </>
      )}

      {step === "questions" && (
        <div className="wq-wrap">
          <p className="wq-eyebrow">30 seconds · 4 quick questions</p>
          <h2 className="wq-heading">Help us build the right thing.</h2>
          <p className="wq-sub">No typing — just pick what fits.</p>

          <div className="wq-questions">

            {/* Q1 */}
            <div className="wq-question">
              <p className="wq-q">How many security questionnaires or RFPs does your team handle per month?</p>
              <div className="wq-pills">
                {["1–3", "4–10", "10–20", "20+"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`wq-pill ${answers.volume === opt ? "active" : ""}`}
                    onClick={() => pick("volume", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="wq-question">
              <p className="wq-q">How long does a typical one take to complete?</p>
              <div className="wq-pills">
                {["A few hours", "1–2 days", "3–5 days", "1–2 weeks", "2+ weeks"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`wq-pill ${answers.timeToComplete === opt ? "active" : ""}`}
                    onClick={() => pick("timeToComplete", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>

            {/* Q3 */}
            <div className="wq-question">
              <p className="wq-q">What are you using today to manage this?</p>
              <div className="wq-pills">
                {["Spreadsheets / Email", "Confluence / Notion", "Loopio", "Responsive (RFPIO)", "Conveyor", "Pure chaos"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`wq-pill ${answers.currentTool === opt ? "active" : ""}`}
                    onClick={() => pick("currentTool", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>

            {/* Q4 */}
            <div className="wq-question">
              <p className="wq-q">What hurts the most?</p>
              <div className="wq-pills">
                {[
                  "It takes way too long",
                  "Too many people get pulled in",
                  "Answers are inconsistent",
                  "We miss deadlines",
                  "No single source of truth",
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`wq-pill ${answers.biggestPain === opt ? "active" : ""}`}
                    onClick={() => pick("biggestPain", opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>

          </div>

          <div className="wq-actions">
            <button
              className="wq-submit"
              onClick={submitAnswers}
              disabled={loading}
            >
              {loading ? "Saving..." : "I'm in →"}
            </button>
            <button
              className="wq-skip"
              onClick={() => setStep("done")}
            >
              Skip — just add me to the list
            </button>
          </div>
        </div>
      )}

      {step === "done" && (
        <div className="wq-done">
          <div className="wq-done-icon">✓</div>
          <h2 className="wq-done-heading">You&apos;re on the list.</h2>
          <p className="waitlist-note" style={{ marginTop: 8 }}>
            We&apos;ll reach out personally when we&apos;re ready for beta users.<br />
            Early access pricing is locked in for you.
          </p>
        </div>
      )}

    </section>
  );
}
