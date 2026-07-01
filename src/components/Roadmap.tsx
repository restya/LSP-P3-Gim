import { roadmapData } from "../data";
import { Milestone } from "lucide-react";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-[#0F1110] text-[#FDFCFB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#FDFCFB]/20 pb-8 mb-16 flex flex-col">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF3333] mb-4 flex items-center gap-2">
            <Milestone className="w-4 h-4" />
            Five Year Plan
          </p>
          <h2 className="text-[48px] sm:text-[80px] font-black tracking-tighter uppercase leading-none mb-6">Peta Jalan<br/><span className="text-transparent" style={{ WebkitTextStroke: '1px #FDFCFB' }}>Strategis</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-l border-[#FDFCFB]/20">
          {roadmapData.map((item, idx) => (
            <div key={idx} className="p-8 border-r border-b border-[#FDFCFB]/20 hover:bg-[#FF3333]/10 transition-colors group flex flex-col">
              <div className="flex justify-between items-center mb-8 border-b border-[#FDFCFB]/20 pb-4">
                <h3 className="text-xl font-bold uppercase">{item.year}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 font-mono text-[#FF3333]">0{idx + 1}</span>
              </div>
              <ul className="flex flex-col gap-4 text-sm font-medium text-[#FDFCFB]/70">
                {item.targets.map((target, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-[#FF3333] font-black mt-0.5">/</span>
                    <span className="uppercase tracking-wide leading-snug">{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
