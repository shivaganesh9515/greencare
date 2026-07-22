import RevealMotion from "./RevealMotion";

export default function MissionSection() {
  return (
    <section className="py-20 px-4 text-center max-w-4xl mx-auto relative">
      <RevealMotion>
        {/* Decorative floating images */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=100&h=100"
          className="absolute top-0 left-0 lg:left-[-100px] w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg hidden md:block"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=100&h=100"
          className="absolute bottom-10 right-0 lg:right-[-80px] w-12 h-12 rounded-full object-cover border-4 border-white shadow-lg hidden md:block"
          alt=""
        />

        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
          Let{"\u2019"}s Make Our World<br />
          Cleaner {"\u0026"} Greener!
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          We work with partners {"\u0026"} communities to ensure nature thrives and climate change is reversed.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-semibold hover:border-gray-900 transition-colors shadow-sm text-gray-900">
            View Projects{" "}
            <svg className="inline ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-900">
            Learn More
          </button>
        </div>
      </RevealMotion>
    </section>
  );
}
