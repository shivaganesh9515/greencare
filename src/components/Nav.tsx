"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-900 fill-current">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <span>GreenCare</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-black font-semibold">Home</a>
          <a href="#" className="hover:text-black transition-colors">Contribution</a>
          <a href="#" className="hover:text-black transition-colors">Our Mission</a>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
            Problems <span className="text-xs">&#9660;</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
            Projects <span className="text-xs">&#9660;</span>
          </div>
        </div>

        <div className="hidden md:block">
          <button className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-50 transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 18 18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
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
