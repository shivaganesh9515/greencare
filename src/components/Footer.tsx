import RevealMotion from "./RevealMotion";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 pb-8">
      <RevealMotion>
        <div className="bg-neutral-surface rounded-[40px] p-8 md:p-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <span className="px-4 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500">
              newsletter
            </span>

            <div className="flex-1 w-full md:max-w-2xl md:ml-auto">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-6 max-w-lg ml-auto text-right">
                Subscribe to our newsletter to get the latest updates on missions projects {"\u0026"}
                initiatives.
              </h3>
              <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-transparent outline-none text-sm py-2"
                />
                <button className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-70 text-gray-900">
                  Subscribe{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-200 pt-8 gap-4">
            <p>{"\u00A9"} 2023. All Rights Reserved</p>
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="fill-current text-gray-900"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <span>GreenCare</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </RevealMotion>
    </footer>
  );
}
