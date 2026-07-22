import RevealMotion from "./RevealMotion";

const problems = [
  {
    title: "Ocean Pollution",
    img: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=600&q=80",
    tags: [
      { text: "Ecological Catastrophe", outline: true },
      { text: "Pollution issues", outline: false },
    ],
  },
  {
    title: "Glacier Melting",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: [{ text: "Ecological Catastrophe", outline: true }],
  },
  {
    title: "Forest Clearance",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    tags: [{ text: "Ecological Catastrophe", outline: true }],
  },
  {
    title: "GHG Emissions",
    img: "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?auto=format&fit=crop&w=600&q=80",
    tags: [{ text: "Ecological Catastrophe", outline: true }],
  },
];

export default function ProblemsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {problems.map((problem) => (
        <RevealMotion
          key={problem.title}
          className="relative h-[400px] rounded-[32px] overflow-hidden group cursor-pointer"
        >
          <img
            src={problem.img}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={problem.title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

          <div className="absolute top-6 left-6 flex gap-2">
            {problem.tags.map((tag) => (
              <span
                key={tag.text}
                className={`${
                  tag.outline
                    ? "bg-white/20 backdrop-blur-md text-white border border-white/20"
                    : "bg-brand-lime text-black"
                } text-[10px] px-2 py-1 rounded-full`}
              >
                {tag.text}
              </span>
            ))}
          </div>

          <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-2xl text-white font-medium mb-4 leading-tight">{problem.title}</h4>
            <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all flex items-center justify-between px-6">
              EXPLORE PROBLEM{" "}
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
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
        </RevealMotion>
      ))}
    </section>
  );
}
