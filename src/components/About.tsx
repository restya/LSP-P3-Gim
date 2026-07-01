import { aboutData, legalities } from "../data";
import { ShieldCheck, Target, Award } from "lucide-react";

export function About() {
  return (
    <section id="tentang" className="py-24 bg-[#FDFCFB] border-t border-[#0F1110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col">
            <h2 className="text-[48px] sm:text-[64px] font-black tracking-tighter uppercase leading-none mb-8">
              Tentang<br />
              <span className="text-transparent stroke-black" style={{ WebkitTextStroke: '1px #0F1110' }}>LSP P3 Gim</span>
            </h2>
            <p className="text-xl font-medium leading-tight text-[#0F1110]/70 mb-8">
              {aboutData.description}
            </p>
            <p className="text-sm font-medium leading-relaxed text-[#0F1110]/70 mb-12">
              {aboutData.details}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#0F1110] pt-8">
              <div className="flex flex-col gap-4">
                <Target className="w-8 h-8 text-[#0F1110]" />
                <div className="flex flex-col">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2">Standar Kompetensi</h3>
                  <span className="text-sm font-medium text-[#0F1110]/70">Sertifikasi berstandar nasional dan industri</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Award className="w-8 h-8 text-[#0F1110]" />
                <div className="flex flex-col">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-2">Dukungan Industri</h3>
                  <span className="text-sm font-medium text-[#0F1110]/70">Disokong oleh AGI dan studio terkemuka</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border border-[#0F1110] p-8 sm:p-12 bg-[#FF3333]/10">
            <div className="flex items-center gap-4 border-b border-[#0F1110] pb-6 mb-6">
              <ShieldCheck className="w-8 h-8 text-[#0F1110]" />
              <h3 className="text-xl font-bold tracking-tight uppercase">Landasan Hukum & Legalitas</h3>
            </div>
            <ul className="space-y-4">
              {legalities.map((item, idx) => (
                <li key={idx} className="flex gap-4 text-sm font-medium leading-relaxed text-[#0F1110]/80">
                  <span className="text-[#0F1110] font-black">/</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
