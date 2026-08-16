'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Mission() {
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
    <section ref={ref} className="py-20 px-4 text-center max-w-4xl mx-auto relative">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=100&h=100" className="absolute top-0 left-0 lg:left-[-100px] w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg hidden md:block" alt="" />
      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=100&h=100" className="absolute bottom-10 right-0 lg:right-[-80px] w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg hidden md:block" alt="" />

      <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
        Let&apos;s Make Our World<br />
        Cleaner &amp; Greener!
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
        We work with partners &amp; communities to ensure nature thrives and climate change is reversed.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-gray-900 transition-colors shadow-sm text-gray-900 flex items-center gap-1">
          View Projects <ArrowRight className="w-4 h-4" />
        </button>
        <button className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900">
          Learn More
        </button>
      </div>
    </section>
  );
}
