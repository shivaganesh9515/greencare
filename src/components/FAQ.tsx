'use client';
import { Plus } from 'lucide-react';
import { useEffect, useRef } from 'react';

const faqs = [
  { q: 'How can I volunteer?', a: 'It\'s simple! Click the "Contact Us" button in the navigation bar, fill out our volunteer application form, and our community manager will get back to you within 48 hours.' },
  { q: 'Where do the donations go?', a: '100% of public donations go directly to funding our on-the-ground projects. We cover our operational costs through private grants and corporate sponsorships.' },
  { q: 'Can I start a local chapter?', a: 'Absolutely. We provide a starter kit and mentorship for passionate individuals looking to bring GreenCare to their local community.' },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.classList.add('opacity-0');
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.classList.add('animate-fade-in-up'); el.classList.remove('opacity-0'); obs.unobserve(el); }
      }, { threshold: 0.1 });
      obs.observe(el);
    }
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-4 pb-24" id="faq">
      <div ref={ref} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Have Questions?</h2>
        <p className="text-gray-500">Find answers to the most common questions about our mission.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="group bg-[#F9FAFB] rounded-[24px] p-1 transition-all">
            <details className="group">
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none text-lg font-medium text-gray-900">
                <span>{faq.q}</span>
                <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-900 transition-transform duration-300 group-open:rotate-45 group-hover:bg-[#D9F99D]">
                  <Plus className="w-5 h-5" />
                </span>
              </summary>
              <div className="px-5 pb-6 text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
