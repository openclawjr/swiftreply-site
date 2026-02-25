import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to us — SwiftReply",
  description: "Tell us about your security questionnaire and RFP process. We're building this for you.",
};

export default function ContactPage() {
  return (
    <main>
      {/* NAV */}
      <nav>
        <a href="/" className="logo">Swift<span>Reply</span></a>
        <a href="/#waitlist" className="nav-cta">Join Waitlist</a>
      </nav>

      {/* HEADER */}
      <section className="contact-hero">
        <div className="hero-badge">Talk to us</div>
        <h1 className="contact-h1">
          Tell us about your<br />
          <span className="accent">questionnaire hell.</span>
        </h1>
        <p className="contact-sub">
          We&apos;re talking to 20 sales teams before writing the first line of code.
          5 minutes of your time shapes what we build.
        </p>
      </section>

      {/* FORM */}
      <section className="contact-body">
        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer>
        <a href="/" className="logo">Swift<span>Reply</span></a>
        <p>© 2026 SwiftReply. Built for sales teams that move fast.</p>
      </footer>
    </main>
  );
}
