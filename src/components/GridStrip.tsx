'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function GridStrip() {
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
    <section className="max-w-7xl mx-auto px-4 pb-20">
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 h-32 md:h-40">
        <div className="bg-[#F9FAFB] rounded-[32px] flex items-center justify-center text-2xl font-medium shadow-sm hover:shadow-md transition-shadow text-gray-900">
          We
        </div>
        <div className="relative rounded-[32px] overflow-hidden flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
          <img src="https://images.unsplash.com/photo-1505567745926-ba89000d255a?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Protect" />
          <span className="relative z-20 text-white text-2xl font-medium">Protect</span>
        </div>
        <div className="bg-[#D9F99D] rounded-[32px] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <ArrowRight className="text-gray-900 w-12 h-12 group-hover:translate-x-2 transition-transform" />
        </div>
        <div className="relative rounded-[32px] overflow-hidden flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
          <img src="https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?auto=format&fit=crop&w=600&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Nature" />
          <span className="relative z-20 text-white text-2xl font-medium">Nature</span>
        </div>
      </div>
    </section>
  );
}
