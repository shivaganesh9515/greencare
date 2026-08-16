'use client';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const problems = [
  { title: 'Ocean Pollution', image: 'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=600&q=80', tag: 'Pollution issues' },
  { title: 'Glacier Melting', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
  { title: 'Forest Clearance', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80' },
  { title: 'GHG Emissions', image: 'https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?auto=format&fit=crop&w=600&q=80' },
];

export default function Problems() {
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
    <section className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {problems.map((p, i) => (
        <div key={i} ref={i === 0 ? ref : undefined} className="relative h-[400px] rounded-[32px] overflow-hidden group cursor-pointer">
          <img src={p.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full border border-white/20">Ecological Catastrophe</span>
            {p.tag && <span className="bg-[#D9F99D] text-black text-[10px] px-2 py-1 rounded-full">{p.tag}</span>}
          </div>

          <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-2xl text-white font-medium mb-4 leading-tight">{p.title}</h4>
            <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all flex items-center justify-between px-6">
              EXPLORE PROBLEM <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
