'use client';
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
          <Leaf className="w-6 h-6" />
          <span>GreenCare</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-black font-semibold">Home</a>
          <a href="#" className="hover:text-black transition-colors">Contribution</a>
          <a href="#" className="hover:text-black transition-colors">Our Mission</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Problems <span className="text-xs">▼</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Projects <span className="text-xs">▼</span>
          </div>
        </div>

        <div className="hidden md:block">
          <button className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition-colors">
            Contact Us
          </button>
        </div>

        <button className="md:hidden text-gray-900" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden z-50">
            <a href="#" className="font-medium text-gray-800">Home</a>
            <a href="#" className="font-medium text-gray-600">Contribution</a>
            <a href="#" className="font-medium text-gray-600">Our Mission</a>
            <a href="#" className="font-medium text-gray-600">Problems</a>
            <a href="#" className="font-medium text-gray-600">Projects</a>
            <button className="w-full text-center px-5 py-2.5 rounded-full border border-gray-200 font-semibold mt-2">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
