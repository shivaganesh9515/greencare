'use client';
import { useEffect, useRef } from 'react';

export default function Impact() {
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
    <section className="max-w-7xl mx-auto px-4 pb-24">
      <div ref={ref} className="bg-[#111827] rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9F99D] opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D9F99D] opacity-5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-medium text-white mb-4">Our Impact<br />in Numbers</h3>
            <p className="text-gray-400 text-sm">Transparency is key to our mission. Here is what we&apos;ve achieved together.</p>
          </div>

          <div className="flex flex-col">
            <span className="text-5xl md:text-6xl font-bold text-[#D9F99D] mb-2">50k+</span>
            <span className="text-white font-medium text-lg">Trees Planted</span>
          </div>

          <div className="flex flex-col">
            <span className="text-5xl md:text-6xl font-bold text-[#D9F99D] mb-2">$2.4M</span>
            <span className="text-white font-medium text-lg">Funds Raised</span>
          </div>

          <div className="flex flex-col">
            <span className="text-5xl md:text-6xl font-bold text-[#D9F99D] mb-2">120</span>
            <span className="text-white font-medium text-lg">Global Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
