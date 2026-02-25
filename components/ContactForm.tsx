"use client";

import { useState } from "react";

const painPoints = [
  "It takes too long to complete (days or weeks)",
  "Too many people get pulled in",
  "Answers are inconsistent across deals",
  "We miss deadlines and lose deals",
  "Copy-pasting from old docs is a nightmare",
  "No single source of truth for answers",
];

const volumeOptions = [
  "1–3 per month",
  "4–10 per month",
  "10–20 per month",
  "20+ per month",
];

const toolOptions = [
  "Spreadsheets / Email",
  "Confluence / Notion",
  "Loopio",
  "Responsive (RFPIO)",
  "Conveyor",
  "Nothing — pure chaos",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  volume: string;
  timeToComplete: string;
  currentTool: string;
  painPoints: string[];
  lostDeal: string;
  anythingElse: string;
};

const empty: FormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  volume: "",
  timeToComplete: "",
  currentTool: "",
  painPoints: [],
  lostDeal: "",
  anythingElse: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function togglePain(point: string) {
    setForm((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter((p) => p !== point)
        : [...prev.painPoints, point],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to Resend / Supabase
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="success-icon">✓</div>
        <h3>Thanks, {form.name.split(" ")[0]}.</h3>
        <p>We&apos;ll be in touch within 24 hours. You&apos;re exactly who we&apos;re building this for.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      {/* SECTION 1: Basic details */}
      <div className="form-section">
        <p className="form-section-label">About you</p>
        <div className="form-row">
          <div className="form-field">
            <label>Full name</label>
            <input
              type="text"
              placeholder="Alex Chen"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Work email</label>
            <input
              type="email"
              placeholder="alex@company.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Company</label>
            <input
              type="text"
              placeholder="Acme Inc."
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label>Your role</label>
            <input
              type="text"
              placeholder="Head of Sales Engineering"
              value={form.role}
              onChange={(e) => set("role", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Current situation */}
      <div className="form-section">
        <p className="form-section-label">Your current situation</p>

        <div className="form-field">
          <label>How many security questionnaires or RFPs do you respond to per month?</label>
          <div className="option-pills">
            {volumeOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`pill ${form.volume === opt ? "active" : ""}`}
                onClick={() => set("volume", opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label>How long does a typical one take to complete?</label>
          <input
            type="text"
            placeholder="e.g. 3–5 days, 2 weeks..."
            value={form.timeToComplete}
            onChange={(e) => set("timeToComplete", e.target.value)}
          />
        </div>

        <div className="form-field">
          <label>What are you using today to manage this?</label>
          <div className="option-pills">
            {toolOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`pill ${form.currentTool === opt ? "active" : ""}`}
                onClick={() => set("currentTool", opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: Pain points */}
      <div className="form-section">
        <p className="form-section-label">Where it hurts</p>

        <div className="form-field">
          <label>What are your biggest pain points? <span className="label-hint">(pick all that apply)</span></label>
          <div className="option-pills">
            {painPoints.map((pt) => (
              <button
                key={pt}
                type="button"
                className={`pill ${form.painPoints.includes(pt) ? "active" : ""}`}
                onClick={() => togglePain(pt)}
              >
                {pt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label>Have you ever lost or delayed a deal because of a slow questionnaire response?</label>
          <div className="option-pills">
            {["Yes — and I remember the deal", "Yes — probably, hard to say", "Not that I know of"].map((opt) => (
              <button
                key={opt}
                type="button"
                className={`pill ${form.lostDeal === opt ? "active" : ""}`}
                onClick={() => set("lostDeal", opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label>Anything else you want us to know? <span className="label-hint">(optional)</span></label>
          <textarea
            placeholder="Tell us about your setup, deal sizes, team size — whatever's relevant..."
            value={form.anythingElse}
            onChange={(e) => set("anythingElse", e.target.value)}
            rows={4}
          />
        </div>
      </div>

      <button type="submit" className="form-submit" disabled={loading}>
        {loading ? "Sending..." : "Send it →"}
      </button>
      <p className="form-submit-note">We read every submission. Not going into a void.</p>
    </form>
  );
}
