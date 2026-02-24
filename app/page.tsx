import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="font-bold text-lg tracking-tight">SwiftReply</span>
        <a
          href="#waitlist"
          className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Get early access
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-24 pb-20 max-w-3xl mx-auto">
        <div className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Now in beta
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          300 Security Questions.<br />10 Minutes. Done.
        </h1>
        <p className="text-xl text-gray-500 mb-10 leading-relaxed">
          SwiftReply reads your incoming security questionnaire or RFP,
          pulls answers from your existing docs, and gives you a first draft
          ready to review — not write.
        </p>
        <a
          href="#waitlist"
          className="inline-block bg-gray-900 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-gray-700 transition"
        >
          Join the waitlist →
        </a>
        <p className="text-sm text-gray-400 mt-4">Free during beta. No credit card.</p>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            RFPs and security questionnaires are a tax on your sales team.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            The average enterprise questionnaire has 200–400 questions.
            Your team spends days copy-pasting from old docs, chasing down
            answers from security, and praying the deadline doesn&apos;t move up.
            Meanwhile, the deal waits.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            {
              step: "01",
              title: "Upload the questionnaire",
              desc: "Excel, Word, or PDF. SwiftReply reads it and extracts every question automatically.",
            },
            {
              step: "02",
              title: "AI drafts the answers",
              desc: "It searches your knowledge base — policies, past responses, certs — and writes a first draft for each question.",
            },
            {
              step: "03",
              title: "Review, approve, export",
              desc: "You review the draft, approve or edit, then export the filled document ready to send.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center gap-4">
              <span className="text-4xl font-black text-gray-200">{step}</span>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof placeholder */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">
            Built for sales engineers at companies like
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-bold text-xl">
            {["Your Logo", "Your Logo", "Your Logo", "Your Logo"].map(
              (t, i) => (
                <span key={i}>{t}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
        <p className="text-gray-500 mb-12">
          Flat monthly. No credits. No surprises.
        </p>
        <div className="border border-gray-200 rounded-2xl p-10 inline-block text-left max-w-sm w-full">
          <p className="text-sm font-medium text-gray-400 mb-2">Starter</p>
          <p className="text-5xl font-extrabold mb-1">
            $499<span className="text-xl font-normal text-gray-400">/mo</span>
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Unlimited projects · Up to 5 users · Self-serve
          </p>
          <ul className="space-y-3 text-sm text-gray-700 mb-8">
            {[
              "Unlimited questionnaires & RFPs",
              "AI answer generation from your KB",
              "Excel, Word, and PDF support",
              "Confidence scoring & source citations",
              "Export filled documents",
              "Onboard in minutes — no sales call",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href="#waitlist"
            className="block w-full text-center bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Join the waitlist
          </a>
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="bg-gray-900 text-white py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get early access</h2>
        <p className="text-gray-400 mb-8">
          We&apos;re onboarding a small group of beta users now. Free access.
          Brutal feedback welcome.
        </p>
        <WaitlistForm />
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-400">
        © 2026 SwiftReply.io · Built for sales engineers who have better things to do.
      </footer>

    </main>
  );
}
