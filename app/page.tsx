import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav>
        <a href="#" className="logo">Swift<span>Reply</span></a>
        <a href="#waitlist" className="nav-cta">Join Waitlist</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Now in early access</div>
        <h1>
          Security Questionnaires.<br />
          RFPs. <span className="accent">Done in minutes.</span>
        </h1>
        <p className="hero-sub">
          AI that answers security questionnaires and RFPs so your team doesn&apos;t have to.
        </p>
        <div className="hero-cta-group">
          <a href="#waitlist" className="btn-primary">Join the waitlist →</a>
          <a href="#how" className="btn-secondary">See how it works</a>
        </div>
        <div className="hero-social-proof">
          <div className="avatars">
            <div className="avatar a1">S</div>
            <div className="avatar a2">M</div>
            <div className="avatar a3">A</div>
            <div className="avatar a4">J</div>
          </div>
          <span>Join 200+ sales teams on the waitlist</span>
        </div>
      </section>

      {/* PAIN */}
      <section className="pain">
        <p className="pain-label">The problem</p>
        <h2>
          Security questionnaires and RFPs are <em>killing</em> your deals
        </h2>
        <p className="pain-sub">
          Your prospect is ready to buy. Then the security review or RFP lands — 300
          questions, 3 departments, 3 weeks. Sound familiar?
        </p>
        <div className="pain-stats">
          <div className="stat">
            <div className="stat-number">3<span>wks</span></div>
            <div className="stat-label">Average time to complete<br />a security questionnaire</div>
          </div>
          <div className="stat">
            <div className="stat-number">40<span>%</span></div>
            <div className="stat-label">Of deals delayed by<br />security review cycles</div>
          </div>
          <div className="stat">
            <div className="stat-number">12<span>hrs</span></div>
            <div className="stat-label">Engineer time lost per<br />questionnaire on average</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-header">
          <p className="section-label">How it works</p>
          <h2>Three steps from questionnaire to done</h2>
        </div>
        <div className="steps">
          <div className="step">
            <p className="step-number">Step 1</p>
            <span className="step-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--accent)'}}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="12" y2="12"/>
                <line x1="15" y1="15" x2="12" y2="12"/>
              </svg>
            </span>
            <h3>Upload the questionnaire or RFP</h3>
            <p>Drop in any format — Excel, Word, PDF, Google Sheets, or web-based portal. Security questionnaires, RFPs, DDQs — SwiftReply handles them all.</p>
          </div>
          <div className="step">
            <p className="step-number">Step 2</p>
            <span className="step-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--accent)'}}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </span>
            <h3>AI drafts every answer</h3>
            <p>SwiftReply learns your company&apos;s security posture and generates accurate, consistent answers across all questions instantly.</p>
          </div>
          <div className="step">
            <p className="step-number">Step 3</p>
            <span className="step-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--accent)'}}>
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </span>
            <h3>Review, approve, and send</h3>
            <p>Your team reviews in minutes, not weeks. Export back to the original format, ready to send.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="section-header">
          <p className="section-label">Built for sales velocity</p>
          <h2>Everything your team needs to close faster</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
              </svg>
            </div>
            <h3>Learns your security posture</h3>
            <p>Connect your existing docs, policies, and past questionnaires. SwiftReply builds a knowledge base that gets smarter with every response.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
              </svg>
            </div>
            <h3>Any format, any portal</h3>
            <p>Excel, Word, PDF, Google Sheets, RFPIO, Loopio — if your prospect sends it, SwiftReply can answer it.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <h3>Consistent, accurate answers</h3>
            <p>No more conflicting answers across deals. Every response reflects your latest security policies and certifications.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Built for team collaboration</h3>
            <p>Loop in security or engineering for edge cases only. Everyone else stays focused on closing, not answering questionnaires.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="section-header">
          <p className="section-label">Pricing</p>
          <h2>Simple pricing, serious ROI</h2>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card">
            <span className="plan-badge">Starter</span>
            <p className="plan-name">For growing teams</p>
            <p className="plan-desc">Everything you need to stop losing deals to slow security reviews.</p>
            <div className="plan-price">
              <span className="price-currency">$</span>
              <span className="price-amount">199</span>
              <span className="price-period">/mo</span>
            </div>
            <ul className="plan-features">
              <li>Up to 10 questionnaires/month</li>
              <li>All file formats supported</li>
              <li>AI knowledge base (up to 5 docs)</li>
              <li>Export to original format</li>
              <li>Email support</li>
            </ul>
            <a href="#waitlist" className="plan-cta">Join waitlist</a>
          </div>
          <div className="pricing-card featured">
            <span className="popular-tag">Most popular</span>
            <span className="plan-badge">Pro</span>
            <p className="plan-name">For scaling teams</p>
            <p className="plan-desc">Unlimited questionnaires and deeper integrations for high-velocity sales orgs.</p>
            <div className="plan-price">
              <span className="price-currency">$</span>
              <span className="price-amount">499</span>
              <span className="price-period">/mo</span>
            </div>
            <ul className="plan-features">
              <li>Unlimited questionnaires</li>
              <li>Unlimited knowledge base docs</li>
              <li>CRM integrations (Salesforce, HubSpot)</li>
              <li>Team collaboration &amp; review workflows</li>
              <li>Priority support + onboarding</li>
              <li>Custom AI tone &amp; voice</li>
            </ul>
            <a href="#waitlist" className="plan-cta">Join waitlist</a>
          </div>
        </div>
        <p className="pricing-note">Both plans include a 14-day free trial. No credit card required.</p>
      </section>

      {/* WAITLIST */}
      <WaitlistSection />

      {/* FOOTER */}
      <footer>
        <a href="#" className="logo">Swift<span>Reply</span></a>
        <p>© 2026 SwiftReply. Built for sales teams that move fast.</p>
      </footer>
    </main>
  );
}
