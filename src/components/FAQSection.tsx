import RevealMotion from "./RevealMotion";

const faqs = [
  {
    q: "How can I volunteer?",            a: "It's simple! Click the \"Contact Us\" button in the navigation bar, fill out our volunteer application form, and our community manager will get back to you within 48 hours.",
  },
  {
    q: "Where do the donations go?",
    a: "100% of public donations go directly to funding our on-the-ground projects. We cover our operational costs through private grants and corporate sponsorships.",
  },
  {
    q: "Can I start a local chapter?",
    a: "Absolutely. We provide a starter kit and mentorship for passionate individuals effectively looking to bring GreenCare to their local community.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-24" id="faq">
      <RevealMotion className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Have Questions?</h2>
        <p className="text-gray-500">Find answers to the most common questions about our mission.</p>
      </RevealMotion>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <RevealMotion key={faq.q}>
            <div className="bg-neutral-surface rounded-[24px] p-1 transition-all">
              <details className="group">
                <summary className="flex justify-between items-center p-5 cursor-pointer list-none text-lg font-medium text-gray-900">
                  <span>{faq.q}</span>
                  <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-900 transition-transform duration-300 group-open:rotate-45 hover:bg-brand-lime">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            </div>
          </RevealMotion>
        ))}
      </div>
    </section>
  );
}
