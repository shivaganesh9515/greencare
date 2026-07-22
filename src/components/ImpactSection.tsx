import RevealMotion from "./RevealMotion";

const stats = [
  { value: "50k+", label: "Trees Planted" },
  { value: "$2.4M", label: "Funds Raised" },
  { value: "120", label: "Global Partners" },
];

export default function ImpactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-24">
      <RevealMotion>
        <div className="bg-[#111827] rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center md:text-left">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-lime opacity-5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-medium text-white mb-4">
                Our Impact<br />
                in Numbers
              </h3>
              <p className="text-gray-400 text-sm">
                Transparency is key to our mission. Here is what we&apos;ve achieved together.
              </p>
            </div>

            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-5xl md:text-6xl font-bold text-brand-lime mb-2">
                  {s.value}
                </span>
                <span className="text-white font-medium text-lg">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </RevealMotion>
    </section>
  );
}
