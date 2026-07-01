import { schemesData } from "../data";
import { Code2, Palette } from "lucide-react";

export function Schemes() {
  return (
    <section id="skema" className="py-24 bg-[#FDFCFB] border-t border-[#0F1110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-[#0F1110] pb-8">
          <h2 className="text-[48px] sm:text-[80px] font-black tracking-tighter uppercase leading-none mb-6">Skema<br/><span className="text-transparent stroke-black" style={{ WebkitTextStroke: '1px #0F1110' }}>Sertifikasi</span></h2>
          <p className="text-xl font-medium max-w-2xl text-[#0F1110]/70">
            Skema yang tersedia meliputi berbagai bidang dalam pengembangan gim, disesuaikan dengan 
            Standar Kompetensi Kerja Nasional Indonesia (SKKNI).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schemesData.map((scheme, idx) => (
            <div key={idx} className="flex flex-col border border-[#0F1110] p-8 sm:p-12 hover:bg-[#FF3333] transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-3xl font-black uppercase tracking-tighter w-2/3 leading-tight">{scheme.category}</h3>
                <div className="w-16 h-16 rounded-full border border-[#0F1110] flex items-center justify-center bg-[#FDFCFB] group-hover:bg-[#0F1110] group-hover:text-[#FDFCFB] transition-colors">
                  {idx === 0 ? <Code2 className="w-6 h-6" /> : <Palette className="w-6 h-6" />}
                </div>
              </div>
              
              <ul className="flex flex-col gap-0 border-t border-[#0F1110]/20 pt-6">
                {scheme.levels.map((level, i) => (
                  <li key={i} className="flex items-center gap-4 py-3 border-b border-[#0F1110]/10 last:border-0 group-hover:border-[#0F1110]/30 transition-colors">
                    <span className="text-[10px] font-bold font-mono">0{i+1}</span>
                    <span className="text-sm font-bold uppercase tracking-wide">{level}</span>
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
