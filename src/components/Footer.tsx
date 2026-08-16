'use client';
import { ArrowRight, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 pb-8">
      <div className="bg-[#F9FAFB] rounded-[40px] p-8 md:p-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <span className="px-4 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500">newsletter</span>

          <div className="flex-1 w-full md:max-w-2xl md:ml-auto">
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-6 max-w-lg ml-auto text-right">
              Subscribe to our newsletter to get the latest updates on missions projects &amp; initiatives.
            </h3>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <input type="email" placeholder="Email address" className="flex-1 bg-transparent outline-none text-sm py-2" />
              <button className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-70 text-gray-900">
                Subscribe <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-200 pt-8 gap-4">
          <p>&copy;2023. All Rights Reserved</p>
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <Leaf className="w-4 h-4" />
            <span>GreenCare</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
