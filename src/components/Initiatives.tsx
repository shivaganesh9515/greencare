'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const initiatives = [
  { title: 'Tree planting', tags: ['green and cleaner'], date: '12/03/23', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80' },
  { title: 'Beach cleanup', tags: ['future generations'], date: '29/05/23', highlighted: true, image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=400&q=80' },
  { title: 'Educational events', tags: ['courses', 'green initiatives'], date: '06/05/23', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=400&q=80' },
  { title: 'Park cleaning', tags: ['day off cleaning'], date: '18/08/23', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80' },
];

export default function Initiatives() {
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
    <section className="max-w-7xl mx-auto px-4 pb-24 relative">
      <div ref={ref} className="flex justify-between items-end mb-12">
        <h3 className="text-2xl font-medium text-gray-900">Our initiatives for 2023</h3>
        <p className="text-xs text-gray-500 max-w-[200px] text-right hidden sm:block">
          Find out what projects we are implementing to protect nature
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-12 text-xs text-gray-400 pb-4 border-b border-gray-100 uppercase tracking-wide">
          <div className="col-span-4 sm:col-span-5">Title</div>
          <div className="col-span-5 sm:col-span-5">Tags</div>
          <div className="col-span-3 sm:col-span-2 text-right">Date</div>
        </div>

        {initiatives.map((item, i) => (
          <InitiativeRow key={i} {...item} />
        ))}
      </div>
    </section>
  );
}

function InitiativeRow({ title, tags, date, highlighted, image }: {
  title: string; tags: string[]; date: string; highlighted?: boolean; image: string;
}) {
  return (
    <div className="group relative grid grid-cols-12 py-6 border-b border-gray-100 items-center hover:bg-[#F9FAFB] transition-colors cursor-pointer">
      <div className="col-span-4 sm:col-span-5 font-medium text-lg text-gray-900">{title}</div>
      <div className="col-span-5 sm:col-span-5 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className={`text-xs px-3 py-1 rounded-full border ${highlighted && i === 0 ? 'bg-[#D9F99D] border-[#D9F99D] text-black' : 'bg-white border-gray-200 text-gray-600'}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className="col-span-3 sm:col-span-2 text-right text-sm text-gray-500 flex items-center justify-end gap-4">
        {date}
        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="hidden lg:block absolute right-20 z-20 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-3 scale-90 group-hover:scale-100">
        <div className="w-48 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
          <img src={image} className="w-full h-full object-cover" alt="Preview" />
        </div>
      </div>
    </div>
  );
}
