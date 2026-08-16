'use client';
import { ArrowUpRight, ArrowRight, Droplets } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
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
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Card - Lime Green */}
      <div className="lg:col-span-5 bg-[#D9F99D] rounded-[40px] p-6 sm:p-10 flex flex-col justify-between min-h-[500px] lg:h-[580px] relative overflow-hidden">
        <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-semibold opacity-70 text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          GreenCare Group
        </div>

        <div className="mt-12 sm:mt-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-gray-900">
            Saving{' '}
            <span className="inline-block border-2 border-gray-800 rounded-full p-1 mx-1 align-middle">
              <ArrowUpRight className="w-5 h-5" />
            </span>{' '}
            Nature &amp; <br />
            Fighting <span className="underline decoration-2 decoration-gray-800 underline-offset-4">Climate</span><br />
            Change Together.
          </h1>
        </div>

        <div className="mt-auto space-y-3">
          <div className="bg-white/40 backdrop-blur-sm rounded-full p-1 pl-4 flex items-center justify-between max-w-md">
            <input type="email" placeholder="Enter your e-mail" className="bg-transparent border-none outline-none text-sm placeholder-gray-600 w-full text-gray-900" />
            <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://randomuser.me/api/portraits/thumb/men/21.jpg" alt="Member 1" className="w-10 h-10 rounded-full border-2 border-[#D9F99D] object-cover" />
              <img src="https://randomuser.me/api/portraits/thumb/men/22.jpg" alt="Member 2" className="w-10 h-10 rounded-full border-2 border-[#D9F99D] object-cover" />
              <img src="https://randomuser.me/api/portraits/thumb/men/23.jpg" alt="Member 3" className="w-10 h-10 rounded-full border-2 border-[#D9F99D] object-cover" />
            </div>
            <p className="text-xs font-medium text-gray-800 max-w-[120px] leading-tight">
              1.5M+ members of our charity organization
            </p>
          </div>
        </div>
      </div>

      {/* Right Card - Desert Image with Map UI */}
      <div className="lg:col-span-7 bg-gray-100 rounded-[40px] relative overflow-hidden min-h-[500px] lg:h-[580px] group">
        <img src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=2487&auto=format&fit=crop" alt="Desert Landscape" className="w-full h-full object-cover" />

        {/* Volunteer card */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg flex items-center gap-3 max-w-xs animate-fade-in-up">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100" className="w-10 h-10 rounded-xl object-cover" alt="Volunteer" />
          <div>
            <p className="text-xs font-bold text-gray-900">We &amp; Our</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Volunteers</p>
          </div>
          <div className="ml-auto bg-[#D9F99D] w-8 h-8 rounded-full flex items-center justify-center text-gray-900">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white">
          <Droplets className="w-5 h-5" />
        </div>

        {/* Floating markers */}
        <div className="absolute top-1/3 right-1/4 bg-[#D9F99D]/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center gap-1 text-gray-900">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" /> GHG Emissions
        </div>

        <div className="absolute top-1/2 left-1/4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center gap-1 text-gray-900">
          <div className="w-2 h-2 bg-red-400 rounded-full" /> Water Pollution
        </div>

        {/* Bottom info card */}
        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-3xl shadow-xl max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-900">GC</div>
              <img src="https://randomuser.me/api/portraits/thumb/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="user" />
            </div>
            <div className="flex gap-1">
              <div className="w-8 h-8 rounded-full bg-[#D9F99D] flex items-center justify-center text-xs font-bold border border-[#D9F99D] text-gray-900">D</div>
              <div className="w-8 h-8 rounded-full bg-[#3B3B3B] text-white flex items-center justify-center text-xs font-bold border border-[#3B3B3B]">B</div>
            </div>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            We are an organization dedicated to protecting the environment &amp; nature.
          </p>
        </div>
      </div>
    </section>
  );
}
